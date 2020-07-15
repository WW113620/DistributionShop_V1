using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels.Refunds
{
    public class RefundModel
    {
        public string order_id { get; set; }
        public string refund_id { get; set; }
        public int fee { get; set; }
        public string device_id { get; set; }
    }

    public class RefundResultModel
    {
        public string return_code { get; set; }
        /// <summary>
        /// WAITING:正在提交
        /// CREATE_FAILED:提交失败
        /// SUCCESS:提交成功
        /// FAILED:退款失败
        /// FINISHED:退款成功
        /// CHANGE:退款无法到账，需要人工介入
        /// </summary>
        public string result_code { get; set; }

        /// <summary>
        /// RoyalPay退款单号
        /// </summary>
        public string refund_id { get; set; }

        /// <summary>
        /// 商户提交的退款单号
        /// </summary>
        public string partner_refund_id { get; set; }
        /// <summary>
        /// 退款金额，单位是货币最小单位
        /// </summary>
        public int amount { get; set; }
        /// <summary>
        /// 币种，通常为AUD
        /// </summary>
        public string currency { get; set; }
    }
}
