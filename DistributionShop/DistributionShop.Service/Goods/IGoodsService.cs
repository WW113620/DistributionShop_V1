using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Goods
{
    public interface IGoodsService:IDependency
    {
        /// <summary>
        /// 分页获取列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        PageResult<ProductViewModel> GetList(ProductRequest request);
        /// <summary>
        /// 获取homepage的列表数据
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        PageResult<ProductViewModel> GetHomePageList(ProductRequest request);

        /// <summary>
        /// 获取所有的parentId的属性
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        List<ProductAttribute> GetParentAttributeList(ProductRequest request);

        /// <summary>
        /// 根据筛选取所有的品牌
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        List<Brand> GetBrandList(ProductRequest request);

        /// <summary>
        /// 根据产品id获取一级二级分类
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        ProductViewModel GetFirstAndSecondCateByProId(long productId);

    }
}
