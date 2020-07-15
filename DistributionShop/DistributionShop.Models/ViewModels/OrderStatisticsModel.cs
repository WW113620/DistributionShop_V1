using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class OrderStatisticsModel
    {
        public int NoPayCount { get; set; }
        public int PayedCount { get; set; }
        public int NoSendCount { get; set; }
        public int ApplyRefundCount { get; set; }
    }
}
