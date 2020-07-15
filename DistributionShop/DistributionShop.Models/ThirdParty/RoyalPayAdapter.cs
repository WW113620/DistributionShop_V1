using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Models.ViewModels.Refunds;
using log4net;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ThirdParty
{
    public class RoyalPayAdapter
    {
        private static ILog logger = LogManager.GetLogger(typeof(RoyalPayAdapter));
        public static string apiUrl = ConfigHelper.GetConfigValue("RoyalPayApiUrl");
        public static string partnerCode = ConfigHelper.GetConfigValue("RoyalPayPartnerCode");
        public static string credentialCode = ConfigHelper.GetConfigValue("RoyalPayCredentialCode");
        /// <summary>
        /// 生成支付二维码
        /// </summary>
        /// <returns></returns>
        public static QRCodeResult QRCodeReq(string orderId, QRCodeRequest request)
        {

            string url = string.Format("api/v1.0/gateway/partners/{0}/orders/{1}?{2}", partnerCode, orderId, queryParams(partnerCode, credentialCode));
            RestSharp.RestClient restClient = new RestClient(apiUrl);
            var restRequest = new RestRequest(url, Method.PUT);
            restRequest.AddHeader("Accept", "application/json");
            restRequest.AddHeader("Content-Type", "application/json");
            restRequest.AddJsonBody(request);
            var response = restClient.Execute<QRCodeResult>(restRequest);
            var result = response.Data;
            return result;
        }

        /// <summary>
        /// 获取订单状态
        /// </summary>
        /// <param name="orderId"></param>
        /// <returns></returns>
        public static RoyalNotifyModel GetOrdersStatus(string orderId)
        {
            string url = string.Format("api/v1.0/gateway/partners/{0}/orders/{1}?{2}", partnerCode, orderId, queryParams(partnerCode, credentialCode));

            RestSharp.RestClient restClient = new RestClient(apiUrl);
            var restRequest = new RestRequest(url, Method.GET);
            restRequest.AddHeader("Accept", "application/json");
            var response = restClient.Execute<RoyalNotifyModel>(restRequest);
            var result = response.Data;
            return result;
        }

        /// <summary>
        /// 申请退款
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public static RefundResultModel GetRefundMoney(RefundModel model)
        {
            string url = $"api/v1.0/gateway/partners/{partnerCode}/orders/{model.order_id}/refunds/{model.refund_id}?{queryParams(partnerCode, credentialCode)}";
            RestSharp.RestClient restClient = new RestClient(apiUrl);
            var restRequest = new RestRequest(url, Method.PUT);
            restRequest.AddHeader("Accept", "application/json");
            restRequest.AddHeader("Content-Type", "application/json");
            restRequest.AddJsonBody(model);
            var response = restClient.Execute<RefundResultModel>(restRequest);
            var result = response.Data;
            return result;
        }

        /// <summary>
        /// 查询退款状态
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public static RefundResultModel GetRefundStatus(string order_id, string refund_id)
        {
            string url = $"api/v1.0/gateway/partners/{partnerCode}/orders/{order_id}/refunds/{refund_id}?{queryParams(partnerCode, credentialCode)}";

            RestSharp.RestClient restClient = new RestClient(apiUrl);
            var restRequest = new RestRequest(url, Method.GET);
            restRequest.AddHeader("Accept", "application/json");
            restRequest.AddHeader("Content-Type", "application/json");
            var response = restClient.Execute<RefundResultModel>(restRequest);
            var result = response.Data;
            return result;
        }

        private static string queryParams(string partnerCode, string credentialCode)
        {
            long time = EpochMilliseconds(DateTime.Now);
            String nonceStr = CommonHelper.RandString(16);
            String validStr = partnerCode + "&" + time + "&" + nonceStr + "&" + credentialCode;
            String sign = BuildSign(partnerCode, time, nonceStr, credentialCode);
            return "time=" + time + "&nonce_str=" + nonceStr + "&sign=" + sign;
        }




        public static long EpochMilliseconds(DateTime dt)
        {
            return (long)(dt.ToUniversalTime() - new DateTime(1970, 1, 1)).TotalMilliseconds;
        }

        /// <summary>
        /// 创建签名
        /// </summary>
        /// <returns></returns>
        public static string BuildSign(string m_number, long timestamp, string nonce_str, string secret_key)
        {
            var originString = string.Format("{0}&{1}&{2}&{3}", m_number, timestamp, nonce_str, secret_key);

            byte[] bytes = Encoding.UTF8.GetBytes(originString);
            byte[] hash = SHA256Managed.Create().ComputeHash(bytes);

            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                builder.Append(hash[i].ToString("X2"));
            }

            return builder.ToString().ToLower();
        }


    }
}
