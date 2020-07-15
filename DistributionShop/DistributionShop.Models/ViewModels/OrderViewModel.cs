using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DistributionShop.Models.Main;

namespace DistributionShop.Models.ViewModels
{
    public class OrderViewModel : Order
    {
        public long _row_number_ { get; set; }
        public string TotalAccount => (TotalPayPrice.ToDecimal(2) + DiscountAmount.ToDecimal(2)).ToMoney();
        public string PayAccount => OrderHelper.GetPayAccount(TotalPayPrice.ToDecimal(2), (PayStateEnums)PayState.ToInt(0), RefundMethod.ToInt(0), Refund_fee.ToDecimal(0));
        public string PayStateName => OrderHelper.GetPayStatusName((PayStateEnums)PayState.ToInt(0));

        public string PlatformName => Enum.GetName(typeof(PlatformEnums), Platform.ToInt(0));

        public string PayChannelName => PayChannel.ToInt(0).GetPayChannel((PayStateEnums)PayState.ToInt(0));

        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd HH:mm");

        public string PayTimeValue => PayTime.GetPayTime((PayStateEnums)PayState.ToInt(0), "---");


    }

    public class OrderRequest : BaseReqestParams
    {
        public string OrderSn { get; set; }
        public string UserName { get; set; }
        /// <summary>
        /// 支付状态
        /// </summary>
        public string PayState { get; set; }
        /// <summary>
        /// 订单来源平台
        /// </summary>
        public string Platform { get; set; }
        /// <summary>
        /// 支付通道（渠道）
        /// </summary>
        public string PayChannel { get; set; }

        public string StartDate { get; set; }
        public string EndDate { get; set; }
    }

    public class OrderReFundRequest : BaseReqestParams
    {
        public string OrderSn { get; set; }
        public string ReUserName { get; set; }
        public string ReStatus { get; set; }//退款状态
        public string StartDate { get; set; }
        public string EndDate { get; set; }
    }
    public class OrderReFundModel : OrderReFund
    {
        public string ProductName { get; set; }
        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd HH:mm");
    }

    public class OrderReFundDetailModel:OrderDetail {
        /// <summary>
        /// 单个商品的退款总金额  webprice*OrderProductAmount
        /// </summary>
        public decimal ReFundPrice { get; set; }
        /// <summary>
        /// 退款申请说明
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// 退款类别
        /// </summary>
        public string ReFundTypeName { get; set; }
        /// <summary>
        /// 退款原因
        /// </summary>
        public  string ReFundReasonName { get; set; }
        /// <summary>
        /// 审批状态
        /// </summary>
        public string StatusVal { get; set; }

        /// <summary>
        /// 审批意见
        /// </summary>
        public string AuditContent { get; set; }
        /// <summary>
        /// 审批时间
        /// </summary>
        public string AuditTime { get; set; }

       
    }

}
