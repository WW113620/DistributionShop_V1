using Dapper;
using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Attribute = DistributionShop.Models.Data.Attribute;

namespace DistributionShop.Service.Goods
{
    public class GoodService : IGoodsService
    {
        /// <summary>
        /// 分页获取列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public PageResult<ProductViewModel> GetList(ProductRequest request)
        {
            PageResult<ProductViewModel> result = new PageResult<ProductViewModel>();
            string sql = @" select distinct p.Id,p.productname, p.OriginalPrice,
                            p.WebPrice,p.IsNew,p.IsDiscount,p.Description,p.CoverFileName,
                            a.AttributeParentId,a.AttributeParentName 
                            from product p
                            left join productattribute a
                            on p.Id=a.ProductId
                            left join Category as d
                            on p.categoryId=d.Id
                            left join Category as e
                            on d.ParentCategoryId=e.Id
                            where  p.IsDeleted=0 
                            {0}";
            string sort = " p.Id desc";
            DynamicParameters param = new DynamicParameters();
            string sqlWhere = GetWhere(request, out param, out sort);
            sql = string.Format(sql, sqlWhere.ToString());
            result = DapperHelper.GetPageList<ProductViewModel>(sql, sort, request, param);
            return result;
        }
        /// <summary>
        /// 获取homepage的列表数据
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public PageResult<ProductViewModel> GetHomePageList(ProductRequest request)
        {
            PageResult<ProductViewModel> result = new PageResult<ProductViewModel>();
            string sql = @"  select distinct  p.Id,p.ProductName,
                             p.Description,p.CoverFileName,
							 p.OriginalPrice,p.WebPrice
							 from product p
							 left join category c
							 on p.categoryid=c.id
							 left join category d
							 on c.ParentCategoryId=d.Id
							 where p.IsDeleted=0 
							 and p.IsHomePage=@IsHomePage
							 and d.Id=@FiristCategoryId
							 and p.AuditStatus=@AuditStatus";
            string sort = " Id desc";
            DynamicParameters param = new DynamicParameters();
            param.Add("AuditStatus", request.AuditStatus);
            param.Add("FiristCategoryId", request.FiristCategoryId);
            param.Add("IsHomePage", request.IsHomePage);
            result = DapperHelper.GetPageList<ProductViewModel>(sql, sort, request, param);
            return result;
        }
        #region  根据筛选取 品牌  属性相关
        /// <summary>
        /// 获取所有的parentId的属性
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public List<ProductAttribute> GetParentAttributeList(ProductRequest request)
        {
            List<ProductAttribute> list = new List<ProductAttribute> { };
            string sql = @" select distinct a.AttributeParentId,a.AttributeParentName 
                            from product p
                            left join productattribute a
                            on p.Id=a.ProductId
                            left join Category as d
                            on p.categoryId=d.Id
                            left join Category as e
                            on d.ParentCategoryId=e.Id
                            where p.IsDeleted=0 
                            {0}";
            DynamicParameters param = new DynamicParameters();
            string sqlWhere = GetAttributeWhere(request, out param);
            sql = string.Format(sql, sqlWhere.ToString());
            list = DapperHelper.Query<ProductAttribute>(sql, param).ToList();
            return list;

        }
        /// <summary>
        /// 根据筛选取所有的品牌
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public List<Brand> GetBrandList(ProductRequest request)
        {
            List<Brand> list = new List<Brand> { };
            string sql = @" select distinct p.BrandId Id,b.Name  
                            from product p
                            left join productattribute a
                            on p.Id=a.ProductId
                            left join Brand b
                            on p.BrandId=b.Id
                            left join Category as d
                            on p.categoryId=d.Id
                            left join Category as e
                            on d.ParentCategoryId=e.Id
                            where  p.IsDeleted=0 
                            {0}";
            DynamicParameters param = new DynamicParameters();
            string sqlWhere = GetAttributeWhere(request, out param);
            sql = string.Format(sql, sqlWhere.ToString());
            list = DapperHelper.Query<Brand>(sql, param).ToList();
            return list;

        }
       

      
        #endregion

