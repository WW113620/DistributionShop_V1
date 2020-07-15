using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using JWT;
using JWT.Algorithms;
using JWT.Serializers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace DistributionShop.WebApi.Controllers
{
    [RoutePrefix("api/Token")]
    public class TokenController : ApiController
    {
        private readonly AccountLogic _accountLogic;
        private readonly DataContextEntities _dataContext;
        public TokenController(DataContextEntities dataContext, AccountLogic accountLogic)
        {
            this._dataContext = dataContext;
            this._accountLogic = accountLogic;
        }

        [HttpPost]
        [Route("Login")]
        public TokenResult Login([FromBody] LoginRequest loginRequest)
        {
            UserViewModel userView = new UserViewModel();
            BaseResult result = this._accountLogic.Login(loginRequest, ref userView);
            if (result.code != 0)
                return new TokenResult { code = result.code, msg = result.msg, success = false };

            LoginUser user = new LoginUser
            {
                UserId = userView.UserId,
                UserName = userView.UserName,
                RoleType = userView.RoleType,
                IsAdmin = (userView.Role == RoleEnums.超级管理员 || userView.Role == RoleEnums.管理员) ? true : false,
                ExpiryDateTime = DateTime.Now.AddHours(8)
            };

            TokenResult model = new TokenResult();
            try
            {
                string secretKey = ConfigHelper.JwtSecretKey;
                byte[] key = Encoding.UTF8.GetBytes(secretKey);
                IJwtAlgorithm algorithm = new HMACSHA256Algorithm();
                IJsonSerializer serializer = new JsonNetSerializer();
                IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
                IJwtEncoder encoder = new JwtEncoder(algorithm, serializer, urlEncoder);
                var token = encoder.Encode(user, key);
                model.success = true;
                model.token = token;
                model.msg = "OK";
            }
            catch (Exception ex)
            {
                model.success = false;
                model.token = "";
                model.msg = ex.Message;
            }
            return model;
        }



    }
}
