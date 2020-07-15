using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Countrys
{
    public interface ICountryService : IDependency
    {
        /// <summary>
        /// 查询所有国家
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        List<T_Country> GetAllList();
    }
}
