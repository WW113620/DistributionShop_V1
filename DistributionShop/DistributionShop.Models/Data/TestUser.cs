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
    
    public partial class TestUser
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string NickName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string AvatarUrl { get; set; }
        public Nullable<int> RoleID { get; set; }
        public Nullable<int> State { get; set; }
        public Nullable<System.DateTime> AddTime { get; set; }
    }
}
