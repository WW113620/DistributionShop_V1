using Dapper;
using DistributionShop.Models.Dapper;
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
    public class AccountService : IAccountService
    {
        public int GetSendMessageCount(string phone, SysMessageEnums type, DateTime start, DateTime end)
        {
            string sql = @" SELECT COUNT(0) AS iCount FROM [SMSMessageLog] WHERE SendTo=@phone AND [SendType]=@type AND [SendTime] BETWEEN @start AND @end ";
            int count = DapperHelper.Get<int>(sql, new { phone = phone, type = (int)type, start = start, end = end });
            return count;
        }

        public AccountViewModel Get(long Id)
        {
            string sql = @" SELECT * FROM [dbo].[Account] WHERE Id=@Id ";
            return DapperHelper.Get<AccountViewModel>(sql, new { Id = Id });
        }

        public PageResult<AccountViewModel> GetAdminList(AccountRequest request, string loginName, RoleEnums loginType)
        {
            string sql = @" SELECT * FROM [dbo].[Account] WHERE [RoleType] IN (1,2) {0} ";
            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (loginType == RoleEnums.超级管理员)
            {
            }
            else if (loginType == RoleEnums.管理员)
            {
                sqlWhere.Append(" AND [RoleType]=2 AND UserName=@loginName ");
                param.Add("loginName", loginName);
            }
            else
            {
                sqlWhere.Append(" AND UserName=@loginName ");
                param.Add("loginName", loginName);
            }

            return GetList(request, sql, sqlWhere, param);
        }

        public PageResult<AccountViewModel> GetUserList(AccountRequest request, string loginName, RoleEnums loginType)
        {
            string sql = @" SELECT * FROM [dbo].[Account] WHERE [RoleType] IN (3,4) {0} ";
            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();

            if (loginType == RoleEnums.代理用户 || loginType == RoleEnums.普通用户)
            {
                sqlWhere.Append(" AND UserName=@loginName ");
                param.Add("loginName", loginName);
            }

            return GetList(request, sql, sqlWhere, param);
        }

        private PageResult<AccountViewModel> GetList(AccountRequest request, string sql, StringBuilder sqlWhere, DynamicParameters param)
        {
            PageResult<AccountViewModel> result = new PageResult<AccountViewModel>();

            if (!string.IsNullOrEmpty(request.UserName))
            {
                string UserName = $"%{request.UserName.Trim()}%";
                sqlWhere.Append(" AND UserName like @UserName ");
                param.Add("UserName", UserName.Trim());
            }
            if (!string.IsNullOrEmpty(request.NickName))
            {
                string NickName = $"%{request.NickName.Trim()}%";
                sqlWhere.Append(" AND NickName like @NickName ");
                param.Add("NickName", NickName.Trim());
            }

            if (!string.IsNullOrEmpty(request.RealName))
            {
                string RealName = $"%{request.RealName.Trim()}%";
                sqlWhere.Append(" AND RealName like @RealName ");
                param.Add("RealName", RealName.Trim());
            }

            if (!string.IsNullOrEmpty(request.CountryName))
            {
                string CountryName = $"%{request.CountryName.Trim()}%";
                sqlWhere.Append(" AND CountryName like @CountryName ");
                param.Add("CountryName", CountryName.Trim());
            }

            if (!string.IsNullOrEmpty(request.Weixin))
            {
                string Weixin = $"%{request.Weixin.Trim()}%";
                sqlWhere.Append(" AND Weixin like @Weixin ");
                param.Add("Weixin", Weixin.Trim());
            }

            if (!string.IsNullOrEmpty(request.Phone))
            {
                string Phone = $"%{request.Phone.Trim()}%";
                sqlWhere.Append(" AND Phone like @Phone ");
                param.Add("Phone", Phone.Trim());
            }

            if (!string.IsNullOrEmpty(request.Email))
            {
                string Email = $"%{request.Email.Trim()}%";
                sqlWhere.Append(" AND Email like @Email ");
                param.Add("Email", Email.Trim());
            }

            if (!string.IsNullOrEmpty(request.RoleType))
            {
                int RoleType = request.RoleType.ToInt(0);
                sqlWhere.Append(" AND RoleType = @RoleType ");
                param.Add("RoleType", RoleType);
            }

            if (!string.IsNullOrEmpty(request.State))
            {
                sqlWhere.Append(" AND State = @State ");
                param.Add("State", request.State.ToInt(0));
            }

            string sort = " [Id] DESC ";
            sql = string.Format(sql, sqlWhere.ToString());
            result = DapperHelper.GetPageList<AccountViewModel>(sql, sort, request, param);
            return result;
        }

        /// <summary>
        /// 根据用户名查询一条
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public Account GetOneByUserName(string userName)
        {
            var sqlText = @"
                            SELECT *
                            FROM [dbo].[Account]
                            WHERE UserName=@UserName ";
            return DapperHelper.Get<Account>(sqlText, new
            {
                UserName = userName
            });
        }

        /// <summary>
        /// 更新对象一部分数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public int Update(UserAddUserMsgDto entity)
        {
            var sqlText = @"
                    UPDATE [dbo].[Account]
                       SET [RealName] = @RealName
                          ,NickName=@NickName
                          ,[PrePhoneType] = @PrePhoneType
                          ,[Phone] = @Phone
                          ,[Email] = @Email
                          ,[CountryId] = @CountryId
                          ,[CountryName] = @CountryName
                          ,[AvatarUrl] = @AvatarUrl
                     WHERE [UserName] = @UserName
";
            return DapperHelper.Execute(sqlText, entity);
        }

        /// <summary>
        /// 根据手机号码和类型查询数据
        /// </summary>
        /// <param name="phoneTypeEnums"></param>
        /// <param name="phone"></param>
        /// <returns></returns>
        public Account GetByPhone(PhoneTypeEnums phoneTypeEnums, string phone)
        {
            string sqlString = @"
SELECT 
	*
FROM [dbo].[Account]
WHERE [Phone]=@Phone 
AND [PrePhoneType]=@PhoneTypeEnums
";

            return DapperHelper.Get<Account>(sqlString, new
            {
                Phone = phone,
                PhoneTypeEnums = (int)phoneTypeEnums
            });
        }
    }
}
