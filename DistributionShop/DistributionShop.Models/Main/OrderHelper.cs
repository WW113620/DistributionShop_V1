using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.Main
{
    public static class OrderHelper
    {
        public static string GetPayStatusName(PayStateEnums state)
        {
            if (state == PayStateEnums.已拒绝)
                return "已支付，退款被拒绝";

            return Enum.GetName(typeof(PayStateEnums), (int)state);
        }

        public static string GetPayAccount(this decimal totalPayPrice, PayStateEnums payState, int RefundMethod, decimal Refund_fee)
        {
            if (payState == PayStateEnums.未支付 || payState == PayStateEnums.已取消 || payState == PayStateEnums.支付失败)
                return "---";

            string iMoney = totalPayPrice.ToMoney();
            if (payState == PayStateEnums.已退款)
            {
                string refundfee = Refund_fee.ToMoney();
                return $"{iMoney}-已退款({refundfee})";
            }

            return iMoney;
        }

        public static string GetPayChannel(this int payChannel, PayStateEnums payState)
        {
            if (payState == PayStateEnums.未支付 || payState == PayStateEnums.已取消)
                return "---";

            if (payChannel == (int)PayChannelEnums.未知)
                return "---";
            return Enum.GetName(typeof(PayChannelEnums), payChannel);
        }

        public static string GetPayTime(this DateTime? dt, PayStateEnums payState, string format = "")
        {
            if (payState == PayStateEnums.未支付 || payState == PayStateEnums.已取消)
                return "---";

            if (dt == null || dt == DateTime.MinValue || dt == DateTime.MaxValue)
                return "---";

            return Convert.ToDateTime(dt).ToString("yyyy-MM-dd HH:mm");
        }

    }
}
