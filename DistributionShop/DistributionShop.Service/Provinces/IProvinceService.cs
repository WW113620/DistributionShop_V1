using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Provinces
{
    public interface IProvinceService:IDependency
    {
        /// <summary>
        /// 查询省
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        List<T_Province> GetList();
    }
}
