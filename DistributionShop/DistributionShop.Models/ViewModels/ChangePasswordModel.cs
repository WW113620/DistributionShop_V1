﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class ChangePasswordModel
    {
        public string oldPassword { get; set; }
        public string password { get; set; }
        public string repassword { get; set; }
    }

    public class AccountPwdModel : ChangePasswordModel
    {
        public string userName { get; set; }
    }
}
