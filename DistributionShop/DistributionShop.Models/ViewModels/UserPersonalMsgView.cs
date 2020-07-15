using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class UserPersonalMsgView
    {
        public UserMessage UserMessage { get; set; }

        public List<T_Country> CountryList { get; set; }

        public List<SelectOption> PrePhoneOptionList { get; set; }

    }

    public class UserMessage
    {
        public string UserName { get; set; }
        public string RealName { get; set; }
        public string NickName { get; set; }
        public string Phone { get; set; }

        public int CountryId { get; set; }
        public string Email { get; set; }
        public int PrePhoneType { get; set; }

        public string AvatarUrl { get; set; }
    }

}
