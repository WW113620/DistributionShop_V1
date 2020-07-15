using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Logic
{
    public class ProductLogic
    {
        private readonly DataContextEntities _dataContext;
        public readonly ICategoryService _categoryService;
        public readonly IProductService _iProductService;

        public ProductLogic(DataContextEntities dataContext, ICategoryService categoryService, IProductService iProductService)
        {
            this._dataContext = dataContext;
            this._categoryService = categoryService;
            this._iProductService = iProductService;
        }

        public List<CategoryModelFirst> GetCategoryList()
        {
            var list = GetCategories<CategoryModelFirst>(0);
            foreach (var item in list)
            {
                item.list = GetCategoryList(item.Id);
            }
            return list;
        }

        public List<CategoryModelSecond> GetCategoryList(long Id)
        {
            var list = GetCategories<CategoryModelSecond>(Id);
            foreach (var item in list)
            {
                item.list = GetCategories<CategoryModel>(item.Id);
            }
            return list;
        }

        public List<T> GetCategories<T>(long Id)
        {
            var list = this._categoryService.GetCategorysById(Id);
            List<T> viewList = AutoMapper.Mapper.Map<List<T>>(list);
            return viewList;
        }

        public List<ProductMediaViewModel> GetProductMediaList(long productId, MediaTypeEnums mediaType = MediaTypeEnums.图片)
        {
            List<ProductMediaViewModel> viewList = new List<ProductMediaViewModel>();
            var medias = this._dataContext.ProductMedias.Where(p => p.ProductId == productId && p.MediaType == (int)mediaType).ToList();
            if (medias != null && medias.Any())
            {
                viewList = AutoMapper.Mapper.Map<List<ProductMediaViewModel>>(medias);
            }
            return viewList;
        }

        #region 获取属性tree
        public List<AttributeModelFirst> GetAttributeList()
        {
            var list = GetAttributes<AttributeModelFirst>(0);
            foreach (var item in list)
            {
                item.children = GetAttributeList(item.id, 0);
            }
            return list;
        }

        public List<AttributeModelSecond> GetAttributeList(long Id, long productId)
        {
            var list = GetAttributes<AttributeModelSecond>(Id);
            return list;
        }

        public List<T> GetAttributes<T>(long Id)
        {
            var list = this._iProductService.GetAttributeByParentId(Id);
            List<T> viewList = AutoMapper.Mapper.Map<List<T>>(list);
            return viewList;
        }
        #endregion
    }
}
