using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class OrderLogicAddOrderDto
    {
        public List<ShoppingCartModel> checkedShoppingCartList { get; set; }
        public long UserId { get; set; }
        public string UserName { get; set; }
        public string OrderSn { get; set; }
        //public decimal TotalPayPrice { get; set; }
        //public decimal DiscountAmount { get; set; }
        public PlatformEnums PlatformEnum { get; set; }
        public PayChannelEnums PayChannel { get; set; }
        public string Remark { get; set; }

        /// <summary>
        /// 收货地址
        /// </summary>
        public T_Address t_Address{ get; set; }
    }
}
