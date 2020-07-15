using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Logic
{
    /// <summary>
    /// 购物车逻辑
    /// </summary>
    public class ShoppingCartLogic
    {
        private readonly DataContextEntities _dataContext;
        private readonly RedisHelper _redisHelper;
        private readonly IProductService _productService;

        private readonly string RedisUserCode = "CartUserName_";
        public ShoppingCartLogic(DataContextEntities dataContext, RedisHelper redisHelper, IProductService productService)
        {
            this._dataContext = dataContext;
            this._redisHelper = redisHelper;
            this._productService = productService;
        }

        /// <summary>
        /// cookie里购物车添加商品
        /// </summary>
        /// <param name="shoppingCartList">购物车原有商品</param>
        /// <param name="cartGoods">需要填加的商品</param>
        /// <param name="num">需要填加的或者保存的商品数量</param>
        /// <param name="isAddCount">需要填加的商品数量</param>
        /// <returns></returns>
        public ModelResult<List<ShoppingCartModel>> AddForShoppingCart(List<ShoppingCartModel> shoppingCartList, long productId, int productNum, bool isAddCount=true)
        {
            //订单不能超过
            if (productNum > 100000)
            {
                return new ModelResult<List<ShoppingCartModel>> { code = 1, msg = "一次购买商品不能超过10万!" };
            }

            //如果是直接保存的个数，不能小于等于0
            if (!isAddCount&& productNum<=0)
            {
                return new ModelResult<List<ShoppingCartModel>> { code = 1, msg = "购物车商品不能小于零!" };
            }

            //根据商品Id查询商品信息
            var productEntity = _productService.GetProductMsgById(productId);
        
            //当前版本没有商铺分类，所以赋值默认
            if (productEntity!=null)
            {
                productEntity.ShopId = 0;
                productEntity.ShopName = "毛毛雨健康生活馆";
            }

            //商品售罄
            //if (product.Quantity <= 0)
            //{
            //    throw new Exception("该商品已经售罄!");
            //}

            //删除商品无需查询商品封面数据
            //if (productNum < 0)
            //{
            //    //查询商品封面
            //    var productMedia = _productService.GetMediaListByProId(productId, (int)MediaTypeEnums.封面图片);
            //    if (productMedia != null && productMedia.Any())
            //    {
            //        product.HeadImage = "";// ConfigHelper.GetCoverImage(product.CoverFileName);
            //    }
            //}
            

            //购物车列表无商品初始化一个对象
            shoppingCartList = shoppingCartList ?? new List<ShoppingCartModel>();

            //从购物车原有商品获取商品
            var shopId = productEntity?.ShopId ?? 1;
            var shoppingCartModel = shoppingCartList?.FirstOrDefault(x => x.ShopId == shopId);

            #region 查询购物车里所有商品信息，为以后价格实时变动做准备
            ////查询购物车里所有商品信息，为以后价格实时变动做准备
            //var productIdListList = shoppingCartList.Select(x =>
            //{
            //    return x.CartProductList?.Select(y => y.ProductId);
            //});
            //List<long> productIdList = null;
            //foreach (var list in productIdListList)
            //{
            //    if (productIdList == null || !productIdList.Any())
            //    {
            //        productIdList = list?.ToList();
            //    }
            //    else
            //    {
            //        productIdList.AddRange(productIdList.Except(list));
            //    }
            //}
            ////查询当前库里购物车物品价格等信息
            //var productList = _productService.GetListByIdList(productIdList);

            ////之后循环更新购物车里价格


            #endregion


            //购物车未添加该商店
            if (shoppingCartModel == null)
            {
                //不存在商店，就不能添加下架商品或者删除商品
                if (productEntity == null || productEntity.AuditStatus != (int)AuditStatusEnums.销售中 || productNum <= 0)
                {
                    return new ModelResult<List<ShoppingCartModel>> { code = 0, msg = "该商品已经下架!" };
                }

                //根据商品信息添加购物车信息
                shoppingCartList.Add(new ShoppingCartModel
                {
                    ShopId = productEntity.ShopId??0,
                    ShopName = productEntity.ShopName,
                    IsCheck = false,
                    CartProductList = new List<CartProductModel>
                    {
                        new CartProductModel
                        {
                            ProductId=productId,
                            ProductName=productEntity.ProductName,
                            Num =productNum,
                            TotalFee= (productEntity.WebPrice??0) * productNum,
                            IsCheck=false,
                            OriginalPrice=productEntity.OriginalPrice??0,
                            WebPrice=productEntity.WebPrice??0,
                            PostType=productEntity.PostType??(int)PostTypeEnums.第一类,
                            FileName = productEntity.CoverFileName,
                        }
                    }
                 });
            }
            else//购物车已添加该商店
            {
                //购物车避免一个商店下无商品这种错误数据
                if (shoppingCartModel.CartProductList==null)
                {
                    shoppingCartModel.CartProductList = new List<CartProductModel>();
                }
                
                // 判断购物车商品列表中是否存在该商品
                var cartProductModel = shoppingCartModel?.CartProductList?.FirstOrDefault(x => x.ProductId == productId);

                //如果购物车商品列表中不存在商品
                if (cartProductModel==null)
                {
                    //购物车商品列表中不存在商品，添加数量不能小于0且必须存在于数据库里
                    if (productEntity== null || productEntity.AuditStatus != (int)AuditStatusEnums.销售中 || productNum < 0)//该商品已不在购物车里，请刷新页面!
                    {
                        return new ModelResult<List<ShoppingCartModel>> { code = 0, msg = "该商品已经被下架!" };
                    }

                    shoppingCartModel.IsCheck = false;
                    cartProductModel = new CartProductModel
                    {
                        ProductId = productId,
                        ProductName = productEntity.ProductName,
                        Num = productNum,
                        TotalFee = (productEntity.WebPrice ?? 0) * productNum,
                        IsCheck = false,
                        OriginalPrice = productEntity.OriginalPrice ?? 0,
                        WebPrice = productEntity.WebPrice ?? 0,
                        PostType = productEntity.PostType ?? (int)PostTypeEnums.第一类,
                        FileName = productEntity.CoverFileName,
                    };

                    //购物车商家下添加商品
                    shoppingCartModel.CartProductList.Add(cartProductModel);
                }
                else//如果购物车商品列表已有商品
                {
                    //购物车已有商品，数据库已经下架，不能添加
                    if ((productEntity == null || productEntity.AuditStatus != (int)AuditStatusEnums.销售中) && productNum > 0)
                    {
                        return new ModelResult<List<ShoppingCartModel>> { code = 1, msg = "该商品已经被下架，无法购买!" };
                    }

                    //如果单独添加，则直接数量相加，如果是输入结果，直接赋值数量
                    cartProductModel.Num=isAddCount? (cartProductModel.Num+ productNum) : productNum;
                    //如果删除已下架的商品，就使用旧的价格
                    var webPrice = productEntity == null ? cartProductModel.WebPrice : productEntity.WebPrice;
                    //价格需要根据现在的价格重新计算
                    cartProductModel.TotalFee = (webPrice??0) * cartProductModel.Num;

                    //如果列表已有商品数量小于等于0，则移除
                    if (cartProductModel.Num<=0)
                    {
                        shoppingCartModel.CartProductList.Remove(cartProductModel);
                        //如果商家下无任何商品，则移除
                        if (!shoppingCartModel.CartProductList.Any())
                        {
                            shoppingCartList.Remove(shoppingCartModel);
                        }
                        else
                        {
                            //商家是否全选
                            shoppingCartModel.IsCheck = !shoppingCartModel.CartProductList.Exists(x => x.IsCheck == false);
                        }
                    }
                }
            }
            return new ModelResult<List<ShoppingCartModel>> 
            { 
                code = 0, 
                model = shoppingCartList, 
                msg = "添加成功"
            };
        }

        /// <summary>
        /// cookie里批量删除购物车商品
        /// </summary>
        /// <param name="shoppingCartList"></param>
        /// <param name="productIdList"></param>
        /// <returns></returns>
        public List<ShoppingCartModel> DelForShoppingCartByList(List<ShoppingCartModel> shoppingCartList,List<long> productIdList)
        {
            if (shoppingCartList==null|| shoppingCartList.Count<=0|| productIdList==null|| productIdList.Count<=0)
            {
                return shoppingCartList;
            }
            //循环处理购物车商品
            for (int i = 0; i < shoppingCartList.Count; i++)
            {
                var shoppingCart = shoppingCartList[i];
                if (shoppingCart.CartProductList != null && shoppingCart.CartProductList.Count > 0)
                {
                    var cartProductList = shoppingCart.CartProductList?.Where(x => !productIdList.Contains(x.ProductId));
                    if (cartProductList!=null&& cartProductList.Any())
                    {
                        shoppingCart.CartProductList = cartProductList.ToList();
                        //商家是否全选
                        shoppingCart.IsCheck = !shoppingCart.CartProductList.Exists(x => x.IsCheck == false);
                    }
                    else
                    {    
                        //如果商家下无任何商品，则移除
                        shoppingCartList.RemoveAt(i);
                        i--;
                    }
                }
                else
                {
                    //如果商家下无任何商品，则移除
                    shoppingCartList.RemoveAt(i);
                    i--;
                }
            }
            return shoppingCartList;

        }
        
        

        /// <summary>
        ///  redis中获取购物车商品
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<ShoppingCartModel> GetListByUserNameFromRedis(string userName)
        {
            try
            {
                string redisKey = string.Concat(RedisUserCode, userName);
                var shoppingCartModelList = _redisHelper.Get<List<ShoppingCartModel>>(redisKey);
                return shoppingCartModelList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 向redis中添加整体购物车
        /// </summary>
        /// <param name="shoppingCartList"></param>
        public void AddListToRedis(string userName,List<ShoppingCartModel> shoppingCartList)
        {
            string redisKey = string.Concat(RedisUserCode, userName);
            _redisHelper.Set<List<ShoppingCartModel>>(redisKey, shoppingCartList);
        }

        /// <summary>
        /// 已登录购物车和未登录购物车合并
        /// </summary>
        /// <param name="redisList"></param>
        /// <param name="cookiesList"></param>
        /// <returns></returns>
        public List<ShoppingCartModel> MergeShoppingCartList(List<ShoppingCartModel> redisList, List<ShoppingCartModel> cookiesList)
        {
            foreach (var shoppingCartModel in cookiesList)
            {
                foreach (var cartGoodsModel in shoppingCartModel.CartProductList)
                {
                    var result = AddForShoppingCart(redisList, cartGoodsModel.ProductId, cartGoodsModel.Num);
                    if (result.code==0)
                    {
                        redisList = result.model;
                    }
                }
            }
            return redisList;
        }

        /// <summary>
        /// 购物选中商品，
        /// </summary>
        /// <param name="goodsIdList"></param>
        public void UpdateGoodsCheckStatus(List<long> goodsIdList, List<ShoppingCartModel> shoppingCartModelList, string userName)
        {
            try
            {
                if (goodsIdList==null|| !goodsIdList.Any()|| shoppingCartModelList == null || !shoppingCartModelList.Any())
                {
                    return;
                }
                foreach (var shoppingCartModel in shoppingCartModelList)
                {
                    //购物车下无任何商品，跳过
                    if ((shoppingCartModel?.CartProductList?.Any()??false))
                    {
                        //商家是否全被选中
                        foreach (var goods in shoppingCartModel.CartProductList)
                        {
                            //更新是否选中
                            goods.IsCheck = goodsIdList.Contains(goods.ProductId);
                        }
                        shoppingCartModel.IsCheck = !shoppingCartModel.CartProductList.Exists(x=>!x.IsCheck);
                    }
                }
                //向redis中添加整体购物车
                AddListToRedis(userName, shoppingCartModelList);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 从列表中获取被选中准备付款的商品
        /// </summary>
        /// <returns></returns>
        public List<ShoppingCartModel> GetCheckShoppingCartList(List<ShoppingCartModel> shoppingCartList)
        {
            var checkShoppingCartList = new List<ShoppingCartModel>();
            try
            {
                if (shoppingCartList?.Any()??false)
                {
                    foreach (var shoppingCart in shoppingCartList)
                    {
                        var goodss = shoppingCart.CartProductList?.Where(x => x.IsCheck);
                        if (goodss?.Any()??false)
                        {
                            var shoppingCartModel = new ShoppingCartModel
                            {
                                ShopId = shoppingCart.ShopId,
                                ShopName = shoppingCart.ShopName,
                                IsCheck = true,
                                CartProductList = goodss?.ToList()
                            };
                            checkShoppingCartList.Add(shoppingCartModel);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return checkShoppingCartList;

        }

        /// <summary>
        /// 完成下单付款后
        /// 将购物车里已买到的商品删除
        /// 如果id=1的商品购物车里有2个，订单有一个，会把购物车里这2个商品全部删除
        /// </summary>
        /// <param name="orderDetailList"></param>
        /// <param name="userId"></param>
        public void DelPaidGoods(List<ShoppingCartModel> orderList, string userName)
        {
            var shoppingCartModelList = GetListByUserNameFromRedis(userName);
            if (shoppingCartModelList==null|| shoppingCartModelList.Count<=0)
            {
                return;
            }

            //查询购物车里所有商品信息，为以后价格实时变动做准备
            List<KeyValue> orderDetailList = null;
            foreach (var list in orderList)
            {
                if (orderDetailList == null || !orderDetailList.Any())
                {
                    orderDetailList = list?.CartProductList?.Select(x=> 
                    {
                        return new KeyValue 
                        { 
                            ShopId = list.ShopId, 
                            ProductId = x.ProductId 
                        };
                    })?.ToList();
                }
                else
                {
                    var datalist = list?.CartProductList?.Select(x =>
                     {
                         return new KeyValue
                         {
                             ShopId = list.ShopId,
                             ProductId = x.ProductId
                         };
                     })??new List<KeyValue>();
                    orderDetailList.AddRange(datalist);
                }
            }

            for (int z = 0; z < shoppingCartModelList.Count; z++)  //foreach (var shoppingCartModel in shoppingCartModelList)
            {
                var shoppingCartModel = shoppingCartModelList[z];
                if (shoppingCartModel.CartProductList!=null&& shoppingCartModel.CartProductList.Count>0)
                {
                    ///获取该店铺下的商品
                    var orderDetailListForShop = orderDetailList?.Where(x => x.ShopId == shoppingCartModel.ShopId);
                    if (orderDetailListForShop != null && orderDetailListForShop.Count() > 0)
                    {
                        var productIds = orderDetailListForShop?.Select(x => x.ProductId);


                        for (int i = 0; i < shoppingCartModel.CartProductList.Count; i++)
                        {
                            //删除购物车下的商品
                            if (productIds.Contains(shoppingCartModel.CartProductList[i].ProductId))
                            {
                                shoppingCartModel.CartProductList.RemoveAt(i);
                                i--;
                            }
                        }
                    }
                }
                if (shoppingCartModel.CartProductList == null || shoppingCartModel.CartProductList.Count <= 0)
                {
                    shoppingCartModelList.RemoveAt(z);
                    z--;
                }
                
            }
            //重新存储购物车
            AddListToRedis(userName, shoppingCartModelList);
        }


        public class KeyValue
        {
            public long ShopId { get; set; }
            public long ProductId { get; set; }
        }
    }
}
