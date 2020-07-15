using DistributionShop.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DistributionShop.Web.Controllers
{
    public class TestController : ApiController
    {
        private readonly ShoppingCartLogic _shoppingCartLogic;

        public TestController(ShoppingCartLogic shoppingCartLogic)
        {
            _shoppingCartLogic = shoppingCartLogic;
        }

        [HttpGet]
        public string Code()
        {
            return DateTime.Now.ToString("yyyyMMddHHmmssfff");
        }

        [HttpGet]
        public HttpResponseMessage GetCover(long? id)
        {
            var r = _shoppingCartLogic.GetListByUserNameFromRedis("admin");
            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("参数错误") };
        }
    }
}
