using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using JWT;
using JWT.Serializers;
using System.Text;
using System.Net;
using JWT.Algorithms;
using DistributionShop.Models.ViewModels;
using DistributionShop.Models.Utils;
using System.Net.Http;

namespace DistributionShop.WebApi.Attribute
{
    public class ApiAuthorizeAttribute : AuthorizeAttribute
    {

        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
            var authHeader = from t in actionContext.Request.Headers where t.Key == "token" select t.Value.FirstOrDefault();
            if (authHeader != null)
            {
                string secretKey = ConfigHelper.JwtSecretKey;
                string token = authHeader.FirstOrDefault();
                if (!string.IsNullOrEmpty(token))
                {
                    try
                    {
                        byte[] key = Encoding.UTF8.GetBytes(secretKey);
                        IJwtAlgorithm algorithm = new HMACSHA256Algorithm();
                        IJsonSerializer serializer = new JsonNetSerializer();
                        IDateTimeProvider provider = new UtcDateTimeProvider();
                        IJwtValidator validator = new JwtValidator(serializer, provider);
                        IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
                        IJwtDecoder decoder = new JwtDecoder(serializer, validator, urlEncoder, algorithm);
                        var json = decoder.DecodeToObject<LoginUser>(token, key, verify: true);
                        if (json != null)
                        {
                            if (json.ExpiryDateTime < DateTime.Now)
                                return false;
                            actionContext.RequestContext.RouteData.Values.Add("LoginUser", json);
                            return true;
                        }
                        return false;
                    }
                    catch (Exception ex)
                    {
                        return false;
                    }
                }
            }
            return false;
        }


        /// <summary>
        /// 处理授权失败的请求
        /// </summary>
        /// <param name="actionContext"></param>
        protected override void HandleUnauthorizedRequest(HttpActionContext actionContext)
        {
            actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.OK, new BaseResult(401, "无权限的请求"), "application/json");
        }

    }
}