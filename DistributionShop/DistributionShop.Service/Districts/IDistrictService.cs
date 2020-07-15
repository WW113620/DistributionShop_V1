using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Districts
{
    public interface IDistrictService:IDependency
    {
        /// <summary>
        /// 查询区街道
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        List<T_District> GetList(int cityId = 0);
    }
}
