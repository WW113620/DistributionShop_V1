using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service;
using DistributionShop.Service.Orders;
using DistributionShop.Service.Test;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Logic
{
    public class OrderLogic
    {
        private readonly DataContextEntities _dataContext;
        private readonly IOrderService _orderService;
        private readonly IProductService _productService;
        public OrderLogic(DataContextEntities dataContext, IOrderService orderService, IProductService productService)
        {
            this._dataContext = dataContext;
            _orderService = orderService;
            _productService= productService;
        }

        public void Test()
        {       
            var list = this._dataContext.TestUsers.ToList();
            var viewList = AutoMapper.Mapper.Map<List<UserViewModel>>(list);

            RedisHelper redis = new RedisHelper();
            redis.StringSet("test", "test112");
            string test = redis.StringGet("test");
        }

        /// <summary>
        /// 添加订单（价格后台重新计算）
        /// </summary>
        /// <param name="dto"></param>
        public BaseResult AddOrder(OrderLogicAddOrderDto dto)
        {
            if (dto.t_Address == null)
            {
                return new BaseResult(1, "订单地址为空");
            }
            var order = new Order();
            order.UserName = dto.UserName;
            order.OrderSn = dto.OrderSn;
            order.PayState = (int)PayStateEnums.未支付;
            //order.TotalPayPrice = dto.TotalPayPrice;
            //order.DiscountAmount = dto.DiscountAmount;
            order.RealName = dto?.t_Address?.RealName;
            order.Platform = (int)dto.PlatformEnum;
            order.PayChannel = (int)dto.PayChannel;//缺少对象
            order.IsDel = 0;
            order.AddTime = DateTime.Now;
            order.UpdateTime = DateTime.Now;
            order.Remark = dto.Remark;
            order.UserId = dto.UserId;

            //int discountAmount = 0;//数量
            //decimal totalPayPrice = 0;//总价
            decimal totalPrice = 0;//商品总价(含邮费)
            int totalCount = 0;
            int secondPostTypeCount = 0;//第二类邮寄类型商品数量
            decimal postage = 0;//邮费
            bool isPostageFree = false;//是否有第三类商品
            var orderDetailList = new List<OrderDetail>();
            var delProductNameList = new List<string>();
            if (dto?.checkedShoppingCartList?.Any()??false)
            {
                foreach (var checkedShoppingCart in dto.checkedShoppingCartList)
                {
                    if (checkedShoppingCart?.CartProductList?.Any()??false)
                    {
                        //订单下物品Id列表
                        var productIdList = checkedShoppingCart.CartProductList.Select(x => x.ProductId)?.ToList();
                        //查询物品
                       var productList = _productService.GetListByIdList(productIdList);

                        foreach (var goods in checkedShoppingCart.CartProductList)
                        {
                            //根据当前库里商品进行价格查询
                            var product = productList?.FirstOrDefault(x => x.Id == goods.ProductId);
                            if (product==null|| product.AuditStatus!=(int)AuditStatusEnums.销售中)
                            {
                                delProductNameList.Add(product.ProductName);
                                break;
                            }

                            #region 邮费
                            if (!isPostageFree)
                            {
                                //套餐类商品，此类商品包邮，且订单中含有套餐类商品的订单一律包邮；即套餐类商品混合第二类第一类商品整单包邮。
                                isPostageFree = product.PostType == (int)PostTypeEnums.第三类;
                            }
                            if (isPostageFree)
                            {
                                postage = 0;
                            }
                            else
                            {
                                if (product.PostType == (int)PostTypeEnums.第三类)
                                {
                                }
                                else if (product.PostType == (int)PostTypeEnums.第二类)
                                {
                                    secondPostTypeCount += goods.Num;
                                    if (isPostageFree || totalPrice >= 500 || secondPostTypeCount >= 6) //有第三类包邮商品 第二类商品中判断满6件或500元
                                    {
                                        postage = 0;
                                    }
                                    else if (secondPostTypeCount == 5)//5件商品，补运费5元；
                                    {
                                        postage = 5;

                                    }
                                    else if (secondPostTypeCount == 4)//4件商品，补运费10元；
                                    {
                                        postage = 10;
                                    }
                                    else if (secondPostTypeCount == 3)//3件商品，补运费15元；
                                    {
                                        postage = 15;
                                    }
                                    else if (secondPostTypeCount == 2)//2件商品，补运费20元；
                                    {
                                        postage = 20;
                                    }
                                    else if (secondPostTypeCount == 1)//1件商品，补运费25元。
                                    {
                                        postage = 25;
                                    }
                                }
                            }
                            #endregion

                            OrderDetail orderDetail = new OrderDetail
                            {
                                UserName= dto.UserName,
                                OrderSn = dto.OrderSn,
                                ProductId= product.Id,
                                ProductName = product.ProductName,
                                ShopId = checkedShoppingCart.ShopId,
                                ShopName= checkedShoppingCart.ShopName,
                                OriginalPrice = product.OriginalPrice,
                                WebPrice= product.WebPrice,
                                OrderProductAmount = goods.Num,
                                IsDel = 0,
                                ProductImagePath=product.CoverFileName,
                                AddTime = DateTime.Now,
                                PostType= product.PostType,
                                Status=(int)WebOrderDetailStatusEnums.默认
                            };
                            orderDetailList.Add(orderDetail);

                            totalCount += goods.Num;
                            totalPrice += ((product.WebPrice * goods.Num).ToDecimal(2));
                        }
                    }
                }

                order.Postage = postage;
                order.TotalPayPrice = totalPrice+postage;
                order.DiscountAmount = totalCount;
            }
            else
            {
                return new BaseResult(1, "订单未选择任何物品");
            }

            var Order_Address = AutoMapper.Mapper.Map<Order_Address>(dto.t_Address);
            if (Order_Address != null) {
                Order_Address.AddTime = DateTime.Now;
                Order_Address.IsActive = true;
                Order_Address.OrderSn= dto.OrderSn;
            }

            //保存
           var result = _orderService.AddOrderAndOrderDetail(order, orderDetailList, Order_Address);
            var msg = delProductNameList != null && delProductNameList.Count > 0 ? string.Format($"添加订单成功,订单中的商品({string.Join(",", delProductNameList)})已经下架") : "添加订单成功";
            return new BaseResult(0, msg);
        }
    }
}
