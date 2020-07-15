using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service
{
    public class CategoryService : ICategoryService
    {
        public List<Category> GetListByParentId(long parentId)
        {
            string sql = @"select id,Name from category where parentcategoryid=@parentId and isdeleted=0 ";
            List<Category> result = DapperHelper.Query<Category>(sql, new { parentId = parentId });
            return result;
        }

        public List<CategoryModel> GetCategorysById(long Id)
        {
            string sql = @"  SELECT Id,Name,ParentCategoryId,Depth FROM [dbo].[Category] WHERE ParentCategoryId=@ParentCategoryId   ";
            List<CategoryModel> result = DapperHelper.Query<CategoryModel>(sql, new { ParentCategoryId = Id });
            return result;
        }

    }
}
