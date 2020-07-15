using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Controllers
{
    public class ErrorController : Controller
    {
      

        /// <summary>
        /// 错误异常抛出页面
        /// </summary>
        /// <param name="code"></param>
        /// <param name="msg"></param>
        /// <returns></returns>
        public ActionResult Error(string msg)
        {
            ViewBag.msg =HttpUtility.UrlDecode(msg);
            return View();
        }

        #region 测试相关的
        public ActionResult Exception()
        {
            List<int> l = null;
            int i = l.Count;
            return View();
        }

        public JsonResult AjaxException()
        {
            List<int> l = null;
            int i = l.Count;
            return Json(new BaseResult(0, "修改成功"));
        }

        public ActionResult AjaxExceptionTestIndex()
        {
            return View();
        }

        public ActionResult Test()
        {
            return View();
        }
        #endregion
    }
}