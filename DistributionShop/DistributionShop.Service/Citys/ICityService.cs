using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Citys
{
    public interface ICityService:IDependency
    {
        /// <summary>
        /// 查询城市
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        List<T_City> GetList(int proId=0);
    }
}
