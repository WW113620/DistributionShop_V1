using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Models.ViewModels.dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Accounts
{
    public interface IAccountService : IDependency
    {
        int GetSendMessageCount(string phone, SysMessageEnums type, DateTime start, DateTime end);
        PageResult<AccountViewModel> GetAdminList(AccountRequest request, string loginName, RoleEnums loginType);
        PageResult<AccountViewModel> GetUserList(AccountRequest request, string loginName, RoleEnums loginType);
        AccountViewModel Get(long Id);
        /// <summary>
        /// 根据用户名查询一条
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        Account GetOneByUserName(string userName);

        /// <summary>
        /// 更新对象一部分数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int Update(UserAddUserMsgDto entity);

        /// <summary>
        /// 根据手机号码和类型查询数据
        /// </summary>
        /// <param name="phoneTypeEnums"></param>
        /// <param name="phone"></param>
        /// <returns></returns>
        Account GetByPhone(PhoneTypeEnums phoneTypeEnums, string phone);
    }
}
