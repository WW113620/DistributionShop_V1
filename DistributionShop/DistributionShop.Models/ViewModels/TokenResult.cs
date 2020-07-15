using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class TokenResult : BaseResult
    {
        public bool success { get; set; }
        public string loginName { get; set; }
        public string token { get; set; }
    }
}
