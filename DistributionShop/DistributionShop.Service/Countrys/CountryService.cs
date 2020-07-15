using Dapper;
using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using System.Collections.Generic;

namespace DistributionShop.Service.Countrys
{
    public class CountryService : ICountryService
    {
        /// <summary>
        /// 查询所有国家
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<T_Country> GetAllList()
        {
            string sqlText = @"
SELECT *
FROM [DistributionShopDB].[dbo].[T_Country]  WITH(NOLOCK)
WHERE IsActive=1
";

            return DapperHelper.Query<T_Country>(sqlText);
        }
    }
}
