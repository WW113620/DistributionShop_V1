using Dapper;
using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace DistributionShop.Service.Address
{
    public class AddressService : IAddressService
    {
        /// <summary>
        /// 查询用户的地址
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<T_Address> GetListByUserName(string userName, string phone = null, string realName = null)
        {
            string sqlText = @"
SELECT *
FROM [T_Address] WITH(NOLOCK)
WHERE IsActive=1 
AND UserName=@UserName 
{0}
ORDER BY IsDefault DESC,AddTime DESC
";
            string whereString = string.Empty;
            var parms = new DynamicParameters();
            parms.Add("UserName", userName);
            if (!string.IsNullOrWhiteSpace(phone))
            {
                whereString += " AND TelPhone LIKE @TelPhone ";
                parms.Add("TelPhone", string.Concat("%" + phone + "%"));
            }
            if (!string.IsNullOrWhiteSpace(realName))
            {
                whereString += " AND RealName LIKE @RealName ";
                parms.Add("RealName", string.Concat("%" + realName + "%"));
            }

            sqlText = string.Format(sqlText, whereString);
            return DapperHelper.Query<T_Address>(sqlText, parms);
        }

        /// <summary>
        /// 查询一条默认数据
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public T_Address GetDefaultOneByUserName(string userName)
        {
            string sqlText = @"
SELECT TOP 1 *
FROM T_Address WITH(NOLOCK) 
WHERE IsActive=1
AND [UserName]=@UserName 
ORDER BY IsDefault DESC,Id DESC";

            return DapperHelper.Get<T_Address>(sqlText, new
            {
                UserName = userName
            });
        }

        /// <summary>
        /// 查询一条数据
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public T_Address GetOneById(long id)
        {
            string sqlText = @"
SELECT TOP 1 *
FROM T_Address WITH(NOLOCK) 
WHERE [Id]=@Id 
AND IsActive=1";
            //string whereString = string.Empty;
            //var parms = new DynamicParameters();
            return DapperHelper.Get<T_Address>(sqlText, new {
                Id=@id
            });
        }

        /// <summary>
        /// 插入一条数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public int InsertOne(T_Address entity)
        {
            string sqlText = @"
{0}

INSERT INTO [dbo].[T_Address]
           ([UserId]
           ,[UserName]
           ,[ProvinceId]
           ,[ProvinceName]
           ,[CityId]
           ,[CityName]
            ,[DistrictId]
            ,[DistrictName]
           ,[CountryId]
           ,[CountryName]
           ,[PrePhoneType]
           ,[TelPhone]
           ,[Address]
           ,[Contact]
           ,[IsDefault]
           ,[Notes]
           ,[PostCode]
           ,[IdentityCard]
           ,[IDPhotoNegative]
           ,[IDPhotoPositive]
           ,[RealName]
           ,[AddTime]
           ,[IsActive])
     VALUES
           (@UserId
           ,@UserName
           ,@ProvinceId
           ,@ProvinceName
           ,@CityId
           ,@CityName
            ,@DistrictId
            ,@DistrictName
           ,@CountryId
           ,@CountryName
           ,@PrePhoneType
           ,@TelPhone
           ,@Address
           ,@Contact
           ,@IsDefault
           ,@Notes
           ,@PostCode
           ,@IdentityCard
           ,@IDPhotoNegative
           ,@IDPhotoPositive
           ,@RealName
           ,GETDATE()
           ,1)

 SELECT SCOPE_IDENTITY();
";
            string wherText = string.Empty;
            if (entity.IsDefault??false)
            {
                wherText += @"
UPDATE [dbo].[T_Address]
   SET [IsDefault] = 0
 WHERE [IsActive] = 1 AND UserId=@UserId AND IsDefault=1
";
            }

            sqlText = string.Format(sqlText, wherText);
            return DapperHelper.ExecuteScalar<int>(sqlText, entity);
        }

        /// <summary>
        /// 逻辑删除一条
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public int DelOne(long Id)
        {
            string sqlText = @"
UPDATE [dbo].[T_Address]
   SET [IsActive] = 0
 WHERE Id=@Id
";
            return DapperHelper.Execute(sqlText, new
            {
                Id = Id
            });
        }

        /// <summary>
        /// 设置默认地址
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public bool SetOneDefault(long id, string userName)
        {
            using (IDbConnection conn = DapperHelper.GetConnection(""))
            {
                conn.Open();
                var transaction = conn.BeginTransaction();
                try
                {
                    #region 取消已经有的默认地址
                    string sqlText1 = @"
UPDATE [dbo].[T_Address]
   SET [IsDefault] = 0
 WHERE [IsActive] = 1 
AND UserName=@UserName 
AND IsDefault=1";
                    int result1 = DapperHelper.Execute(sqlText1, new { UserName = userName }, transaction);
                    #endregion

                    #region 设置新的默认地址
                    string sqlText2 = @"
UPDATE [dbo].[T_Address]
   SET [IsDefault] = 1
 WHERE [IsActive] = 1 
AND Id=@Id
";
                    int result2 = DapperHelper.Execute(sqlText2, new { Id = id }, transaction);
                    if (result2 <= 0)
                    {
                        transaction.Rollback();
                        return false;
                    }
                    #endregion

                    transaction.Commit();
                    return true;
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    throw ex;
                }
        }

    }

        /// <summary>
        /// 修改地址
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public int UpdateAddress(T_Address entity)
        {
            string sqlText = @"
{0}
UPDATE [dbo].[T_Address]
   SET [RealName] = @RealName
      ,[PrePhoneType] =@PrePhoneType
      ,[TelPhone] = @TelPhone
      ,[CountryId] = @CountryId
      ,[CountryName] = @CountryName
      ,[ProvinceId] = @ProvinceId
      ,[ProvinceName] = @ProvinceName
      ,[CityId] = @CityId
      ,[CityName] = @CityName
      ,[DistrictId] = @DistrictId
      ,[DistrictName] = @DistrictName
      ,[Address] = @Address
      ,[PostCode] =@PostCode
      ,[IdentityCard] = @IdentityCard
      ,[IDPhotoNegative] = @IDPhotoNegative
      ,[IDPhotoPositive] = @IDPhotoPositive
      ,[IsDefault] = @IsDefault
 WHERE [Id] = @Id AND [UserId] = @UserId
";
            string updateString = string.Empty;
            if (entity.IsDefault??false)
            {
                updateString = "UPDATE [dbo].[T_Address] SET [IsDefault] = 0 WHERE [UserId] = @UserId";
            }
            sqlText = string.Format(sqlText, updateString);
            return DapperHelper.Execute(sqlText, entity);
        }

        /// <summary>
        /// 分页获取地址列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public PageResult<AddressViewModel> GetList(AddressRequest request)
        {
            var result = new PageResult<AddressViewModel>();
            string sql = @" SELECT * FROM [dbo].[T_Address] WITH(NOLOCK) WHERE IsActive=1 {0} ";
            string sort = " [Id] DESC ";

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (!string.IsNullOrEmpty(request.UserName))
            {
                sqlWhere.Append(" AND UserName = @UserName ");
                param.Add("UserName", request.UserName.Trim());
            }

            sql = string.Format(sql, sqlWhere);
            result = DapperHelper.GetPageList<AddressViewModel>(sql, sort, request, param);
            return result;
        }
    }
}
