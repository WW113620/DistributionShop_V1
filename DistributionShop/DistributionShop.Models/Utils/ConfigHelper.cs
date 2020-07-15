using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.Utils
{
    public class ConfigHelper
    {
        public static string GetConfigValue(string sKey)
        {
            string sValue = null;
            if ((sValue = System.Configuration.ConfigurationManager.AppSettings[sKey]) == null)
            {
                sValue = "";
            }
            return sValue;
        }

        public static string JwtSecretKey = "QAZ123wsx456#@$";

        public static string UploadDocumentRoot = GetConfigValue("UploadDocumentRoot");

        public static string WebDomainAction = GetConfigValue("WebDomainAction").TrimEnd('/');

        public static string ProductImagePath
        {
            get { return $"{UploadDocumentRoot}/ProductImage"; }
        }

        public static string ProductCoverPath
        {
            get { return $"{UploadDocumentRoot}/ProductCover"; }
        }

        public static string UserIdCardPath
        {
            get { return $"{UploadDocumentRoot}/ UserIdCard"; }
        }

        public static string UserAvatarPath
        {
            get { return $"{UploadDocumentRoot}/UserAvatar"; }
        }

        public static string GetCoverImage(string fileName)
        {
            return $"{WebDomainAction.TrimEnd('/')}/api/MediaApi/GetCoverFileName?fileName={fileName}";
        }

        public static string GetProductImage(string fileName)
        {
            return $"{WebDomainAction.TrimEnd('/')}/api/MediaApi/GetProDisplayFileName?fileName={fileName}";
        }

    }
}
