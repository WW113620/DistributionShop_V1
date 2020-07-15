using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class MyOrderViewModel
    {
        public List<SelectOption> SearchTypeList { get; set; }

        public List<SelectOption> WebPayStateList { get; set; }
    }
}
