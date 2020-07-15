using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DistributionShop.WebApi.Controllers
{
    public class BaseApiController : ApiController
    {
        public LoginUser loginUser { get; set; } = new LoginUser();
        public BaseApiController()
        {
            if (RequestContext.RouteData.Values["LoginUser"] != null)
                loginUser = RequestContext.RouteData.Values["LoginUser"] as LoginUser;
        }
    }
}
