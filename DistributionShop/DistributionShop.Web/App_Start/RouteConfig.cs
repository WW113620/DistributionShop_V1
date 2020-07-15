using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace DistributionShop.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            //注入路由属性
            routes.MapMvcAttributeRoutes();

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("", "Pay/Index/{OrderSn}", new { controller = "Pay", action = "Index" });
            routes.MapRoute("", "Pay/Success/{OrderSn}", new { controller = "Pay", action = "Success" });
            routes.MapRoute("", "Pay/Fail/{OrderSn}", new { controller = "Pay", action = "Fail" });
            routes.MapRoute("", "Pay/Fail/{OrderSn}", new { controller = "Pay", action = "Fail" });
            routes.MapRoute("", "UserCenter/OrderReFund/{orderSn}", new { controller = "UserCenter", action = "OrderReFund" });

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                namespaces: new string[] { "DistributionShop.Web.Controllers" }
            );
        }
    }
}
