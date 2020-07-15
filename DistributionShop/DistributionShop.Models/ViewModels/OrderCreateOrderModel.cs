using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class OrderCreateOrderModel
    {
        public int PlatformEnum { get; set; }
        public int PayChannel { get; set; }
        
        public long AddressId { get; set; }
        public string Remark { get; set; }
        /// <summary>
        /// 单个商品直接付款时使用，购物车无需传
        /// </summary>
        public long productId { get; set; }
        /// <summary>
        /// 单个商品购买数
        /// </summary>
        public int productNum { get; set; }

    }
}
