using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute("", "Admin/Order/Detail/{OrderSn}", new { controller = "Order", action = "Detail" });
            context.MapRoute("", "Admin/Order/Edit/{OrderSn}", new { controller = "Order", action = "Edit" });

            context.MapRoute(
                "Admin_default",
                "Admin/{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}