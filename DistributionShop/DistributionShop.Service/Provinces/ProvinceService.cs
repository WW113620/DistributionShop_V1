using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Provinces
{
    public class ProvinceService: IProvinceService
    {
        /// <summary>
        /// 查询省
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<T_Province> GetList()
        {
            string sqlText = @" SELECT * FROM [DistributionShopDB].[dbo].[T_Province] WITH(NOLOCK)";

            return DapperHelper.Query<T_Province>(sqlText);
        }
    }
}
