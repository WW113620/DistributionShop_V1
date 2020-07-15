using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class OrdersHeadViewModel
    { 
        public int RowId { get; set; }
        public string OrderSn { get; set; }
        public decimal TotalPayPrice { get; set; }
        public string TotalPayPriceStr => TotalPayPrice.ToMoney();
        public decimal Postage { get; set; }
        public string PostageStr => Postage.ToMoney();
        public DateTime? AddTime { get; set; }
        public string ProductName { get; set; }
        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd");

        public List<OrderDetail> orderDetailList { get; set; }

        public string RealName { get; set; }

        public int PayState { get; set; }
        public string PayStateName => Enum.GetName(typeof(PayStateEnums), PayState.ToInt(0));
    }
}
