using DistributionShop.Web.Attribute;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new ExceptionAttribute());
        }
    }
}
