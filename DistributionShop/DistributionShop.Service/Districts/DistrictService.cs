using Dapper;
using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using DistributionShop.Service.Districts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service
{
    public class DistrictService : IDistrictService
    {
        /// <summary>
        /// 查询区街道
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<T_District> GetList(int cityId=0)
        {
            string sqlText = @" SELECT * FROM [DistributionShopDB].[dbo].[T_District] WITH(NOLOCK)";
            var param = new DynamicParameters();
            if (cityId > 0)
            {
                sqlText = string.Concat(sqlText, " WHERE CityID=@CityID");
                param.Add("CityID", cityId);
            }
            return DapperHelper.Query<T_District>(sqlText, param);
        }
    }
}
