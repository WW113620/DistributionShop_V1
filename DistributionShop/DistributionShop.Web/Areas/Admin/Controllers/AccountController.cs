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
    public class AccountController : Controller
    {
        private readonly DataContextEntities _dataContext;
        private readonly AccountLogic _accountLogic;
        private readonly IAccountService _accountService;
        public AccountController(DataContextEntities dataContext, AccountLogic accountLogic, IAccountService accountService)
        {
            this._dataContext = dataContext;
            this._accountLogic = accountLogic;
            this._accountService = accountService;
        }

        #region 登录
        public ActionResult Index()
        {
            return RedirectToAction("Login");
        }

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Verify(LoginRequest model)
        {
            if (string.IsNullOrEmpty(model.UserName))
                return Json(new BaseResult(1, "用户名不能为空"));
            if (string.IsNullOrEmpty(model.Password))
                return Json(new BaseResult(1, "密码不能为空"));

            var user = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == model.UserName);
            if (user == null)
                return Json(new BaseResult(1, "用户不存在"));
            if (user.RoleType != (int)RoleEnums.超级管理员 && user.RoleType != (int)RoleEnums.管理员)
                return Json(new BaseResult(1, "该用户不是管理员"));
            if (user.State == (int)UserStatusEnums.待审核)
                return Json(new BaseResult(1, "该用户未通过审核"));
            if (user.State == (int)UserStatusEnums.已锁定)
                return Json(new BaseResult(1, "该用户已锁定"));

            string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(model.Password, user.PasswordSalt);
            if (user.Password != encryptedWithSaltPassword)
                return Json(new BaseResult(1, "密码不对"));
            UserViewModel userView = new UserViewModel { UserId = user.Id, UserName = user.UserName, RoleType = user.RoleType.ToInt(0) };
            LoginHelper.SetLoginCookie(userView);

            return Json(new BaseResult(0, "登录成功"));
        }

        #endregion

        #region 退出
        public ActionResult LoginOut()
        {
            LoginHelper.Logout();
            return RedirectToAction("Login");
        }
        #endregion

        #region 测试密码
        public ActionResult CreatePwd(string pwd = "")
        {
            if (string.IsNullOrEmpty(pwd))
                return Content("Test");

            var salt = Guid.NewGuid().ToString("N").Substring(12);
            string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(pwd, salt);
            return Content("pwd=" + encryptedWithSaltPassword + " ,salt=" + salt);
        }

        public ActionResult CheckPwd(string pwd = "", string salt = "")
        {
            if (string.IsNullOrEmpty(pwd))
                return Content("Test");

            string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(pwd, salt);
            return Content("enpwd=" + encryptedWithSaltPassword);
        }
        #endregion

        #region 设置
        [AdminLogin]
        public ActionResult Info()
        {
            ViewBag.CurrentPageCode = "S1";
            string userName = LoginHelper.UserName;
            var user = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == userName);
            if (user == null)
                return RedirectToAction("LoginOut");
            return View(user);
        }

        [AdminLogin]
        public ActionResult Password()
        {
            ViewBag.CurrentPageCode = "S2";
            return View();
        }

        [AdminLogin]
        [HttpPost]
        public JsonResult ChangePassword(ChangePasswordModel model)
        {
            BaseResult result = new BaseResult();
            try
            {
                string userName = LoginHelper.UserName;
                result = this._accountLogic.ChangePassword(model, userName);
            }
            catch (Exception e)
            {
                result = new BaseResult(1, "Exception=" + e.Message);
            }
            return Json(result);
        }

        [AdminLogin]
        [HttpPost]
        public JsonResult SaveInfo(Account model)
        {
            BaseResult result = new BaseResult();
            try
            {
                var account = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == model.UserName);
                if (account == null)
                    return Json(new BaseResult(2, "用户不存在"));
                if (account.RoleType == (int)RoleEnums.普通用户 || account.RoleType == (int)RoleEnums.代理用户)
                {
                    account.RoleType = model.RoleType;
                }
                account.NickName = model.NickName;
                account.RealName = model.RealName;
                account.AvatarUrl = model.AvatarUrl;
                account.Phone = model.Phone;
                account.Email = model.Email;
                account.Weixin = model.Weixin;
                this._dataContext.SaveChanges();
                return Json(new BaseResult(0, "保存成功"));
            }
            catch (Exception e)
            {
                return Json(new BaseResult(1, "Exception=" + e.Message));
            }
        }

        #endregion

        #region 后台管理员
        [AdminLogin]
        public ActionResult List()
        {
            List<SelectOption> UserStatusList = EnumHelper.EnumToList<UserStatusEnums>();
            List<SelectOption> RoleList = EnumHelper.EnumToList<RoleEnums>().Where(p => p.Value == (int)RoleEnums.超级管理员 || p.Value == (int)RoleEnums.管理员).ToList();
            ViewBag.UserStatusList = UserStatusList;
            ViewBag.RoleList = RoleList;
            ViewBag.CurrentPageCode = "U1";
            return View();
        }

        [AdminLogin]
        [HttpGet]
        public JsonResult GetList(AccountRequest request)
        {
            LayuiPageResult<AccountViewModel> result = new LayuiPageResult<AccountViewModel>() { code = 1 };
            try
            {
                RoleEnums loginType = (RoleEnums)LoginHelper.UserType;
                string loginName = LoginHelper.UserName;
                var response = this._accountService.GetAdminList(request, loginName, loginType);
                result = new LayuiPageResult<AccountViewModel>() { code = response.code, msg = response.msg, count = response.page.count, data = response.data };
            }
            catch (Exception e)
            {
                result.msg = e.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [AdminLogin]
        public ActionResult Add()
        {
            ViewBag.CurrentPageCode = "U1";
            return View();
        }

        [AdminLogin]
        public ActionResult Edit(long id)
        {
            ViewBag.CurrentPageCode = "U1";
            var user = this._dataContext.Accounts.FirstOrDefault(p => p.Id == id);
            if (user == null)
                return Content("当前用户名不存在或者已被删除");

            return View("~/Areas/Admin/Views/Account/Info.cshtml", user);
        }


        [HttpPost]
        public JsonResult Exist(string value)
        {
            if (!string.IsNullOrEmpty(value))
                value = value.Trim();
            int count = this._dataContext.Accounts.Count(p => p.UserName == value);
            if (count > 0)
                return Json(new { code = 0 });

            if (ConvertHelper.IsPhone(value))
            {
                count = this._dataContext.Accounts.Count(p => p.Phone == value);
                if (count > 0)
                    return Json(new { code = 0 });
            }

            return Json(new { code = 1 });
        }

        [AdminLogin]
        [HttpPost]
        public JsonResult AddAccount(Account account)
        {
            account.UserName = account.UserName.Trim();
            int count = this._dataContext.Accounts.Count(p => p.UserName == account.UserName);
            if (count > 0)
                return Json(new BaseResult(1, "用户名已存在"));

            if (ConvertHelper.IsPhone(account.UserName))
            {
                count = this._dataContext.Accounts.Count(p => p.Phone == account.UserName);
                if (count > 0)
                    return Json(new BaseResult(1, "用户名已存在"));
            }

            var salt = Guid.NewGuid().ToString("N").Substring(12);
            string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(account.Password, salt);
            account.Password = encryptedWithSaltPassword;
            account.PasswordSalt = salt;
            account.AddTime = DateTime.Now;
            this._dataContext.Accounts.Add(account);
            this._dataContext.SaveChanges();
            return Json(new BaseResult(0, "添加成功"));
        }


        [AdminLogin]
        [HttpPost]
        public JsonResult CheckState(long Id, int state)
        {
            var account = this._dataContext.Accounts.Find(Id);
            if (account == null)
                return Json(new BaseResult(1, "用户不存在"));
            account.State = state;
            this._dataContext.SaveChanges();
            return Json(new BaseResult(0, "操作成功"));
        }

        [AdminLogin]
        [HttpPost]
        public JsonResult Delete(long Id)
        {
            var account = this._dataContext.Accounts.Find(Id);
            if (account != null)
            {
                this._dataContext.Accounts.Remove(account);
                this._dataContext.SaveChanges();
            }
            return Json(new BaseResult(0, "操作成功"));
        }

        [AdminLogin]
        public ActionResult AccountPwd()
        {
            ViewBag.CurrentPageCode = "U1";
            return View();
        }

        [AdminLogin]
        [HttpPost]
        public JsonResult SaveChangePwd(AccountPwdModel model)
        {
            try
            {
                if (model == null || string.IsNullOrEmpty(model.userName))
                    return Json(new BaseResult(1, "参数不对"));

                string userName = model.userName;
                var result = this._accountLogic.ChangePassword(model, userName);

                if (result.code == 0 && userName == LoginHelper.UserName)
                    return Json(new BaseResult(2, "密码重置成功"));

                return Json(result);
            }
            catch (Exception e)
            {
                return Json(new BaseResult(1, "Exception=" + e.Message));
            }

        }
        #endregion

    }
}