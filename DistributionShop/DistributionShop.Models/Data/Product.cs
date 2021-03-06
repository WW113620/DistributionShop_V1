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
    
    public partial class Product
    {
        public long Id { get; set; }
        public Nullable<long> ShopId { get; set; }
        public Nullable<long> BrandId { get; set; }
        public Nullable<long> CategoryId { get; set; }
        public string CategoryPath { get; set; }
        public Nullable<int> ProductType { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public string Description { get; set; }
        public string CoverFileName { get; set; }
        public Nullable<decimal> OriginalPrice { get; set; }
        public Nullable<decimal> WebPrice { get; set; }
        public Nullable<int> IsDiscount { get; set; }
        public Nullable<int> IsTop { get; set; }
        public Nullable<int> IsNew { get; set; }
        public Nullable<int> IsHomePage { get; set; }
        public Nullable<int> AuditStatus { get; set; }
        public Nullable<long> DisplaySequence { get; set; }
        public Nullable<int> PostType { get; set; }
        public Nullable<int> IsDeleted { get; set; }
        public Nullable<long> Quantity { get; set; }
        public Nullable<long> VisitCounts { get; set; }
        public string Measure { get; set; }
        public string MeasureUnit { get; set; }
        public Nullable<int> SendType { get; set; }
        public Nullable<System.DateTime> AddTime { get; set; }
        public Nullable<System.DateTime> LastUpdateTime { get; set; }
    }
}
