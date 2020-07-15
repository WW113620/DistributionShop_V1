using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class OrderHeadViewModel 
    { 
        public string OrderSn { get; set; }
        public DateTime? AddTime { get; set; }
        public decimal TotalPayPrice { get; set; }
        public decimal Postage { get; set; }
        public string ProductName { get; set; }
        public string ProductImagePath { get; set; }
        public string RealName { get; set; }
        public decimal WebPrice { get; set; }
        public int PayState { get; set; }
        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd HH:mm");
        public string PayStateName => Enum.GetName(typeof(PayStateEnums), PayState.ToInt(0));
    }
    public class OrderForHeadRequest : BaseReqestParams
    {
        /// <summary>
        /// 前台支付状态
        /// </summary>
        public int WebPayState { get; set; }
        /// <summary>
        /// 订单添加最晚时间，用于前端我的订单查询，
        /// 查询3个月订单，近6个月订单，近12个月订单，所有订单
        /// </summary>
        //public DateTime? EndAddTime { get; set; }

        /// <summary>
        /// 订单添加最晚时间的类型，用于前端我的订单查询，
        /// </summary>
        public int EndAddTimeType { get; set; }

        /// <summary>
        /// 商品名 编号 订单号
        /// </summary>
        public string MixtureWords { get; set; }

        public string UserName { get; set; }
    }
}
