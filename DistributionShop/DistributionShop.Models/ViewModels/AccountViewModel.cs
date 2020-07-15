using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class AccountViewModel : Account
    {
        public string PhoneValue => PrePhoneType.ToInt(0) > 0 ? $"{ EnumHelper.GetDescription((PhoneTypeEnums)(PrePhoneType.ToInt(0)))} {Phone}": Phone;

        public string RoleName => System.Enum.GetName(typeof(RoleEnums), RoleType.ToInt(4));
        public string StateName => System.Enum.GetName(typeof(UserStatusEnums), State.ToInt(1));

        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd HH:mm");
    }

    public class AccountRequest : BaseReqestParams
    {
        public string UserName { get; set; }
        public string NickName { get; set; }
        public string RealName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Weixin { get; set; }
        public string RoleType { get; set; }
        public string State { get; set; }
        public string CountryName { get; set; }
    }
}
