using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class AddressViewModel:T_Address
    {
        public long _row_number_ { get; set; }
        /// <summary>
        /// 联系方式
        /// </summary>
        public string PhoneStr => string.Concat("(", EnumHelper.GetDescription((PhoneTypeEnums)PrePhoneType),") ",TelPhone);

        /// <summary>
        /// 身份证上传
        /// </summary>
        public string IDImageStatus => (string.IsNullOrWhiteSpace(IDPhotoNegative) || string.IsNullOrWhiteSpace(IDPhotoPositive) ? "未上传" : "已上传");

    }

    public class AddressRequest : BaseReqestParams
    {
        public string UserName { get; set; }
    }
}
