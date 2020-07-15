using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    class BrandModel
    {
    }
    public class BrandRequest:BaseReqestParams { 
    public string Name { get; set; }
    }

    public class BrandViewModel:Brand {
        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd HH:mm");
    }
}
