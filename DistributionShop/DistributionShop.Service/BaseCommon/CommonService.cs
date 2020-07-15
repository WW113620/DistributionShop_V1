using DistributionShop.Models.Dapper;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels.Charts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.BaseCommon
{
    public class CommonService : ICommonService
    {
        public List<ChartModels> GetUserLineData()
        {
            string sql = @" SELECT CONVERT(varchar(100), [AddTime], 23) AS ShowDate,
                            SUM(CASE WHEN RoleType IN (4) THEN 1 ELSE 0 END) as UserCount,
                            SUM(CASE WHEN RoleType IN (3) THEN 1 ELSE 0 END) as AgentCount
                            FROM [dbo].[Account]
                            WHERE [AddTime] BETWEEN  DATEADD(month,-1, CONVERT(varchar(100), GETDATE(), 23)) AND GETDATE()
                            GROUP BY CONVERT(varchar(100), [AddTime], 23)  ";
            return DapperHelper.Query<ChartModels>(sql).ToList();
        }


        public List<KeyValue> GetProductPieData(AuditStatusEnums auditStatus)
        {
            string sql = @" SELECT t.FirstCategoryName as name,COUNT(0) as [value] FROM (
                            SELECT a.*,d.Name as CategoryName,e.Id as FirstCategoryId,e.Name as FirstCategoryName 
                            FROM [Product] AS a
                            LEFT JOIN [dbo].[Category] AS d ON a.CategoryId=d.Id
                            LEFT JOIN [dbo].[Category] AS e ON d.ParentCategoryId=e.Id  
                            WHERE a.IsDeleted=0 AND a.AuditStatus=@auditStatus ) AS t
                            GROUP BY t.FirstCategoryName  ";
            return DapperHelper.Query<KeyValue>(sql, new { auditStatus = (int)auditStatus }).ToList();
        }


        public List<OrderChartModels> GetOrderLineData()
        {
            string sql = @" SELECT CONVERT(varchar(100), [AddTime], 23) AS ShowDate,
                            SUM(CASE WHEN PayState IN (0) THEN 1 ELSE 0 END) as NoPayCount,
                            SUM(CASE WHEN PayState IN (1,2,3,4) THEN 1 ELSE 0 END) as PayedCount,
                            SUM(CASE WHEN PayState IN (6) THEN 1 ELSE 0 END) as CancelCount,
                            SUM(CASE WHEN PayState IN (5) THEN 1 ELSE 0 END) as RefundCount
                            FROM [dbo].[Order]
                            WHERE IsDel=0 AND [AddTime] BETWEEN  DATEADD(month,-1, CONVERT(varchar(100), GETDATE(), 23)) AND GETDATE()
                            GROUP BY CONVERT(varchar(100), [AddTime], 23)  ";
            return DapperHelper.Query<OrderChartModels>(sql).ToList();
        }




    }
}
