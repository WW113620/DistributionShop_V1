using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service
{
   public interface IProductService:IDependency
    {
        ProductViewModel Get(long id);
        PageResult<ProductViewModel> GetList(ProductRequest request);
        void UpdateMedia(string[] MediaCollections, long ProductId);
        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
         long Add(Product model);
        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        int Update(Product model);
        /// <summary>
        /// 根据主键id删除
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        int DelById(long Id);
        /// <summary>
        /// 批量删除
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        int BatDelById(List<long> ids);
                    /// <summary>
            ///根据主键id更新 审批状态
            /// </summary>
            /// <param name="id"></param>
            /// <param name="auditStatus"></param>
            /// <returns></returns>
            int UpdateStatusById(long id, int auditStatus);

        /// <summary>
        /// 根据商品id获取最新一条审批记录
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        ProductAudit GetAuditByProId(long productId);

        /// <summary>
        /// 添加审批记录
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        int AddProductAudit(ProductAudit model);
        #region 价格

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        int AddPrice(ProductPrice model);
        /// <summary>
        /// 更新价格
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        int UpdatePriceByProId(ProductPrice model);
        #endregion

        #region  多媒体
        /// <summary>
        /// 添加多媒体
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        int AddMedia(ProductMedia model);
        /// <summary>
        ///根据产品id和多媒体类型删除
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        int delMediaByProIdAndType(long productId, int mediatype);

        List<ProductMedia> GetMediaListByProId(long productId, int mediatype);
        ProductMedia GetMediaById(long id);
         int DelMediaById(long id);
        #endregion

        /// <summary>
        /// 查询一条添加购物车里
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        ProductExtend GetProductMsgById(long id);

        ///// <summary>
        ///// 查询列表添加购物车里
        ///// </summary>
        ///// <param name="id"></param>
        ///// <returns></returns>
        //List<ProductExtend> GetProductsMsgByIdList(List<long> ids);

        /// <summary>
        /// 根据id列表查询数据
        /// </summary>
        /// <param name="productIdList"></param>
        /// <returns></returns>
        List<Product> GetListByIdList(List<long> productIdList);

        /// <summary>
        /// 根据父级id获取属性list
        /// </summary>
        /// <param name="parentId"></param>
        /// <returns></returns>
        List<AttributeModel> GetAttributeByParentId(long parentId);
        /// <summary>
        /// 根据产品id删除关联属性
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
         int DelProductAttributeByProId(long productId);
    }
}
