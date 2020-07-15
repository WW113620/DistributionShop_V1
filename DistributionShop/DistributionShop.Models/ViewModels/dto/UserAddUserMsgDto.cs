using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels.dto
{
    public class UserAddUserMsgDto
    {
        public string UserName { get; set; }
        public string RealName { get; set; }
        public string NickName { get; set; }
        public int PrePhoneType { get; set; } = -1;
        public string Phone { get; set; }
        public int CountryId { get; set; } = -1;
        public string CountryName { get; set; }
        public string Email { get; set; }
        public string AvatarUrl { get; set; }
    }
}
