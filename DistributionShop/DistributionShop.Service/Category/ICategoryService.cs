using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service
{
   public interface ICategoryService:IDependency
    {
        List<Category> GetListByParentId(long parentId);

        List<CategoryModel> GetCategorysById(long Id);
    }
}