        /// <summary>
        /// 用于查询列表，列表下品牌   ，列表下的parentattribute   list
        /// </summary>
        /// <returns></returns>
        public string GetWhere(ProductRequest request, out DynamicParameters param, out string sort)
        {
            param = new DynamicParameters();
            sort = " id desc ";
            StringBuilder sqlWhere = new StringBuilder();

            if (!string.IsNullOrEmpty(request.ProductName))
            {
                string ProductName = $"%{request.ProductName.Trim()}%";
                sqlWhere.Append(" AND p.ProductName like @ProductName ");
                param.Add("ProductName", ProductName);
            }
            if (!string.IsNullOrEmpty(request.BrandIds))
            {
                sqlWhere.Append(" AND p.BrandId in @BrandIds ");
                string[] BrandIds = request.BrandIds.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
                param.Add("BrandIds", BrandIds);
            }

            if (!string.IsNullOrEmpty(request.FiristCategoryId))
            {
                sqlWhere.Append(" AND d.ParentCategoryId = @FiristCategoryId ");
                param.Add("FiristCategoryId", request.FiristCategoryId);
            }

            if (!string.IsNullOrEmpty(request.SecondCategoryId))
            {
                sqlWhere.Append(" AND p.CategoryId = @SecondCategoryId ");
                param.Add("SecondCategoryId", request.SecondCategoryId.ToLong(0));
            }

            if (!string.IsNullOrEmpty(request.IsNew))
            {
                sqlWhere.Append(" AND p.IsNew = @IsNew ");
                param.Add("IsNew", request.IsNew);
            }
            if (!string.IsNullOrEmpty(request.IsDiscount))
            {
                sqlWhere.Append(" AND p.IsDiscount = @IsDiscount ");
                param.Add("IsDiscount", request.IsDiscount);
            }
            if (!string.IsNullOrEmpty(request.OrderBy))
            {
                sort = request.OrderBy + " " + request.OrderByType;
            }

            if (!string.IsNullOrEmpty(request.AttributeParentIds))
            {
                sqlWhere.Append(" AND a.AttributeParentId in @AttributeParentIds ");
                string[] AttributeParentIds = request.AttributeParentIds.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
                param.Add("AttributeParentIds", AttributeParentIds);
            }
            if (!string.IsNullOrEmpty(request.AttributeIds))
            {
                sqlWhere.Append(" AND a.AttributeId in @AttributeIds ");
                string[] AttributeIds = request.AttributeIds.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
                param.Add("AttributeIds", AttributeIds);
            }
            if (!string.IsNullOrEmpty(request.AuditStatus))
            {
                sqlWhere.Append(" AND p.AuditStatus = @AuditStatus ");
                param.Add("AuditStatus", request.AuditStatus);
            }

            return sqlWhere.ToString();

        }

        /// <summary>
        /// 用于筛选项出数据
        /// </summary>
        /// <param name="request"></param>
        /// <param name="param"></param>
        /// <returns></returns>
        public string GetAttributeWhere(ProductRequest request, out DynamicParameters param)
        {
            param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (!string.IsNullOrEmpty(request.ProductName))
            {
                string ProductName = $"%{request.ProductName.Trim()}%";
                sqlWhere.Append(" AND p.ProductName like @ProductName ");
                param.Add("ProductName", ProductName);
            }

            if (!string.IsNullOrEmpty(request.FiristCategoryId))
            {
                sqlWhere.Append(" AND d.ParentCategoryId = @FiristCategoryId ");
                param.Add("FiristCategoryId", request.FiristCategoryId);
            }

            if (!string.IsNullOrEmpty(request.SecondCategoryId))
            {
                sqlWhere.Append(" AND p.CategoryId = @SecondCategoryId ");
                param.Add("SecondCategoryId", request.SecondCategoryId.ToLong(0));
            }
            if (!string.IsNullOrEmpty(request.AuditStatus))
            {
                sqlWhere.Append(" AND p.AuditStatus = @AuditStatus ");
                param.Add("AuditStatus", request.AuditStatus);
            }

            return sqlWhere.ToString();

        }
        /// <summary>
        /// 根据产品id获取一级二级分类
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        public ProductViewModel GetFirstAndSecondCateByProId(long productId)
        {
            ProductViewModel model = new ProductViewModel(); 
            string sql = @" select c1.Name as CategoryName,c2.Name as FirstCategoryName 
                            from product  p 
                            left join Category c1
                            on p.CategoryId=c1.Id
                            left join Category c2
                            on c1.ParentCategoryId=c2.Id
                            where p.id=@id
                            and p.IsDeleted=0";
            model = DapperHelper.Query<ProductViewModel>(sql, new { id = productId }).FirstOrDefault();
            return model;
        }

         


    }
}
