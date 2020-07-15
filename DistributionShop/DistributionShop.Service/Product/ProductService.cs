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

namespace DistributionShop.Service
{
    public class ProductService : IProductService
    {
        public ProductViewModel Get(long Id)
        {
            string sql = @" SELECT a.*,b.Name as BrandName,c.ShopName,d.Name as CategoryName,e.Id as FirstCategoryId,e.Name as FirstCategoryName 
                            FROM [Product] AS a
                            LEFT JOIN [dbo].[Brand] AS b ON a.BrandId=b.Id
                            LEFT JOIN [dbo].[Shop] AS c ON a.ShopId=c.Id
                            LEFT JOIN [dbo].[Category] AS d ON a.CategoryId=d.Id
                            LEFT JOIN [dbo].[Category] AS e ON d.ParentCategoryId=e.Id  WHERE a.IsDeleted=0 AND a.[Id]=@Id ";

            var result = DapperHelper.Get<ProductViewModel>(sql, new { Id = Id });
            return result;
        }
        /// <summary>
        /// 分页获取列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public PageResult<ProductViewModel> GetList(ProductRequest request)
        {
            PageResult<ProductViewModel> result = new PageResult<ProductViewModel>();
            string sql = @" SELECT a.*,b.Name as BrandName,c.ShopName,d.Name as CategoryName,e.Id as FirstCategoryId,e.Name as FirstCategoryName 
                            FROM [Product] AS a
                            LEFT JOIN [dbo].[Brand] AS b ON a.BrandId=b.Id
                            LEFT JOIN [dbo].[Shop] AS c ON a.ShopId=c.Id
                            LEFT JOIN [dbo].[Category] AS d ON a.CategoryId=d.Id
                            LEFT JOIN [dbo].[Category] AS e ON d.ParentCategoryId=e.Id  WHERE a.IsDeleted=0 {0} ";
            string sort = " [Id] DESC ";

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (!string.IsNullOrEmpty(request.ProductName))
            {
                string ProductName = $"%{request.ProductName.Trim()}%";
                sqlWhere.Append(" AND a.ProductName like @ProductName ");
                param.Add("ProductName", ProductName);
            }
            if (!string.IsNullOrEmpty(request.ShopName))
            {
                string ShopName = $"%{request.ShopName.Trim()}%";
                sqlWhere.Append(" AND c.ShopName like @ShopName ");
                param.Add("ShopName", ShopName);
            }

            if (!string.IsNullOrEmpty(request.BrandName))
            {
                string BrandName = $"%{request.BrandName.Trim()}%";
                sqlWhere.Append(" AND b.Name like @BrandName ");
                param.Add("BrandName", BrandName);
            }

            if (!string.IsNullOrEmpty(request.AuditStatus))
            {
                sqlWhere.Append(" AND a.AuditStatus = @AuditStatus ");
                param.Add("AuditStatus", request.AuditStatus);
            }

            if (!string.IsNullOrEmpty(request.IsTop))
            {
                sqlWhere.Append(" AND a.IsTop = @IsTop ");
                param.Add("IsTop", request.IsTop);
            }

            if (!string.IsNullOrEmpty(request.IsNew))
            {
                sqlWhere.Append(" AND a.IsNew = @IsNew ");
                param.Add("IsNew", request.IsNew);
            }

            if (!string.IsNullOrEmpty(request.IsHomePage))
            {
                sqlWhere.Append(" AND a.IsHomePage = @IsHomePage ");
                param.Add("IsHomePage", request.IsHomePage);
            }

            if (!string.IsNullOrEmpty(request.FiristCategoryId))
            {
                sqlWhere.Append(" AND d.ParentCategoryId = @FiristCategoryId ");
                param.Add("FiristCategoryId", request.FiristCategoryId);
            }

            if (!string.IsNullOrEmpty(request.SecondCategoryId))
            {
                sqlWhere.Append(" AND a.CategoryId = @SecondCategoryId ");
                param.Add("SecondCategoryId", request.SecondCategoryId.ToLong(0));
            }

            sql = string.Format(sql, sqlWhere.ToString());
            result = DapperHelper.GetPageList<ProductViewModel>(sql, sort, request, param);
            return result;
        }

        public void UpdateMedia(string[] MediaCollections, long ProductId)
        {
            if (MediaCollections == null && MediaCollections.Length <= 0)
                return;

            string sql = @" UPDATE [ProductMedia] SET [ProductId]=@ProductId WHERE [NewFileName] IN @MediaCollections ";
            int i = DapperHelper.Execute(sql, new { MediaCollections = MediaCollections, ProductId = ProductId });

        }

