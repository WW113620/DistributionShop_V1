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
    
    public partial class OrderReFund
    {
        public long Id { get; set; }
        public string OrderSn { get; set; }
        public string ProductIds { get; set; }
        public Nullable<int> ReFundType { get; set; }
        public Nullable<int> ReFundMethod { get; set; }
        public Nullable<int> ReFundReason { get; set; }
        public string ReUserName { get; set; }
        public Nullable<decimal> ReApplyFee { get; set; }
        public string Description { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<int> IsDel { get; set; }
        public Nullable<System.DateTime> UpdateTime { get; set; }
        public string Result_code { get; set; }
        public string Refund_id { get; set; }
        public string Partner_refund_id { get; set; }
        public Nullable<decimal> Refund_fee { get; set; }
        public string Currency { get; set; }
        public string OperateName { get; set; }
        public string AuditContent { get; set; }
        public Nullable<System.DateTime> RefundTime { get; set; }
        public Nullable<System.DateTime> AddTime { get; set; }
    }
}