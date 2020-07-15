using DistributionShop.Models.Data;
using DistributionShop.Models.ThirdParty;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Models.ViewModels.Refunds;
using DistributionShop.Service;
using DistributionShop.Service.Orders;
using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DistributionShop.Logic
{
    public class PayLogic
    {
        private static ILog logger = LogManager.GetLogger(typeof(PayLogic));
        public static decimal RoyalPayTestAmount = ConfigHelper.GetConfigValue("RoyalTestAmount").ToDecimal(0);

        private readonly DataContextEntities _dataContext;
        private readonly IOrderService _orderService;
        private readonly IProductService _productService;
        public PayLogic(DataContextEntities dataContext, IOrderService orderService, IProductService productService)
        {
            this._dataContext = dataContext;
            _orderService = orderService;
            _productService = productService;
        }


        #region Create Pay Order
        public ModelResult<ViewRoyalpayRespModel> BuildRoyalPayCode(string orderId, decimal totalAmount, string notifyUrl,
            PayChannelEnums channel, PlatformEnums platform = PlatformEnums.PC订单)
        {
            try
            {
                var newOrderId = GetNewOrderSn();
                while (IsPayRecordExists(newOrderId))
                {
                    newOrderId = GetNewOrderSn();
                }

                int NeedPayAmount = Convert.ToInt32(totalAmount * 100);
                var qrResult = RoyalPayAdapter.QRCodeReq(newOrderId, new QRCodeRequest()
                {
                    channel = EnumHelper.GetDescription((PayChannelEnums)channel),
                    currency = "CNY",
                    description = ConfigHelper.GetConfigValue("RoyalPayDescript"),
                    notify_url = notifyUrl,
                    Operator = "Web",
                    price = NeedPayAmount,
                });

                if (qrResult != null && qrResult.return_code == "SUCCESS")
                {
                    //bool isadd = AddPayRecord(new OrderPayRecord
                    //{
                    //    OrderSn = orderId,
                    //    NewOrderSn = newOrderId,
                    //    PayState = (int)OrderPayRecordStateEnums.待支付,
                    //    PayChannel = (int)channel,
                    //    AddTime = DateTime.Now
                    //});
                    return new ModelResult<ViewRoyalpayRespModel>(0, "成功", new ViewRoyalpayRespModel() { QrCodeImage = qrResult.qrcode_img, newOrderId = newOrderId });
                }
                else
                {
                    return new ModelResult<ViewRoyalpayRespModel>(1, qrResult.return_msg);
                }
            }
            catch (System.Exception e)
            {
                logger.Error("Exception OrderId:" + orderId + "=============================================");
                logger.Error(e);
                return new ModelResult<ViewRoyalpayRespModel>(1, e.Message);
            }
        }

        public bool IsPayRecordExists(string newOrderId)
        {
            return this._dataContext.OrderPayRecords.Any(t => t.NewOrderSn == newOrderId);
        }

        public string GetNewOrderSn()
        {
            string orderSn = RandomNumber.CreateOrderSn("");
            return $"N{orderSn}{CommonHelper.RandNumber(2)}";
        }

        public bool PayOrderSuccess(string orderId, PayStateEnums payState, PayChannelEnums payChannel)
        {
            var order = this._dataContext.Orders.FirstOrDefault(p => p.OrderSn == orderId);
            if (order == null)
                return false;

            order.PayState = (int)payState;
            order.PayChannel = (int)payChannel;
            return this._dataContext.SaveChanges() > 0;
        }


        public PayChannelEnums GetPayChannel(string channel)
        {
            if (channel == "Alipay")
                return PayChannelEnums.支付宝;
            else if (channel == "Wechat")
                return PayChannelEnums.微信;
            else if (channel == "AlipayOnline")
                return PayChannelEnums.支付宝;
            else return PayChannelEnums.未知;

        }

        public bool AddPayRecord(string orderId, OrderPayRecordStateEnums payStateEnum, RoyalNotifyModel model)
        {
            PayChannelEnums channel = GetPayChannel(model.channel);
            var record = new OrderPayRecord
            {
                OrderSn = orderId,
                NewOrderSn = model.order_id,
                PartnerOrderId = model.partner_order_id,
                ChannelOrderId = model.channel_order_id,
                TotalFee = model.total_fee / 100,
                RealFee = model.real_fee / 100,
                PayState = (int)payStateEnum,
                PayChannel = (int)channel,
                PayTime = model.pay_time,
                AddTime = model.create_time,
            };

            this._dataContext.OrderPayRecords.Add(record);
            return this._dataContext.SaveChanges() > 0;
        }



        public bool UploadPayRecordResult(string OrderSn, OrderPayRecordStateEnums orderPay, RoyalNotifyModel payModel)
        {
            PayChannelEnums channel = GetPayChannel(payModel.channel);
            if (orderPay == OrderPayRecordStateEnums.PAY_FAIL)
            {
                bool isAdd = AddPayRecord(OrderSn, OrderPayRecordStateEnums.PAY_FAIL, payModel);
                if (isAdd)
                {
                    bool isUpdateOk = PayOrderSuccess(OrderSn, PayStateEnums.支付失败, channel);
                }
                return isAdd;
            }
            else
            {
                var payRecord = this._dataContext.OrderPayRecords.FirstOrDefault(p => p.OrderSn == OrderSn && p.PayState == (int)OrderPayRecordStateEnums.PAY_SUCCESS);
                if (payRecord != null)
                {
                    bool isUpdateOk = PayOrderSuccess(OrderSn, PayStateEnums.已支付未发货, channel);
                    return true;
                }

                bool isAdd = AddPayRecord(OrderSn, OrderPayRecordStateEnums.PAY_SUCCESS, payModel);
                if (isAdd)
                {
                    PayOrderSuccess(OrderSn, PayStateEnums.已支付未发货, channel);
                }
                return isAdd;
            }
        }

        public BaseResult CheckPayStatus(string OrderSn, string newOrderId)
        {
            var order = _orderService.Get(OrderSn);
            if (order == null)
                return new BaseResult(1, "此订单不存在或已被删除");

            if (order.PayState == (int)PayStateEnums.已支付未发货 || order.PayState == (int)PayStateEnums.已支付已发货
                || order.PayState == (int)PayStateEnums.已收货 || order.PayState == (int)PayStateEnums.已完成)
            {
                return new BaseResult(0, "已支付");
            }

            var result = RoyalPayAdapter.GetOrdersStatus(newOrderId);
            if (result != null && !string.IsNullOrEmpty(result.result_code))
            {
                OrderPayRecordStateEnums payStateEnum = (OrderPayRecordStateEnums)Enum.Parse(typeof(OrderPayRecordStateEnums), result.result_code);
                string desction = EnumHelper.GetDescription(payStateEnum);
                if (result.result_code == "PAY_SUCCESS")
                {
                    bool isok = UploadPayRecordResult(OrderSn, OrderPayRecordStateEnums.PAY_SUCCESS, result);
                    return new BaseResult(0, desction);
                }
                else if (result.result_code == "PAY_FAIL")
                {
                    bool isok = UploadPayRecordResult(OrderSn, OrderPayRecordStateEnums.PAY_FAIL, result);
                    return new BaseResult(10, desction);
                }
                else
                    return new BaseResult(1, desction);
            }
            return new BaseResult(1, ((PayStateEnums)order.PayState).ToString());

        }
        #endregion


        #region 申请退款
        public BaseResult ApplyOrderRefund(long orderReFundId)
        {
            try
            {
                var model = this._dataContext.OrderReFunds.FirstOrDefault(p => p.Id == orderReFundId && p.IsDel == 0 && p.Status == (int)WebReFundStatusEnums.申请中);
                if (model == null)
                    return new BaseResult(1, "无此退款申请");

                var order = _orderService.Get(model.OrderSn);
                if (order == null)
                    return new BaseResult(1, "此订单不存在或已被删除");

                if (order.PayState == (int)PayStateEnums.未支付 || order.PayState == (int)PayStateEnums.已取消
                || order.PayState == (int)PayStateEnums.已退款 || order.PayState == (int)PayStateEnums.支付失败)
                    return new BaseResult(1, $"此订单{((PayStateEnums)order.PayState).ToString()}，无法申请退款");

                //测试
                decimal payAmount = RoyalPayTestAmount > 0 ? RoyalPayTestAmount : order.TotalPayPrice.ToDecimal(0);
                model.ReApplyFee = payAmount;

                if (model.ReApplyFee > order.TotalPayPrice)
                    return new BaseResult(1, "退款金额不能超过支付总金额");

                OrderPayRecord record = GetOrderPayRecord(order.OrderSn);
                if (record == null)
                    return new BaseResult(1, "此订单未支付，无法申请退款");

                if (model.ReApplyFee > record.RealFee)
                    return new BaseResult(1, "退款金额不能超过支付总金额");

                decimal payPrice = (this._dataContext.OrderDetails.Where(p => p.OrderSn == model.OrderSn && p.IsDel == 0 && p.Status == (int)WebOrderDetailStatusEnums.退款申请中).Sum(p => p.WebPrice)).ToDecimal(0);
                if (model.ReApplyFee > payPrice)
                    return new BaseResult(1, "退款金额不能超过退款商品总金额");

                int needAmount = Convert.ToInt32(model.ReApplyFee * 100);

                RefundModel query = new RefundModel { order_id = record.PartnerOrderId, refund_id = record.NewOrderSn, fee = needAmount };
                RefundResultModel result = ApplyRefundMoney(query);
                if (result == null || string.IsNullOrEmpty(result.return_code) || string.IsNullOrEmpty(result.result_code))
                {
                    return new BaseResult(1, "退款失败，需要人工介入");
                }
                if (result != null && result.result_code == "FINISHED")
                {
                    model.Status = (int)WebReFundStatusEnums.已退款;
                    model.Result_code = result.result_code;
                    model.Refund_id = result.refund_id;
                    model.Partner_refund_id = result.partner_refund_id;
                    model.Refund_fee = result.amount.ToDecimal(0) / 100;
                    model.Currency = result.currency;
                    model.OperateName = LoginHelper.UserName;
                    model.RefundTime = DateTime.Now;

                    order.PayState = (int)PayStateEnums.已退款;
                    order.Refund_fee = result.amount.ToDecimal(0) / 100;
                    order.Refund_fee = model.ReFundMethod.ToInt(0);//退款类型  全部还是 部分
                    order.RefundTime = DateTime.Now;
                    int i = this._dataContext.SaveChanges();
                    bool bo = UpdateOrderDetailStatus(model.OrderSn, WebOrderDetailStatusEnums.已退款);
                    return new BaseResult(0, "退款成功");
                }
                else
                {
                    model.Status = (int)WebReFundStatusEnums.退款失败;
                    model.Result_code = result.result_code;
                    model.OperateName = LoginHelper.UserName;
                    model.RefundTime = DateTime.Now;
                    int i = this._dataContext.SaveChanges();

                    bool bo = UpdateOrderDetailStatus(model.OrderSn, WebOrderDetailStatusEnums.默认);

                    ReFundStatusEnums payStateEnum = (ReFundStatusEnums)Enum.Parse(typeof(ReFundStatusEnums), result.result_code);
                    return new BaseResult(1, EnumHelper.GetDescription(payStateEnum));
                }

            }
            catch (Exception e)
            {
                return new BaseResult(1, "退款失败：" + e.Message);
            }
        }

        private bool UpdateOrderDetailStatus(string OrderSn, WebOrderDetailStatusEnums webOrderStatus)
        {
            var list = this._dataContext.OrderDetails.Where(p => p.OrderSn == OrderSn && p.IsDel == 0 && p.Status == (int)WebOrderDetailStatusEnums.退款申请中).ToList();
            foreach (var item in list)
            {
                item.Status = (int)webOrderStatus;
            }
            return this._dataContext.SaveChanges() > 0;

        }

        private RefundResultModel ApplyRefundMoney(RefundModel query)
        {
            RefundResultModel result = RoyalPayAdapter.GetRefundMoney(query);
            if (result != null && result.result_code == "FINISHED")
            {
                return result;
            }
            else
            {
                Thread.Sleep(1000);
                string refund_id = result == null ? "" : result.refund_id;
                result = RoyalPayAdapter.GetRefundStatus(query.order_id, refund_id);
                return result;
            }
        }

        public OrderPayRecord GetOrderPayRecord(string OrderSn)
        {
            var model = this._dataContext.OrderPayRecords.OrderByDescending(p => p.PayTime).FirstOrDefault(p => p.OrderSn == OrderSn && p.PayState == (int)OrderPayRecordStateEnums.PAY_SUCCESS);
            return model;
        }
        #endregion

    }
}
