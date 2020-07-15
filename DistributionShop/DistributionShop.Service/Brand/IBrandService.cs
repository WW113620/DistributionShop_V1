using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service
{
   public interface IBrandService:IDependency
    {
        List<Brand> GetList();
        /// <summary>
        /// 分页获取列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        PageResult<BrandViewModel> GetList(BrandRequest request);
    }
}
