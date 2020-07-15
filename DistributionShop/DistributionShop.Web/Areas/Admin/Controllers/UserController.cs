using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service.Accounts;
using DistributionShop.Web.Attribute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    [AdminLogin]
    public class UserController : Controller
    {
        private readonly DataContextEntities _dataContext;
        private readonly AccountLogic _accountLogic;
        private readonly IAccountService _accountService;
        public UserController(DataContextEntities dataContext, AccountLogic accountLogic, IAccountService accountService)
        {
            this._dataContext = dataContext;
            this._accountLogic = accountLogic;
            this._accountService = accountService;
        }

        public ActionResult Index()
        {
            List<SelectOption> UserStatusList = EnumHelper.EnumToList<UserStatusEnums>();
            List<SelectOption> RoleList = EnumHelper.EnumToList<RoleEnums>().Where(p => p.Value == (int)RoleEnums.代理用户 || p.Value == (int)RoleEnums.普通用户).ToList();
            ViewBag.UserStatusList = UserStatusList;
            ViewBag.RoleList = RoleList;

            ViewBag.CurrentPageCode = "U3";
            return View();
        }

        [HttpGet]
        public JsonResult GetList(AccountRequest request)
        {
            LayuiPageResult<AccountViewModel> result = new LayuiPageResult<AccountViewModel>() { code = 1 };
            try
            {
                RoleEnums loginType = (RoleEnums)LoginHelper.UserType;
                string loginName = LoginHelper.UserName;
                var response = this._accountService.GetUserList(request, loginName, loginType);
                result = new LayuiPageResult<AccountViewModel>() { code = response.code, msg = response.msg, count = response.page.count, data = response.data };
            }
            catch (Exception e)
            {
                result.msg = e.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult ResetPassword(long Id)
        {
            var user = this._dataContext.Accounts.Find(Id);
            if (user == null)
                return Json(new BaseResult(1, "此用户不存在或者已被删除"));
            if (user.RoleType == (int)RoleEnums.超级管理员 || user.RoleType == (int)RoleEnums.管理员)
                return Json(new BaseResult(1, "您无权限重置管理员密码"));

            string code = CaptchaHelper.Create(6).ToLower();
            var salt = Guid.NewGuid().ToString("N").Substring(12);
            string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(code, salt);
            user.Password = encryptedWithSaltPassword;
            user.PasswordSalt = salt;
            this._dataContext.SaveChanges();

            return Json(new BaseResult(0, code));
        }

        public ActionResult Edit(long id)
        {
            ViewBag.CurrentPageCode = "U3";
            var user = this._dataContext.Accounts.FirstOrDefault(p => p.Id == id);
            if (user == null)
                return Content("当前用户名不存在或者已被删除");
            if (user.RoleType == (int)RoleEnums.超级管理员 || user.RoleType == (int)RoleEnums.管理员)
                return Content("您无权限编辑管理员信息");

            List<SelectOption> RoleList = EnumHelper.EnumToList<RoleEnums>().Where(p => p.Value == (int)RoleEnums.代理用户 || p.Value == (int)RoleEnums.普通用户).ToList();
            ViewBag.RoleList = RoleList;
            return View(user);
        }

    }
}