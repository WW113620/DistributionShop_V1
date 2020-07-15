using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.ThirdParty;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Models.ViewModels.Refunds;
using DistributionShop.Service.Address;
using DistributionShop.Service.Orders;
using DistributionShop.Web.Attribute;
using DistributionShop.Web.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    [AdminLogin]
    public class OrderController : BaseController
    {
        private readonly DataContextEntities _dataContext;
        private readonly OrderLogic _orderLogic;
        private readonly IOrderService _orderService;
        private readonly ShoppingCartLogic _shoppingCartLogic;
        private readonly IAddressService _addressService;
        private readonly PayLogic _payLogic;
        public OrderController(OrderLogic orderLogic, ShoppingCartLogic shoppingCartLogic, IAddressService addressService, IOrderService orderService, DataContextEntities dataContext, PayLogic payLogic)
        {
            this._orderLogic = orderLogic;
            _shoppingCartLogic = shoppingCartLogic;
            _addressService = addressService;
            this._orderService = orderService;
            this._dataContext = dataContext;
            this._payLogic = payLogic;
        }

        #region Order List
        public ActionResult Index()
        {
            List<SelectOption> PayStateList = EnumHelper.EnumToList<OrderPayStateEnums>();
            List<SelectOption> PlatformList = EnumHelper.EnumToList<PlatformEnums>();
            List<SelectOption> PayChannelList = EnumHelper.EnumToList<PayChannelEnums>();
            ViewBag.PayStateList = PayStateList;
            ViewBag.PlatformList = PlatformList;
            ViewBag.PayChannelList = PayChannelList;
            ViewBag.CurrentPageCode = "B1";
            return View();
        }


        [HttpGet]
        public JsonResult GetList(OrderRequest request)
        {
            LayuiPageResult<OrderViewModel> result = new LayuiPageResult<OrderViewModel>() { code = 1 };
            try
            {
                var response = this._orderService.GetList(request);
                result = new LayuiPageResult<OrderViewModel>() { code = response.code, msg = response.msg, count = response.page.count, data = response.data };
            }
            catch (Exception e)
            {
                result.msg = e.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 待发货
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetNoSendList(OrderRequest request)
        {
            LayuiPageResult<OrderViewModel> result = new LayuiPageResult<OrderViewModel>() { code = 1 };
            try
            {
                request.PayState = "100";//待发货
                var response = this._orderService.GetList(request);
                result = new LayuiPageResult<OrderViewModel>() { code = response.code, msg = response.msg, count = response.page.count, data = response.data };
            }
            catch (Exception e)
            {
                result.msg = e.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetOrderReFundHomeList(OrderReFundRequest request)
        {
            LayuiPageResult<OrderReFundModel> result = new LayuiPageResult<OrderReFundModel>() { code = 1 };
            try
            {
                request.ReStatus = ((int)WebReFundStatusEnums.申请中).ToString();
                var response = this._orderService.GetOrderReFundList(request);
                List<OrderReFundModel> list = response.data;
                if (list != null && list.Count > 0)
                {
                    foreach (var item in list)
                    {
                        string productIds = item.ProductIds;
                        string productNames = GetProductNamesByIds(productIds);
                        item.ProductName = productNames;
                    }
                }
                result = new LayuiPageResult<OrderReFundModel>() { code = response.code, msg = response.msg, count = response.page.count, data = response.data };

            }
            catch (Exception e)
            {
                result.msg = e.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Edit(string OrderSn)
        {
            if (string.IsNullOrEmpty(OrderSn))
                return RedirectToAction("DetailList");

            ViewBag.CurrentPageCode = "B1";
            ViewBag.OrderSn = OrderSn;
            OrderViewModel model = this._orderService.Get(OrderSn);
            if (model == null)
            {
                return Content("此订单不存在或已被删除");
            }

            List<SelectOption> PayStateList = EnumHelper.EnumToList<PayStateEnums>();
            List<SelectOption> PlatformList = EnumHelper.EnumToList<PlatformEnums>();
            List<SelectOption> PayChannelList = EnumHelper.EnumToList<PayChannelEnums>();
            ViewBag.PayStateList = PayStateList;
            ViewBag.PlatformList = PlatformList;
            ViewBag.PayChannelList = PayChannelList;

            return View(model);
        }

        [AdminLogin]
        [HttpPost]
        public JsonResult Update(Order order)
        {
            var model = this._dataContext.Orders.FirstOrDefault(p => p.OrderSn == order.OrderSn);
            if (model == null)
                return Json(new BaseResult(1, "此订单不存在或已被删除"));

            model.UserName = order.UserName;
            if (order.TotalPayPrice > 0)
                model.TotalPayPrice = order.TotalPayPrice;
            else
                model.TotalPayPrice = 0;

            model.Platform = order.Platform;
            model.PayChannel = order.PayChannel;
            model.PayState = order.PayState;
            if (model.PayState == (int)PayStateEnums.已支付未发货 || model.PayState == (int)PayStateEnums.已支付已发货
                || model.PayState == (int)PayStateEnums.已收货 || model.PayState == (int)PayStateEnums.已完成)
            {
                model.PayTime = DateTime.Now;
            }
            else if (model.PayState == (int)PayStateEnums.未支付)
            {
                model.PayTime = DateTime.MinValue;
            }

            this._dataContext.SaveChanges();
            return Json(new BaseResult(0, "保存成功"));
        }

        #endregion

        #region Order Detail  
        public ActionResult Detail(string OrderSn)
        {
            if (string.IsNullOrEmpty(OrderSn))
                return RedirectToAction("DetailList");

            ViewBag.CurrentPageCode = "B1";
            ViewBag.OrderSn = OrderSn;
            OrderViewModel model = this._orderService.Get(OrderSn);

            List<SelectOption> PayStateList = EnumHelper.EnumToList<PayStateEnums>();
            List<SelectOption> PlatformList = EnumHelper.EnumToList<PlatformEnums>();
            List<SelectOption> PayChannelList = EnumHelper.EnumToList<PayChannelEnums>();
            ViewBag.PayStateList = PayStateList;
            ViewBag.PlatformList = PlatformList;
            ViewBag.PayChannelList = PayChannelList;

            return View(model);
        }

        public ActionResult DetailList()
        {
            ViewBag.CurrentPageCode = "B2";
            ViewBag.OrderSn = "";
            var model = new OrderViewModel();

            List<SelectOption> PayStateList = EnumHelper.EnumToList<OrderPayStateEnums>();
            List<SelectOption> PlatformList = EnumHelper.EnumToList<PlatformEnums>();
            List<SelectOption> PayChannelList = EnumHelper.EnumToList<PayChannelEnums>();
            ViewBag.PayStateList = PayStateList;
            ViewBag.PlatformList = PlatformList;
            ViewBag.PayChannelList = PayChannelList;

            return View("Detail", model);
        }

        [HttpGet]
        public JsonResult GetDetailList(OrderDetailRequest request)
        {
            LayuiPageResult<OrderDetailViewModel> result = new LayuiPageResult<OrderDetailViewModel>() { code = 1 };
            try
            {
                var response = this._orderService.GetDetailList(request);
                result = new LayuiPageResult<OrderDetailViewModel>() { code = response.code, msg = response.msg, count = response.page.count, data = response.data };
            }
            catch (Exception e)
            {
                result.msg = e.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        /// <summary>
        /// 添加订单
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [Obsolete("暂时不用")]
        public JsonResult CreateOrder(OrderCreateOrderModel model)
        {
            if (model.AddressId <= 0)
            {
                return Json(new BaseResult(1, "此订单收货地址异常"));
            }
            var adddress = _addressService.GetOneById(model.AddressId);
            if (model.AddressId <= 0)
            {
                return Json(new BaseResult(1, "未查询到该订单收货地址"));
            }
            var userId = CurrentUser.UserId;
            string userName = CurrentUser.LoginName;

            //选择的订单
            var checkedShoppingCartList = _shoppingCartLogic.GetListByUserNameFromRedis(userName);
            if (checkedShoppingCartList == null || !checkedShoppingCartList.Any())
            {
                return Json(new BaseResult(1, "此订单没有任何需要付款商品"));
            }

            var platformEnum = (PlatformEnums)model.PlatformEnum;
            var payChannel = (PayChannelEnums)model.PayChannel;
            var orderSn = RandomNumber.CreateOrderSn();
            var order = new OrderLogicAddOrderDto
            {
                checkedShoppingCartList = checkedShoppingCartList,
                OrderSn = orderSn,
                UserId = userId,
                UserName = userName,
                PlatformEnum = platformEnum,
                PayChannel = payChannel,
                Remark = model.Remark,
                t_Address = adddress
            };
            var result = _orderLogic.AddOrder(order);

            return Json(result);
        }


        #endregion

        #region 退款相关
        /// <summary>
        /// /退款列表页
        /// </summary>
        /// <returns></returns>
        public ActionResult OrderReFundIndex()
        {
            ViewBag.CurrentPageCode = "B3";
            List<SelectOption> WebReFundStatusEnums = EnumHelper.EnumToList<WebReFundStatusEnums>();
            ViewBag.WebReFundStatusEnums = WebReFundStatusEnums;
            return View();
        }
        /// <summary>
        ///退款取列表方法
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AdminLogin]
        public JsonResult GetOrderReFundList(OrderReFundRequest request)
        {
            LayuiPageResult<OrderReFundModel> result = new LayuiPageResult<OrderReFundModel>() { code = 1 };
            try
            {
                var response = this._orderService.GetOrderReFundList(request);
                List<OrderReFundModel> list = response.data;
                if (list != null && list.Count > 0)
                {
                    foreach (var item in list)
                    {
                        string productIds = item.ProductIds;
                        string productNames = GetProductNamesByIds(productIds);
                        item.ProductName = productNames;
                    }
                }
                result = new LayuiPageResult<OrderReFundModel>() { code = response.code, msg = response.msg, count = response.page.count, data = response.data };

            }
            catch (Exception e)
            {
                result.msg = e.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 退款审批页面
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public ActionResult OrderReFundAuditIndex(long Id, string ordersn, int status)
        {
            ViewBag.CurrentPageCode = "B3";
            ViewBag.Id = Id;
            ViewBag.Status = status;
            ViewBag.OrderSn = ordersn;
            return View();
        }

        /// <summary>
        /// 退款审批操作
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [AdminLogin]
        public JsonResult OrderRefundAudit(OrderReFund model)
        {
            ModelResult<int> modelResult = new ModelResult<int> { code = 1 };
            var order = _dataContext.Orders.FirstOrDefault(p => p.OrderSn == model.OrderSn);
            if (order == null)
            {
                modelResult.code = 1;
                modelResult.msg = "订单不存在或已被删除";
                return Json(modelResult, JsonRequestBehavior.AllowGet);
            }

            int status = (int)WebReFundStatusEnums.申请中;
            OrderReFund orderReFund = _dataContext.OrderReFunds.Where(n => n.Id == model.Id && n.IsDel == 0 && n.Status == status).FirstOrDefault();
            orderReFund.OperateName = LoginHelper.UserName;
            orderReFund.AuditContent = model.AuditContent;
            if (orderReFund == null)
            {
                modelResult.code = 1;
                modelResult.msg = "该退款申请不存在";
                return Json(modelResult, JsonRequestBehavior.AllowGet);
            }
            if (model.Status == 0) //0同意退款  1拒绝 status 和orderrefund的表的status 无关，只是通过和拒绝的判定
            {
                BaseResult baseResult = _payLogic.ApplyOrderRefund(model.Id);
                if (baseResult.code == 0)
                {
                    orderReFund.RefundTime = DateTime.Now;
                    _dataContext.SaveChanges();
                }
                modelResult.code = baseResult.code;
                modelResult.msg = baseResult.msg;
            }
            else//拒绝
            {
                orderReFund.Status = (int)WebReFundStatusEnums.已拒绝;
                orderReFund.RefundTime = DateTime.Now;
                _dataContext.SaveChanges();
                modelResult.code = 0;
                modelResult.msg = "成功";
            }
            return Json(modelResult, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 退款信息详情页
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public ActionResult OrderReFundDetail(long Id)
        {

            ViewBag.ReFundId = Id;
            return View();
        }

        public JsonResult GetORderReFundDetailData(long Id)
        {
            OrderReFund orderReFund = _dataContext.OrderReFunds.Where(n => n.Id == Id && n.IsDel == 0).FirstOrDefault();
            List<OrderReFundDetailModel> resultList = new List<OrderReFundDetailModel> { };
            if (orderReFund != null && orderReFund.Id > 0)
            {
                List<string> productIds = orderReFund.ProductIds.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToList();
                if (productIds != null && productIds.Count > 0)
                {
                    foreach (var item in productIds)
                    {
                        long orderDetailId = item.ToLong(0);
                        OrderDetail orderDetail = _dataContext.OrderDetails.Where(n => n.Id == orderDetailId && n.IsDel == 0).FirstOrDefault();
                        OrderReFundDetailModel orderReFundDetailModel = AutoMapper.Mapper.Map<OrderReFundDetailModel>(orderDetail);
                        orderReFundDetailModel.ReFundPrice = (orderDetail.WebPrice * orderDetail.OrderProductAmount).ToDecimal(2);
                        orderReFundDetailModel.Description = orderReFund.Description;
                        orderReFundDetailModel.ReFundTypeName = EnumHelper.GetEnumName<ReFundTypeEnums>((int)orderReFund.ReFundType);
                        orderReFundDetailModel.ReFundReasonName = EnumHelper.GetEnumName<ReFundReasonEnums>((int)orderReFund.ReFundReason);
                        orderReFundDetailModel.StatusVal = EnumHelper.GetEnumName<WebReFundStatusEnums>(orderReFund.Status.ToInt(0));
                        orderReFundDetailModel.AuditContent = orderReFund.AuditContent;
                        orderReFundDetailModel.AuditTime = orderReFund.RefundTime == null ? "" : orderReFund.RefundTime.ToString("yyyy-MM-dd HH:mm:ss");
                        resultList.Add(orderReFundDetailModel);

                    }

                }
            }
            PageResult<OrderReFundDetailModel> result = new PageResult<OrderReFundDetailModel> { code = 0, data = resultList };
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 根据productIds 取name
        /// </summary>
        /// <param name="productIds"></param>
        /// <returns></returns>
        public string GetProductNamesByIds(string productIds)
        {
            string productNames = "";
            if (!string.IsNullOrEmpty(productIds))
            {
                List<string> idList = productIds.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToList();
                foreach (string id in idList)
                {
                    long newId = id.ToLong(0);
                    OrderDetail orderDetail = _dataContext.OrderDetails.Where(n => n.Id == newId).FirstOrDefault();
                    if (orderDetail != null && orderDetail.Id > 0)
                    {
                        productNames += orderDetail.ProductName + ",";
                    }
                }
                productNames = productNames.Substring(0, productNames.Length - 1);
            }
            return productNames;
        }

        public ActionResult Test(string orderId = "N63724890201907612092", string refund_id = "13476202005121423223325426")
        {
            RefundModel query = new RefundModel { order_id = orderId, refund_id = refund_id, fee = 1 };
            var model = RoyalPayAdapter.GetRefundMoney(query);
            return Content("Test");
        }
        #endregion

    }
}