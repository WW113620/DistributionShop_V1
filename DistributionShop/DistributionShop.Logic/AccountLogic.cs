using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Models.ViewModels.SMSMessage;
using DistributionShop.Service.Accounts;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Logic
{
    public class AccountLogic
    {
        private readonly IAccountService _accountService;
        private readonly DataContextEntities _dataContext;
        public AccountLogic(DataContextEntities dataContext, IAccountService accountService)
        {
            this._dataContext = dataContext;
            this._accountService = accountService;
        }

        public BaseResult Login(LoginRequest model, ref UserViewModel userView)
        {
            try
            {
                if (string.IsNullOrEmpty(model.UserName))
                    return new BaseResult(1, "用户名不能为空");

                if (string.IsNullOrEmpty(model.Password))
                    return new BaseResult(1, "密码不能为空");

                var user = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == model.UserName);
                if (user == null)
                    return new BaseResult(2, "用户不存在");

                if (user.RoleType != (int)RoleEnums.超级管理员 && user.RoleType != (int)RoleEnums.管理员 &&
                    user.RoleType != (int)RoleEnums.代理用户 && user.RoleType != (int)RoleEnums.普通用户)
                    return new BaseResult(1, "此用户无法登录系统");
                if (user.State == (int)UserStatusEnums.待审核)
                    return new BaseResult(1, "此用户未通过审核");
                if (user.State == (int)UserStatusEnums.已锁定)
                    return new BaseResult(1, "此用户已被锁定");
                string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(model.Password, user.PasswordSalt);
                if (user.Password != encryptedWithSaltPassword)
                    return new BaseResult(1, "密码不对");

                userView = new UserViewModel { UserId = user.Id, UserName = user.UserName, NickName = user.NickName, RoleType = user.RoleType.ToInt(0) };
                return new BaseResult(0, "登录成功");
            }
            catch (Exception e)
            {
                return new BaseResult(1, "Exception:" + e.Message);
            }

        }

        public BaseResult WebLogin(LoginRequest model, ref UserViewModel userView)
        {
            try
            {
                if (string.IsNullOrEmpty(model.UserName))
                    return new BaseResult(1, "手机号不能为空");

                if (string.IsNullOrEmpty(model.Password))
                    return new BaseResult(1, "密码不能为空");

                var user = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == model.UserName && p.PrePhoneType == model.PhonePrefix);
                if (user == null)
                {
                    user = this._dataContext.Accounts.FirstOrDefault(p => p.Phone == model.UserName);
                    if (user == null)
                        return new BaseResult(2, "用户不存在");
                }

                if (user.RoleType != (int)RoleEnums.超级管理员 && user.RoleType != (int)RoleEnums.管理员 &&
                    user.RoleType != (int)RoleEnums.代理用户 && user.RoleType != (int)RoleEnums.普通用户)
                    return new BaseResult(1, "此用户无权登录系统");
                if (user.State == (int)UserStatusEnums.待审核)
                    return new BaseResult(1, "此用户未通过审核");
                if (user.State == (int)UserStatusEnums.已锁定)
                    return new BaseResult(1, "此用户已被锁定");
                string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(model.Password, user.PasswordSalt);
                if (user.Password != encryptedWithSaltPassword)
                    return new BaseResult(1, "密码不对");

                userView = new UserViewModel { UserId = user.Id, UserName = user.UserName, NickName = user.NickName, RoleType = user.RoleType.ToInt(0) };
                return new BaseResult(0, "登录成功");
            }
            catch (Exception e)
            {
                return new BaseResult(1, "Exception:" + e.Message);
            }

        }

        public string SendMessage(string code, string to, PhoneTypeEnums phoneType = PhoneTypeEnums.中国)
        {
            string sendResult = string.Empty;
            DateTime now = DateTime.Now;
            string message = $"验证码为：{code} (有效期10分钟)，如非本人操作，请忽略本短信【毛毛雨健康生活馆】";
            var smsLog = new SMSMessageLog { Message = message, SendTo = to, SendFromGuid = Guid.NewGuid().ToString(), SendTime = now, Result = "", SendType = (int)SysMessageEnums.用户注册 };
            try
            {
                DateTime end = now.AddMinutes(5);
                int count = this._accountService.GetSendMessageCount(to, SysMessageEnums.用户注册, now, end);
                if (count > 10)
                    return "短信验证码发送太频繁，稍后再发送";
                if (phoneType == PhoneTypeEnums.中国)
                {
                    sendResult = SMSService.SendChinaMessage(message, to);
                }
                else
                {
                    sendResult = SMSService.SendMessage(message, to);
                }
                smsLog.Result = sendResult;
            }
            catch (Exception e)
            {
                smsLog.Result = "fail exception:" + e.Message;
            }
            this._dataContext.SMSMessageLogs.Add(smsLog);
            this._dataContext.SaveChanges();
            return sendResult;
        }


        public ValidPhoneModel ValidPhone(PhoneTypeEnums phoneType, string phone)
        {
            if (phoneType == PhoneTypeEnums.中国)
            {
                if (!ConvertHelper.IsMobilePhone(phone))
                    return new ValidPhoneModel { IsPhone = false };

                return new ValidPhoneModel { IsPhone = true, Phone = phone, PhoneType = PhoneTypeEnums.中国 };
            }
            else if (phoneType == PhoneTypeEnums.澳洲)
            {
                if (!ConvertHelper.IsAuPhone(phone))
                    return new ValidPhoneModel { IsPhone = false };
                return new ValidPhoneModel { IsPhone = true, Phone = phone, PhoneType = PhoneTypeEnums.澳洲 };
            }

            return new ValidPhoneModel { IsPhone = false };
        }

        public ValidPhoneModel ValidPhone(string phone)
        {
            phone = GetPhone(phone);
            if (!ConvertHelper.IsPhone(phone))
                return new ValidPhoneModel { IsPhone = false };

            if (phone.Length == 11)
                return new ValidPhoneModel { IsPhone = true, Phone = phone, PhoneType = PhoneTypeEnums.中国 };
            else if (phone.Length == 10)
            {
                string iPhone = phone.Substring(1, 9);
                return new ValidPhoneModel { IsPhone = true, Phone = iPhone, PhoneType = PhoneTypeEnums.澳洲 };
            }
            else if (phone.Length == 9)
                return new ValidPhoneModel { IsPhone = true, Phone = phone, PhoneType = PhoneTypeEnums.澳洲 };

            return new ValidPhoneModel { IsPhone = false };
        }

        public string GetPhone(string phone)
        {
            if (string.IsNullOrEmpty(phone))
                return "";
            phone = phone.Trim();
            if (string.IsNullOrEmpty(phone))
                return "";
            var arrPhone = phone.Split(' ');
            if (arrPhone.Length == 1)
                return arrPhone[0].TrimEmpty();

            return arrPhone[1].TrimEmpty();
        }

        public BaseResult Register(RegisterRequest model)
        {
            if (string.IsNullOrEmpty(model.UserName))
                return new BaseResult(1, "手机号不能为空");

            model.UserName = model.UserName.Trim();
            PhoneTypeEnums phoneType = (PhoneTypeEnums)model.PhonePrefix;
            ValidPhoneModel valid = ValidPhone(phoneType, model.UserName);
            if (!valid.IsPhone)
                return new BaseResult(1, "请输入正确的手机号");

            int count = this._dataContext.Accounts.Count(p => p.UserName == model.UserName);
            if (count > 0)
                return new BaseResult(1, "此手机号已注册");

            count = this._dataContext.Accounts.Count(p => p.Phone == model.UserName);
            if (count > 0)
                return new BaseResult(1, "此手机号已注册");

            if (string.IsNullOrEmpty(model.Password))
                return new BaseResult(1, "密码不能为空");

            model.Password = model.Password.Trim();
            if (!ConvertHelper.IsValidPassword(model.Password))
                return new BaseResult(1, "密码必须6到20位，且不能出现空格");

            if (model.Password != model.RePassword)
                return new BaseResult(1, "密码和确认密码不匹配");

            return new BaseResult(0, "通过校验");

        }


        public BaseResult ChangePassword(ChangePasswordModel model, string userName)
        {
            if (model.password != model.repassword)
                return new BaseResult(1, "确认密码和新密码不匹配");

            var user = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == userName);
            if (user == null)
                return new BaseResult(2, "用户不存在");

            string encryptedWithSaltPassword = CommonHelper.GetPasswrodWithTwiceEncode(model.oldPassword, user.PasswordSalt);
            if (user.Password != encryptedWithSaltPassword)
                return new BaseResult(1, "原始密码不对");

            string encryptedNewPassword = CommonHelper.GetPasswrodWithTwiceEncode(model.password, user.PasswordSalt);
            if (user.Password == encryptedNewPassword)
                return new BaseResult(1, "新密码不能等于原始密码");

            var salt = Guid.NewGuid().ToString("N").Substring(12);
            string encryptedWithSaltNewPassword = CommonHelper.GetPasswrodWithTwiceEncode(model.password, salt);
            user.Password = encryptedWithSaltNewPassword;
            user.PasswordSalt = salt;
            this._dataContext.SaveChanges();

            return new BaseResult(0, "修改成功");
        }

        public BaseResult UserResetPassword(ResetPasswordModel model)
        {
            string Phone = model.Phone.Trim();
            Account user = new Account();
            user = this._dataContext.Accounts.FirstOrDefault(p => p.UserName == Phone && p.State == (int)UserStatusEnums.已通过);
            if (user == null)
            {
                user = this._dataContext.Accounts.FirstOrDefault(p => p.Phone == Phone && p.State == (int)UserStatusEnums.已通过);
                if (user == null)
                    return new BaseResult(1, "手机号不存在，请先注册");
            }

            if (string.IsNullOrEmpty(model.Password))
                return new BaseResult(1, "密码不能为空");

            model.Password = model.Password.Trim();
            if (!ConvertHelper.IsValidPassword(model.Password))
                return new BaseResult(1, "密码必须6到20位，且不能出现空格");
            if (model.Password != model.RepeatPassword)
                return new BaseResult(1, "两次密码不匹配");

            var salt = Guid.NewGuid().ToString("N").Substring(12);
            string encryptedWithSaltNewPassword = CommonHelper.GetPasswrodWithTwiceEncode(model.Password, salt);
            user.Password = encryptedWithSaltNewPassword;
            user.PasswordSalt = salt;
            user.PrePhoneType = model.PhonePrefix;
            this._dataContext.SaveChanges();

            return new BaseResult(0, "修改成功");
        }

    }
}
