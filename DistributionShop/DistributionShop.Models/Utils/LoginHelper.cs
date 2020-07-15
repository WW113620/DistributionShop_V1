using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace DistributionShop.Models.Utils
{
    public class LoginHelper
    {
        public static string LoginCookieUID { get { return "Login_Cookies_UserId"; } }
        public static string LoginCookieUserName { get { return "Login_Cookies_UserName"; } }
        public static string LoginCookieNickName { get { return "Login_Cookies_NickName"; } }
        public static string LoginCookieUserType { get { return "Login_Cookies_UserType"; } }

        public static string UserID
        {
            get { return CookieHelper.GetCookie(LoginHelper.LoginCookieUID); }
        }
        public static string UserName
        {
            get { return CookieHelper.GetCookie(LoginHelper.LoginCookieUserName); }
        }

        public static string NickName
        {
            get
            {
                string nikeName = CookieHelper.GetCookie(LoginHelper.LoginCookieNickName);
                if (string.IsNullOrEmpty(nikeName))
                    return "";
                nikeName = HttpUtility.UrlDecode(nikeName);
                return System.Web.HttpUtility.UrlDecode(nikeName);
            }
        }

        public static int UserType
        {
            get { return CookieHelper.GetCookie(LoginHelper.LoginCookieUserType).ToInt(0); }
        }

        public static string LoginName
        {
            get { return $"{Enum.GetName(typeof(RoleEnums), LoginHelper.UserType)}:{LoginHelper.UserName}"; }
        }


        public static void SetLoginCookie(ViewModels.UserViewModel user, int minute = 120)
        {
            DateTime expireTime = DateTime.Now.AddMinutes(minute);
            CookieHelper.SetCookie(LoginHelper.LoginCookieUID, user.UserId.ToString(), expireTime);
            CookieHelper.SetCookie(LoginHelper.LoginCookieUserName, user.UserName, expireTime);
            CookieHelper.SetCookie(LoginHelper.LoginCookieUserType, user.RoleType.ToString(), expireTime);
        }

        public static void Logout()
        {
            CookieHelper.DeleteCookie(LoginHelper.LoginCookieUID);
            CookieHelper.DeleteCookie(LoginHelper.LoginCookieUserName);
            CookieHelper.DeleteCookie(LoginHelper.LoginCookieUserType);

            if (System.Web.HttpContext.Current.Session != null)
            {
                System.Web.HttpContext.Current.Session.Clear();
            }
        }
    }

}