        public long Add(Product model)
        {
            string sql = @"INSERT INTO [dbo].[Product]
                           ([ShopId]
                           ,[CategoryId]
                           ,[CategoryPath]
                           ,[ProductType]
                           ,[BrandId]
                           ,[ProductName]
                           ,[ProductCode]
                           ,[AuditStatus]
                           ,[AddedDate]
                            ,[UpdateTime]
                           ,[IsDeleted]
                           ,[IsDiscount]
                           ,[IsTop]
                           ,[Quantity])

                
                     VALUES
                           (@ShopId,@CategoryId,@CategoryPath,@ProductType,@BrandId,@ProductName,@ProductCode,@AuditStatus,getdate(),getdate(),0,@IsDiscount,@IsTop,@Quantity) SELECT @@IDENTITY";
            object ob = DapperHelper.ExecuteScalar(sql, new { ShopId = model.ShopId, ShopName = "", CategoryId = model.CategoryId, CategoryPath = model.CategoryPath, ProductType = model.ProductType, BrandId = model.BrandId, BrandName = "", ProductName = model.ProductName, ProductCode = model.ProductCode, AuditStatus = model.AuditStatus, IsDiscount = model.IsDiscount, IsTop = model.IsTop, Quantity = model.Quantity });
            long productId = Convert.ToInt64(ob);
            return productId;
        }
        public int Update(Product model)
        {
            string sql = @"UPDATE [dbo].[Product]
                           SET [ShopId]=@ShopId
                            ,[ShopName]=@ShopName
                           ,[CategoryId]=@CategoryId
                           ,[CategoryPath]=@CategoryPath
                           ,[ProductType]=@ProductType
                           ,[BrandId]=@BrandId
                           ,[BrandName]=@BrandName
                           ,[ProductName]=@ProductName
                           ,[ProductCode]=@ProductCode
                           ,[AuditStatus]=@AuditStatus
                           ,[IsDiscount]=@IsDiscount
                            ,IsTop=@IsTop
                            ,Quantity=@Quantity
		                   ,[UpdateTIme]=getdate()
                            where id=@id";
            return DapperHelper.Execute(sql, new { id = model.Id, ShopId = model.ShopId, ShopName = "", CategoryId = model.CategoryId, CategoryPath = model.CategoryPath, ProductType = model.ProductType, BrandId = model.BrandId, BrandName = "", ProductName = model.ProductName, ProductCode = model.ProductCode, AuditStatus = model.AuditStatus, IsDiscount = model.IsDiscount, IsTop = model.IsTop, Quantity = model.Quantity });
        }

        /// <summary>
        /// 根据主键id删除
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public int DelById(long Id)
        {
            string sql = @"update Product set IsDeleted=1 where id=@Id";
            int i = DapperHelper.Execute(sql, new { Id = Id });
            return i;
        }
        /// <summary>
        /// 批量删除
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public int BatDelById(List<long> ids)
        {
            string sql = @"update Product set IsDeleted=1 where id in @Id";
            int i = DapperHelper.Execute(sql, new { Id = ids.ToArray() });
            return i;
        }
        /// <summary>
        ///根据主键id更新 审批状态
        /// </summary>
        /// <param name="id"></param>
        /// <param name="auditStatus"></param>
        /// <returns></returns>
        public int UpdateStatusById(long id, int auditStatus)
        {
            string sql = @"update Product set AuditStatus=@auditStatus where id=@id";
            int i = DapperHelper.Execute(sql, new { id = id, auditStatus = auditStatus });
            return i;
        }

        /// <summary>
        /// 根据商品id获取最新一条审批记录
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        public ProductAudit GetAuditByProId(long productId)
        {
            string sql = @"select  top 1 * from ProductAudit where productId =@productId  order by AddTime desc";
            return DapperHelper.Query<ProductAudit>(sql, new { productId = productId }).FirstOrDefault();
        }
        /// <summary>
        /// 添加审批记录
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public int AddProductAudit(ProductAudit model)
        {
            string sql = @"INSERT INTO [dbo].[ProductAudit]
                           ([ProductId]
                           ,[AuditStatus]
                           ,[AddTime]
                           ,[Remark]
                           ,[OperatorId]
                           ,[OperatorName])
                            VALUES(@ProductId,@AuditStatus,getdate(),@Remark,@OperatorId,@OperatorName)";
            int i = DapperHelper.Execute(sql, new { ProductId = model.ProductId, AuditStatus = model.AuditStatus, Remark = model.Remark, OperatorId = model.OperatorId, OperatorName = model.OperatorName });
            return i;
        }

        #region 价格
        public int AddPrice(ProductPrice model)
        {
            string sql = @"INSERT INTO [dbo].[ProductPrice]
                           ([ProductId]
                           ,[OriginalPrice]
                           ,[WebPrice]
                           ,[Discount]
                           ,[DiscountBeginTime]
                           ,[DiscountEndTime]
                           ,[IsDel])
                     VALUES
                           (@ProductId
                           ,@OriginalPrice
                           ,@WebPrice
                           ,@Discount
                           ,@DiscountBeginTime
                           ,@DiscountEndTime
                           ,0)";
            return DapperHelper.Execute(sql, new { ProductId = model.ProductId, OriginalPrice = model.OriginalPrice, WebPrice = model.WebPrice, Discount = model.Discount, DiscountBeginTime = model.DiscountBeginTime, DiscountEndTime = model.DiscountEndTime });
        }
        public int UpdatePriceByProId(ProductPrice model)
        {
            string sql = @"Update [dbo].[ProductPrice]
                            set OriginalPrice=@OriginalPrice
                           ,WebPrice=@WebPrice
                           ,Discount=@Discount
                           ,DiscountBeginTime=@DiscountBeginTime
                           ,DiscountEndTime=@DiscountEndTime
                            where ProductId=@ProductId";
            return DapperHelper.Execute(sql, new { ProductId = model.ProductId, OriginalPrice = model.OriginalPrice, WebPrice = model.WebPrice, Discount = model.Discount, DiscountBeginTime = model.DiscountBeginTime, DiscountEndTime = model.DiscountEndTime });
        }
        #endregion

