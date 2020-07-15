using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.ConfigInfos
{
    public class ConfigInfosService: IConfigInfosService
    {
        /// <summary>
        /// 根据key获取对应的值value
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public string GetValueByKey(string key)
        {
            string sqlText = @"
SELECT [Value] 
FROM ConfigInfos WITH(NOLOCK) 
WHERE [Key]=@Key AND IsActive=1";
            return DapperHelper.Get<string>(sqlText, new
            {
                Key = key
            });
        }

        /// <summary>
        /// 插入一条数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public int InsertOne(ConfigInfo entity)
        {
            string sqlText = @"
INSERT INTO [dbo].[ConfigInfos]
           ([Key]
           ,[Value]
           ,[Describtion]
           ,[IsActive])
     VALUES
           (@Key
           ,@Value
           ,@Describtion
           ,1)
";
            return DapperHelper.Execute(sqlText, entity);
        }

        /// <summary>
        /// 根据key更新value
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public int UpdateOneValueByKey(string key, string value)
        {
            string sqlText = @"
UPDATE [dbo].[ConfigInfos]
SET [Value]=@Value
WHERE IsActive=1 
AND [Key]=@Key
";
            return DapperHelper.Execute(sqlText, new
            {
                Value = value,
                Key = key
            });
        }
    }
}
