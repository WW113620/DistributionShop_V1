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
    
    public partial class ProductMedia
    {
        public long Id { get; set; }
        public Nullable<long> ProductId { get; set; }
        public int MediaType { get; set; }
        public string NewFileName { get; set; }
        public string OriginalFileName { get; set; }
        public Nullable<long> MediaSize { get; set; }
        public int MediaSort { get; set; }
        public string MediaCloudId { get; set; }
        public Nullable<System.DateTime> AddTime { get; set; }
    }
}
