using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.ThirdParty;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service.Orders;
using log4net;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Controllers
{
    [Authorize]
    public class PayController : BaseController
    {
        private static ILog logger = LogManager.GetLogger(typeof(PayController));

        public static string StripPublishKey = ConfigHelper.GetConfigValue("StripePublishableKey");
        public static decimal RoyalPayTestAmount = ConfigHelper.GetConfigValue("RoyalTestAmount").ToDecimal(0);

        private readonly DataContextEntities _dataContext;
        private readonly OrderLogic _orderLogic;
        private readonly IOrderService _orderService;
        private readonly PayLogic _payLogic;
        public PayController(OrderLogic orderLogic, IOrderService orderService, DataContextEntities dataContext, PayLogic payLogic)
        {
            this._orderLogic = orderLogic;
            this._orderService = orderService;
            this._dataContext = dataContext;
            this._payLogic = payLogic;
        }

        public ActionResult Index(string OrderSn)
        {
            if (string.IsNullOrEmpty(OrderSn))
                return ToError("参数错误");

            var order = _orderService.Get(OrderSn);
            if (order.PayState != (int)PayStateEnums.未支付)
                return RedirectToAction("GetOrderDetail", "UserCenter", new { orderSn = OrderSn });

            ViewPayExtModel model = new ViewPayExtModel()
            {
                OrderSn = order.OrderSn,
                StripePublishableKey = StripPublishKey,
                order = order
            };
            string notifyUrl = ConfigHelper.WebDomainAction + "/Pay/RoyalNotify"; //+ order.OrderSn;
            //加载RoyalPay微信和支付宝二维码
            decimal payAmount = RoyalPayTestAmount > 0 ? RoyalPayTestAmount : order.TotalPayPrice.ToDecimal(0);

            var qrCodeResult = this._payLogic.BuildRoyalPayCode(order.OrderSn, payAmount, notifyUrl, PayChannelEnums.微信);
            if (qrCodeResult.code == 0)
            {
                model.WechatQrCode = qrCodeResult.model.QrCodeImage;
                model.NewOrderId = qrCodeResult.model.newOrderId;
            }

            //qrCodeResult = this._payLogic.BuildRoyalPayCode(order.OrderSn, payAmount, notifyUrl, PayChannelEnums.支付宝);
            //if (qrCodeResult.code == 0)
            //{
            //    model.AlipayQrCode = qrCodeResult.model.QrCodeImage;
            //    model.NewOrderId = qrCodeResult.model.newOrderId;
            //}

            return View(model);
        }


        [HttpPost]
        public JsonResult CreateQrcodeUrl(string orderId, int channel)
        {
            var order = _orderService.Get(orderId);
            if (order.PayState != (int)PayStateEnums.未支付)
                return Json(new ModelResult<ViewPayExtModel>(1, "状态不对"));

            ViewPayExtModel model = new ViewPayExtModel()
            {
                OrderSn = order.OrderSn,
            };
            decimal payAmount = RoyalPayTestAmount > 0 ? RoyalPayTestAmount : order.TotalPayPrice.ToDecimal(0);
            string notifyUrl = ConfigHelper.WebDomainAction + "/Pay/RoyalNotify"; //+ order.OrderSn;

            if (channel == (int)PayChannelEnums.微信)
            {
                var qrCodeResult = this._payLogic.BuildRoyalPayCode(order.OrderSn, payAmount, notifyUrl, PayChannelEnums.微信);
                if (qrCodeResult.code == 0)
                {
                    model.WechatQrCode = qrCodeResult.model.QrCodeImage;
                    model.NewOrderId = qrCodeResult.model.newOrderId;
                }
            }
            else
            {
                var qrCodeResult = this._payLogic.BuildRoyalPayCode(order.OrderSn, payAmount, notifyUrl, PayChannelEnums.支付宝);
                if (qrCodeResult.code == 0)
                {
                    model.AlipayQrCode = qrCodeResult.model.QrCodeImage;
                    model.NewOrderId = qrCodeResult.model.newOrderId;
                }
            }

            return Json(new ModelResult<ViewPayExtModel>(0, "OK", model));
        }


        /// <summary>
        /// 通知接口
        /// </summary>
        public static object objLock = new object();
        public ActionResult RoyalNotify()
        {
            string strResult = string.Empty;
            String xmlData = getPostStr();
            logger.Info("RoyalNotify pay get data:" + xmlData);

            lock (objLock)
            {
                //string OrderSn = Request["oid"];
                //var order = _orderService.Get(OrderSn);
                //if (!string.IsNullOrEmpty(OrderSn) && order != null)
                //{
                //    if (order.PayState == (int)PayStateEnums.未支付)
                //    {
                //        var payResult = JSONHelper.Decode<RoyalNotifyModel>(xmlData);
                //        logger.Info(payResult);
                //        if (payResult != null)
                //        {
                //            //bool isok = _payLogic.PayOrderRecordSuccess(OrderSn, payResult);
                //            //if (isok)
                //            //{
                //            //    PayChannelEnums channel = _payLogic.GetPayChannel(payResult.channel);
                //            //    bool isUpdateOk = _payLogic.PayOrderSuccess(OrderSn, PayStateEnums.已支付未发货, channel);
                //            //}
                //        }
                //    }
                //    return Content("{\"return_code\":\"SUCCESS\"}");

                //}
                //else
                //{
                //    return Content("{\"return_code\":\"Fail\"}");
                //}
                return Content("{\"return_code\":\"Fail\"}");
            }

        }

        public string getPostStr()
        {
            Int32 intLen = Convert.ToInt32(System.Web.HttpContext.Current.Request.InputStream.Length);
            byte[] b = new byte[intLen];
            System.Web.HttpContext.Current.Request.InputStream.Read(b, 0, intLen);
            return System.Text.Encoding.UTF8.GetString(b);
        }


        [HttpPost]
        public JsonResult CheckPayStatus(string orderId, string newOrderId)
        {
            BaseResult result = _payLogic.CheckPayStatus(orderId, newOrderId);
            return Json(result);
        }

        public ActionResult Success(string OrderSn)
        {
            var order = _orderService.Get(OrderSn);
            if (order == null)
                return ToError("订单不存在");
            if (order.PayState == (int)PayStateEnums.未支付 || order.PayState == (int)PayStateEnums.已取消
                || order.PayState == (int)PayStateEnums.已退款 || order.PayState == (int)PayStateEnums.支付失败)
                return ToError("订单状态有误");
            return View(order);
        }

        public ActionResult Fail(string OrderSn)
        {
            var order = _orderService.Get(OrderSn);
            if (order == null)
                return ToError("订单不存在");
            if (order.PayState != (int)PayStateEnums.支付失败)
                return ToError("订单状态有误");

            return View(order);
        }

        public ActionResult Check(string orderId = "N63724460795039028935")
        {
            var result = RoyalPayAdapter.GetOrdersStatus(orderId);
            return Content(JsonConvert.SerializeObject(result));
        }

    }
}