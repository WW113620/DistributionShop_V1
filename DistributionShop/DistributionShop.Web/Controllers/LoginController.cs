using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Web.Models;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace DistributionShop.Web.Controllers
{

    public class LoginController : BaseController
    {
        private IAuthenticationManager authenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }
        private readonly AccountLogic _accountLogic;
        private readonly DataContextEntities _dataContext;
        public LoginController(DataContextEntities dataContext, AccountLogic accountLogic)
        {
            this._dataContext = dataContext;
            this._accountLogic = accountLogic;
        }

        [AllowAnonymous]
        public ActionResult Index(string ReturnUrl, int p = 0)
        {
            if (User.Identity.IsAuthenticated)
                return RedirectToAction("Index", "Home");

            ViewBag.ReturnUrl = ReturnUrl;
            ViewBag.Tab = p;
            ViewBag.PrePhoneOptionList = EnumHelper.EnumToList<PhoneTypeEnums>();
            return View();
        }

        [HttpPost, AllowAnonymous]
        public JsonResult Login(LoginRequest model)
        {
            UserViewModel userView = new UserViewModel();
            BaseResult result = this._accountLogic.WebLogin(model, ref userView);
            if (result.code != 0)
                return Json(result);

            LoginClaimsIdentity(userView);
            return Json(new BaseResult(0, "登录成功"));
        }

        private void LoginClaimsIdentity(UserViewModel model)
        {

            CommonUtils.ResetCookieNickName(model.NickName);

            var claims = new List<Claim>
                {
                    new Claim(ConstValue.LoginUserIdKey,model.UserId.ToString()),
                    new Claim(ClaimTypes.Name, model.UserName.ToString()),
                    new Claim(ConstValue.LoginUserRoleType, model.RoleType.ToString()),
                };
            var identity = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);
            var pro = new AuthenticationProperties() { IsPersistent = true };
            authenticationManager.SignIn(pro, identity);
        }



        [HttpPost, AllowAnonymous]
        public JsonResult LoginPhone(string Phone, string VerifyCode, int PhonePrefix)
        {
            if (string.IsNullOrEmpty(Phone))
                return Json(new BaseResult(1, "手机号不能为空"));

            Phone = Phone.Trim();
            PhoneTypeEnums phoneType = (PhoneTypeEnums)PhonePrefix;
            ValidPhoneModel model = this._accountLogic.ValidPhone(phoneType, Phone);
            if (!model.IsPhone)
                return Json(new BaseResult(1, "请输入正确的手机号"));

            if (string.IsNullOrEmpty(VerifyCode))
                return Json(new BaseResult(1, "手机验证码不能为空"));

            string sessionCode = Session["VerifyCode"] == null ? "" : Session["VerifyCode"].ToString();
            if (string.IsNullOrEmpty(sessionCode))
                return Json(new BaseResult(1, "手机验证码已过期"));

            if (VerifyCode != sessionCode)
                return Json(new BaseResult(1, "手机验证码输入有误"));

            UserViewModel userView = new UserViewModel();
            Account user = new Account();
            user = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == Phone && p.State == (int)UserStatusEnums.已通过);
            if (user != null)
            {
                userView = new UserViewModel { UserId = user.Id, UserName = user.UserName, NickName = user.NickName, RoleType = user.RoleType.ToInt(0) };
                LoginClaimsIdentity(userView);
                return Json(new BaseResult(0, "登录成功"));
            }

            user = this._dataContext.Accounts.FirstOrDefault(p => p.Phone == Phone && p.State == (int)UserStatusEnums.已通过);
            if (user != null)
            {
                userView = new UserViewModel { UserId = user.Id, UserName = user.UserName, NickName = user.NickName, RoleType = user.RoleType.ToInt(0) };
                LoginClaimsIdentity(userView);
                return Json(new BaseResult(0, "登录成功"));
            }

            return Json(new BaseResult(1, "此手机号未注册"));
        }


        [HttpPost, AllowAnonymous]
        public JsonResult Register(RegisterRequest model)
        {
            string sessionCode = Session["VerifyCode"] == null ? "" : Session["VerifyCode"].ToString();
            if (string.IsNullOrEmpty(sessionCode))
                return Json(new BaseResult(1, "验证码已过期"));

            if (model.VerifyCode != sessionCode)
                return Json(new BaseResult(1, "验证码输入有误"));

            BaseResult baseResult = this._accountLogic.Register(model);
            if (baseResult.code != 0)
                return Json(baseResult);

            var salt = Guid.NewGuid().ToString("N").Substring(12);
            string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(model.Password, salt);
            model.UserName = model.UserName.Trim();
            Account account = new Account();
            account.UserName = model.UserName;
            account.NickName = model.UserName;
            account.Phone = model.UserName;
            account.PrePhoneType = model.PhonePrefix;
            account.Password = encryptedWithSaltPassword;
            account.PasswordSalt = salt;
            account.RoleType = (int)RoleEnums.普通用户;
            account.State = (int)UserStatusEnums.已通过;
            account.AddTime = DateTime.Now;
            this._dataContext.Accounts.Add(account);
            this._dataContext.SaveChanges();

            return Json(new BaseResult(0, "注册成功"));
        }

        [AllowAnonymous]
        public ActionResult Password()
        {
            ViewBag.PrePhoneOptionList = EnumHelper.EnumToList<PhoneTypeEnums>();
            return View();
        }

        [HttpPost, AllowAnonymous]
        public JsonResult ResetPwdVerifyCode(int PhonePrefix, string Phone, string VerifyCode)
        {
            if (string.IsNullOrEmpty(Phone))
                return Json(new BaseResult(1, "手机号不能为空"));

            Phone = Phone.Trim();
            PhoneTypeEnums phoneType = (PhoneTypeEnums)PhonePrefix;
            ValidPhoneModel model = this._accountLogic.ValidPhone(phoneType, Phone);
            if (!model.IsPhone)
                return Json(new BaseResult(1, "请输入正确的手机号"));

            var user = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == Phone && p.State == (int)UserStatusEnums.已通过);
            if (user == null)
            {
                user = this._dataContext.Accounts.FirstOrDefault(p => p.Phone == Phone && p.State == (int)UserStatusEnums.已通过);
                if (user == null)
                    return Json(new BaseResult(1, "手机号不存在，请先注册"));
            }


            if (string.IsNullOrEmpty(VerifyCode))
                return Json(new BaseResult(1, "手机验证码不能为空"));

            string sessionCode = Session["VerifyCode"] == null ? "" : Session["VerifyCode"].ToString();
            if (string.IsNullOrEmpty(sessionCode))
                return Json(new BaseResult(1, "手机验证码已过期"));

            if (VerifyCode != sessionCode)
                return Json(new BaseResult(1, "手机验证码输入有误"));

            return Json(new BaseResult(0, "验证通过"));
        }

        [HttpPost, AllowAnonymous]
        public JsonResult ResetPassword(ResetPasswordModel model)
        {
            if (string.IsNullOrEmpty(model.Phone))
                return Json(new BaseResult(1, "操作失误，请刷新后重试"));

            model.Phone = model.Phone.Trim();
            PhoneTypeEnums phoneType = (PhoneTypeEnums)model.PhonePrefix;
            ValidPhoneModel valid = this._accountLogic.ValidPhone(phoneType, model.Phone);
            if (!valid.IsPhone)
                return Json(new BaseResult(1, "请输入正确的手机号"));

            BaseResult baseResult = this._accountLogic.UserResetPassword(model);
            return Json(baseResult);
        }

        /// <summary>
        /// 短信验证码
        /// </summary>
        /// <param name="phone"></param>
        /// <returns></returns>
        [HttpPost, AllowAnonymous]
        public JsonResult VerifyCode(string phone, int prefix)
        {
            if (string.IsNullOrEmpty(phone))
                return Json(new BaseResult(1, "手机号不能为空"));

            phone = phone.Trim();
            PhoneTypeEnums phoneType = (PhoneTypeEnums)prefix;
            ValidPhoneModel model = this._accountLogic.ValidPhone(phoneType, phone);
            if (!model.IsPhone)
                return Json(new BaseResult(1, "请输入正确的手机号"));

            string code = CaptchaHelper.CreateCode(6);
            string mes = this._accountLogic.SendMessage(code, phone, phoneType);
            if (mes != "发送成功")
                return Json(new BaseResult(1, mes));

            Session["VerifyCode"] = code;
            return Json(new BaseResult(0, code));
        }

        /// <summary>
        /// 注销
        /// </summary>
        /// <returns></returns>
        public ActionResult Logout()
        {
            if (User.Identity.IsAuthenticated)
            {
                FormsAuthentication.SignOut();
                CookieHelper.DeleteCookie(ConstValue.JuCheapAuthorizeCookieName);
            }
            return RedirectToAction("Index");
        }

    }
}