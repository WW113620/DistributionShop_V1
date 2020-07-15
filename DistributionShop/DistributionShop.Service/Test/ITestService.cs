using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Test
{

    public interface ITestService : IDependency
    {
        string GetName();
        List<TestUser> GetUser();
        List<UserViewModel> GetUserList();
        PageResult<TestUser> GetUserList(UserRequest request);
    }
}