        #region 多媒体
        public int AddMedia(ProductMedia model)
        {
            string sql = @"INSERT INTO [dbo].[ProductMedia]
                           ([ProductId]
                           ,[MediaType]
                           ,[MediaPath]
                           ,[MediaCloudId]
                           ,[MediaSort]
                           ,[Description]
                           ,[IsDel])
                     VALUES
                           (@ProductId,
                           @MediaType,
                           @MediaPath, 
                           @MediaCloudId, 
                           @MediaSort,
                           @Description,
                          0)";
            return DapperHelper.Execute(sql, new { ProductId = model.ProductId, MediaType = model.MediaType, MediaPath = "", MediaCloudId = model.MediaCloudId, MediaSort = model.MediaSort, Description = "" });
        }
        /// <summary>
        ///根据产品id和多媒体类型删除
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        public int delMediaByProIdAndType(long productId, int mediatype)
        {
            string sql = @"update [dbo].[ProductMedia] set IsDel=1 where ProductId=@ProductId and mediatype=@mediatype";
            return DapperHelper.Execute(sql, new { ProductId = productId, mediatype = mediatype });
        }
        public List<ProductMedia> GetMediaListByProId(long productId, int mediatype)
        {
            string sql = @"select * from ProductMedia where ProductId=@ProductId and mediatype=@mediatype";
            return DapperHelper.Query<ProductMedia>(sql, new { ProductId = productId, mediatype = mediatype });
        }

        public ProductMedia GetMediaById(long id)
        {
            string sql = @"select * from ProductMedia where id=@id  and IsDel=0";
            return DapperHelper.Query<ProductMedia>(sql, new { id = id }).FirstOrDefault();
        }
        public int DelMediaById(long id)
        {
            string sql = @"update [dbo].[ProductMedia] set isdel=1 where id=@id";
            return DapperHelper.Execute(sql, new { id = id });
        }
        #endregion

        /// <summary>
        /// 查询一条添加购物车里
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ProductExtend GetProductMsgById(long id)
        {
            var sqlText = @"
  SELECT 
	 *
  FROM [dbo].[Product] P WITH(NOLOCK)
  WHERE P.IsDeleted=0 AND P.Id=@Id
";
            return DapperHelper.Get<ProductExtend>(sqlText, new { Id = id });

        }

        /// <summary>
        /// 根据id列表查询数据
        /// </summary>
        /// <param name="productIdList"></param>
        /// <returns></returns>
        public List<Product> GetListByIdList(List<long> productIdList)
        {
            if (productIdList == null && productIdList.Count <= 0)
            {
                return new List<Product>();
            }
            string sqlText = @"
SELECT *
FROM [dbo].[Product]  WITH(NOLOCK)
WHERE IsDeleted=0 
AND Id IN @Ids
";
            return DapperHelper.Query<Product>(sqlText, new { Ids = productIdList });
        }

        //        /// <summary>
        //        /// 查询列表添加购物车里
        //        /// </summary>
        //        /// <param name="id"></param>
        //        /// <returns></returns>
        //        public List<ProductExtend> GetProductsMsgByIdList(List<long> ids)
        //        {
        //            if (ids==null|| ids.Count<=0)
        //            {
        //                return new List<ProductExtend>();
        //            }
        //            var sqlText = @"
        //  SELECT 
        //	  P.ProductName,
        //	  P.PostType,
        //	  PP.OriginalPrice,
        //	  PP.WebPrice
        //  FROM [dbo].[Product] P WITH(NOLOCK)
        //  LEFT JOIN [dbo].[ProductPrice] PP WITH(NOLOCK) ON P.Id=PP.ProductId AND PP.IsDel=0
        //  WHERE P.Id IN @Ids
        //";

        //            return DapperHelper.Query<ProductExtend>(sqlText, new { Ids = ids });
        //        }
        /// <summary>
        /// 根据父级id获取list
        /// </summary>
        /// <param name="parentId"></param>
        /// <returns></returns>
        public List<AttributeModel> GetAttributeByParentId(long parentId)
        {
            string sql = @"  select id,parentid ,name as title from Attribute where parentid=@parentId  ";
            List<AttributeModel> result = DapperHelper.Query<AttributeModel>(sql, new { parentId = parentId });
            return result;
        }
        public int DelProductAttributeByProId(long productId)
        {
            string sql = @" delete from ProductAttribute where productId=@productId  ";
            int i= DapperHelper.Execute(sql, new { productId = productId });
            return i;
        }
    }
}
