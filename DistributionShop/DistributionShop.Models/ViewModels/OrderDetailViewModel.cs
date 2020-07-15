using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DistributionShop.Models.Main;

namespace DistributionShop.Models.ViewModels
{
    public class OrderDetailViewModel : OrderDetail
    {
        public long _row_number_ { get; set; }
        public int PayState { get; set; }
        public int PayChannel { get; set; }
         public int Platform { get; set; }
        public DateTime? PayTime { get; set; }

        public string OriginalPriceValue => OriginalPrice.ToMoney();
        public string WebPriceValue => WebPrice.ToMoney();
        public string PayStateName => Enum.GetName(typeof(PayStateEnums), PayState);

        public string PayChannelName => PayChannel.GetPayChannel((PayStateEnums)PayState);

        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd HH:mm");

        public string PayTimeValue => PayTime.GetPayTime((PayStateEnums)PayState, "---");
    }

    public class OrderDetailRequest : OrderRequest
    {
        public string ProductName { get; set; }
    }
}
