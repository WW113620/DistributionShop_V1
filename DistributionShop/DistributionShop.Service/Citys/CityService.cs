using Dapper;
using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Citys
{
    public class CityService: ICityService
    {
        /// <summary>
        /// 查询城市
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<T_City> GetList(int proID = 0)
        {
            string sqlText = @" SELECT * FROM [DistributionShopDB].[dbo].[T_City] WITH(NOLOCK)";
            var param = new DynamicParameters();
            if (proID > 0)
            {
                sqlText = string.Concat(sqlText, " WHERE ProID=@ProID");
                param.Add("ProID", proID);
            }
            return DapperHelper.Query<T_City>(sqlText, param);
        }
    }
}
