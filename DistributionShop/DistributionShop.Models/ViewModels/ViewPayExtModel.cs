using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class ViewPayExtModel
    {
        public ViewPayExtModel()
        {
            order = new OrderViewModel();
        }
        public string OrderSn { get; set; }
        public string NewOrderId { get; set; }
        public string StripePublishableKey { get; set; }
        public string WechatQrCode { get; set; }
        public string AlipayQrCode { get; set; }

        public OrderViewModel order { get; set; }
    }

    public class ViewRoyalpayRespModel
    {

        public string QrCodeImage { get; set; }

        public string newOrderId { get; set; }

        public string GotoUrl { get; set; }

    }

    public class QRCodeResult : BaseResult
    {
        public string return_msg { get; set; }

        public string message { get; set; }

        public string return_code { get; set; }
        public string result_code { get; set; }

        public string channel { get; set; }

        public string partner_code { get; set; }

        public string full_name { get; set; }

        public string partner_name { get; set; }

        public string order_id { get; set; }

        public string partner_order_id { get; set; }

        public string code_url { get; set; }

        public string qrcode_img { get; set; }

        public string pay_url { get; set; }
    }


    public class QRCodeRequest
    {
        public string description { get; set; }

        public int price { get; set; }

        public string currency { get; set; }

        public string channel { get; set; }

        public string notify_url { get; set; }

        public string Operator { get; set; }
    }

    public class RoyalNotifyModel
    {
        public string return_code { get; set; }
        public string result_code { get; set; }
        public string nonce_str { get; set; }

        /// <summary>
        /// 商户订单ID
        /// </summary>
        public string partner_order_id { get; set; }
        /// <summary>
        /// 渠道方(支付宝、微信)交易流水号
        /// </summary>
        public string channel_order_id { get; set; }
        /// <summary>
        /// 交易时使用的汇率，1AUD=?CNY
        /// </summary>
        public double rate { get; set; }

        /// <summary>
        /// RoyalPay订单ID
        /// </summary>
        public string order_id { get; set; }

        /// <summary>
        /// 订单金额
        /// </summary>
        public decimal total_fee { get; set; }

        /// <summary>
        ///支付金额，单位是最小货币单位
        /// </summary>
        public decimal real_fee { get; set; }
        /// <summary>
        /// 支付渠道 Alipay|支付宝、AlipayOnline|支付宝线上、Wechat|微信、Bestpay|翼支付
        /// </summary>
        public string channel { get; set; }

        /// <summary>
        /// 订单创建时间
        /// </summary>
        public DateTime create_time { get; set; }
        /// <summary>
        /// 订单支付时间，格式为'yyyy-MM-dd HH:mm:ss'，GMT+10
        /// </summary>
        public DateTime pay_time { get; set; }
        /// <summary>
        /// 币种，通常为AUD
        /// </summary>
        public string currency { get; set; }
    }

}
