using DistributionShop.Web.Attribute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    [AdminLogin]
    public class MerchantController : Controller
    {
        /// <summary>
        /// 商家列表
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            ViewBag.CurrentPageCode = "U2";
            return View("~/Areas/Admin/Views/User/Index.cshtml");
        }
    }
}