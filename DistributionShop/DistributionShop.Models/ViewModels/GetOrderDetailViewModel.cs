using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class GetOrderDetailViewModel
    {
        public decimal applyAccount { get; set; } = 0;

        public OrderReFund orderReFund { get; set; }

        public OrderDetailViewModelData OrderDetailViewModelData;

        public List<OrderDetail> OrderDetailList { get; set; }

        //public Order_Address OrderAddress { get; set; }
    }

    public class OrderDetailViewModelData
    {
        public string RealName { get; set; }
        public int? PrePhoneType { get; set; }
        public string PrePhoneTypeStr => Enum.IsDefined(typeof(PhoneTypeEnums), PrePhoneType) ? EnumHelper.GetDescription((PhoneTypeEnums)(PrePhoneType ?? 1)) : EnumHelper.GetDescription(PhoneTypeEnums.中国);
        public string TelPhone { get; set; }
        public string ProvinceName { get; set; }
        public string CityName { get; set; }
        public string CountryName { get; set; }
        public string DistrictName { get; set; }

        public string Address { get; set; }
        public string OrderSn { get; set; }
        public DateTime? AddTime { get; set; }
        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd HH:mm");
        public int PayState { get; set; }
        public string PayStateStr => Enum.GetName(typeof(PayStateEnums), PayState.ToInt(0));
        public decimal? TotalPayPrice { get; set; }
        public string TotalPayPriceStr => (TotalPayPrice.ToDecimal(2)).ToMoney();
        public decimal? Postage { get; set; }
        public string PostageStr => (Postage.ToDecimal(2)).ToMoney();
    }
}
