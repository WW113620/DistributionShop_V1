using Dapper;
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
    public class BrandService : IBrandService
    {
        public List<Brand> GetList()
        {
            string sql = @"select  * from Brand where IsDeleted=0";
           List<Brand> list= DapperHelper.Query<Brand>(sql).ToList();
            return list;

        }

        /// <summary>
        /// 分页获取列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public PageResult<BrandViewModel> GetList(BrandRequest request)
        {
            PageResult<BrandViewModel> result = new PageResult<BrandViewModel>();
            string sql = @" select Id,Name,Description,AddTime from brand ";
            string sort = " [Id] DESC ";

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (!string.IsNullOrEmpty(request.Name))
            {
                string Name = $"%{request.Name.Trim()}%";
                sqlWhere.Append(" AND Name like @Name ");
                param.Add("Name", Name);
            }
            sql = string.Format(sql, sqlWhere.ToString());
            result = DapperHelper.GetPageList<BrandViewModel>(sql, sort, request, param);
            return result;
        }


    }
}
