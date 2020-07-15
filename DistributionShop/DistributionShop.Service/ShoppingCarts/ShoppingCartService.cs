using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service
{
    public class ShoppingCartService: IShoppingCartService
    {
        /// <summary>
        /// 插入一条数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public int InsertOne(ShoppingCart entity)
        {
            string sqlText = @"
INSERT INTO [dbo].[ShoppingCart]
           ([UserId]
           ,[GoodsId]
           ,[GoodNum]
           ,[AddTime]
           ,[UpdateTime]
           ,[IsActive])
     VALUES
           (@UserId
           ,@GoodsId
           ,@GoodNum
           ,GETDATE()
           ,GETDATE()
           ,1)
";
            return DapperHelper.Execute(sqlText, entity);
        }

        /// <summary>
        /// 更新购物车数量
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public int UpdateGoodNumById(ShoppingCart entity)
        {
            string sqlText = @"
UPDATE [dbo].[ShoppingCart]
SET [GoodsId] = @GoodsId
      ,[GoodNum] = @GoodNum
      ,[UpdateTime] = GETDATE()
 WHERE Id=@Id  AND [IsActive]=1
";
            return DapperHelper.Execute(sqlText, new 
            {
                Id=entity.Id,
                GoodsId =entity.GoodsId,
                GoodNum = entity.GoodNum,
            });
        }

        /// <summary>
        /// 逻辑删除一条
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public int DelOne(long Id)
        {
            string sqlText = @"
UPDATE [dbo].[ShoppingCart]
   SET [IsActive] = 0
      ,[UpdateTime] = GETDATE()
 WHERE Id=@Id
";
            return DapperHelper.Execute(sqlText, new
            {
                Id = Id
            });
        }
    }
}
