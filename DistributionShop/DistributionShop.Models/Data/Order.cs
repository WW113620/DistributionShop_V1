//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DistributionShop.Models.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Order
    {
        public long Id { get; set; }
        public Nullable<long> UserId { get; set; }
        public string UserName { get; set; }
        public string RealName { get; set; }
        public string OrderSn { get; set; }
        public int PayState { get; set; }
        public Nullable<decimal> TotalPayPrice { get; set; }
        public Nullable<decimal> DiscountAmount { get; set; }
        public Nullable<decimal> Postage { get; set; }
        public Nullable<int> Platform { get; set; }
        public Nullable<int> PayChannel { get; set; }
        public Nullable<int> IsDel { get; set; }
        public string Remark { get; set; }
        public Nullable<System.DateTime> AddTime { get; set; }
        public Nullable<System.DateTime> UpdateTime { get; set; }
        public Nullable<System.DateTime> PayTime { get; set; }
        public Nullable<decimal> Refund_fee { get; set; }
        public Nullable<int> RefundMethod { get; set; }
        public Nullable<System.DateTime> RefundTime { get; set; }
    }
}
