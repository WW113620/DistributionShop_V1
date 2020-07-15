
using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service;
using DistributionShop.Service.Goods;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AttributeEntity = DistributionShop.Models.Data.Attribute;

namespace DistributionShop.Web.Controllers
{
    public class GoodsController : BaseController
    {
        private readonly DataContextEntities _dataContext;
        private readonly IGoodsService _iGoodsService;
        private readonly IProductService _productService;
        private readonly ProductLogic _productLogic;
        public GoodsController() { }
        public GoodsController(DataContextEntities dataContext, IGoodsService iGoodsService, IProductService productService, ProductLogic productLogic)
        {
            this._iGoodsService = iGoodsService;
            this._productService = productService;
            this._dataContext = dataContext;
            this._productLogic = productLogic;
        }

        #region 列表页
        /// <summary>
        /// 商品列表
        /// </summary>
        /// <returns></returns>
        public ActionResult Index(string kw, string cate1, string cate2)
        {
            ViewBag.cate1 = cate1;
            ViewBag.cate2 = cate2;
            ViewBag.kw = kw;
            ViewBag.AuditStatus = (int)AuditStatusEnums.销售中;
            return View();
        }
        public JsonResult GetList(ProductRequest request)
        {
            request.AuditStatus = ((int)AuditStatusEnums.销售中).ToString();
            LayuiPageResult<ProductViewModel> result = new LayuiPageResult<ProductViewModel> { code = 1 };
            var response = this._iGoodsService.GetList(request);
            result = new LayuiPageResult<ProductViewModel> { code = response.code, msg = response.msg, data = response.data, count = response.page.count };
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [AllowAnonymous]
        public ActionResult Preview(long? id)
        {
            if (id == null || id <= 0)
                return Content("此商品不存在或已被删除");
            ProductViewModel model = _productService.Get(id.ToLong(0));
            if (model == null)
                return Content("此商品不存在或已被删除");

            List<SelectOption> SendTypeList = EnumHelper.EnumToList<SendTypeEnums>();
            ViewBag.SendType = SendTypeList.FirstOrDefault(p => p.Value == model.SendType);
            return View("Item", model);
        }

        /// <summary>
        /// 获取首页的列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public JsonResult GetHomePageList(ProductRequest request)
        {
            LayuiPageResult<ProductViewModel> result = new LayuiPageResult<ProductViewModel> { code = 1 };
            request.AuditStatus = ((int)AuditStatusEnums.销售中).ToString();
            request.IsHomePage = ((int)ShowHomePageEnums.显示).ToString();
            var response = _iGoodsService.GetHomePageList(request);
            result = new LayuiPageResult<ProductViewModel> { code = response.code, msg = response.msg, data = response.data, count = response.page.count };
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        #region 取筛选属性相关方法
        /// <summary>
        /// 根据筛选获取品牌
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public JsonResult GetBrandList(ProductRequest request)
        {
            DataResult<Brand> dataResult = new DataResult<Brand> { code = 200, msg = "成功" };
            dataResult.data = this._iGoodsService.GetBrandList(request);
            return Json(dataResult, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 根据筛选取所有属性筛选
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public JsonResult GetParentAttributeList(ProductRequest request)
        {
            DataResult<ProductAttribute> dataResult = new DataResult<ProductAttribute> { code = 200, msg = "成功" };
            List<ProductAttribute> list = this._iGoodsService.GetParentAttributeList(request);
            if (list != null && list.Count > 0)
            {
                var item = list.Where(n => n.AttributeParentName == "" || n.AttributeParentName == null).FirstOrDefault();
                list.Remove(item);
            }
            dataResult.data = list;
            return Json(dataResult, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 根据父id 获取所有孩子
        /// </summary>
        /// <param name="parentId"></param>
        /// <returns></returns>
        public JsonResult GetChildrenAttributeList(long parentId)
        {
            List<AttributeEntity> list = _dataContext.Attributes.Where(n => n.ParentId == parentId).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }


        /// <summary>
        /// 获取分类 id=0  一级分类  
        /// ！=1的时候  子分类
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public JsonResult GetCategoryList(long Id)
        {
            List<Category> list = _dataContext.Categories.Where(n => n.IsDeleted == 0 && n.ParentCategoryId == Id).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }


        #endregion
        #endregion

        #region 详情页
        /// <summary>
        /// 商品详情
        /// </summary>
        /// <returns></returns>
        public ActionResult Item(long? id)
        {
            if (id == null || id <= 0)
                return ToError("此商品不存在或已被删除");
            ProductViewModel model = _productService.Get(id.ToLong(0));
            if (model == null)
                return ToError("此商品不存在或已被删除");
            if (model.AuditStatus != (int)AuditStatusEnums.销售中)
                return ToError("此商品未上架");

            List<SelectOption> SendTypeList = EnumHelper.EnumToList<SendTypeEnums>();
            ViewBag.SendType = SendTypeList.FirstOrDefault(p => p.Value == model.SendType);
            return View(model);
        }
        /// <summary>
        /// 获取除了当前id的通分类的推荐list
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetRecommdList(long Id)
        {
            int count = 8;
            List<Product> list = new List<Product>();
            ProductViewModel model = _productService.Get(Id);
            list = _dataContext.Products.Where(n => n.Id != Id && n.CategoryId == model.CategoryId && n.IsDeleted == 0 && n.AuditStatus == (int)AuditStatusEnums.销售中).Take(count).ToList();
            if (list != null && list.Count >= 6)
                return Json(list);
            List<long> productIds = list.Select(p => p.Id).ToList();
            var categoryIds = _dataContext.Categories.Where(p => p.ParentCategoryId == model.FirstCategoryId && p.Id != model.CategoryId).Select(p => p.Id).ToList();
            var listany = _dataContext.Products.AsEnumerable().Where(n => !productIds.Contains(n.Id) && categoryIds.Contains(n.CategoryId.ToLong(0)) && n.IsDeleted == 0 && n.AuditStatus == (int)AuditStatusEnums.销售中).Take(count - list.Count).ToList();
            if (listany != null && listany.Any())
                list.AddRange(listany);
            if (list != null && list.Count >= 6)
                return Json(list);

            productIds = list.Select(p => p.Id).ToList();
            var listany2 = _dataContext.Products.AsEnumerable().Where(n => !productIds.Contains(n.Id) && n.IsDeleted == 0 && n.AuditStatus == (int)AuditStatusEnums.销售中).Take(count - list.Count).ToList();
            if (listany2 != null && listany2.Any())
                list.AddRange(listany2);

            return Json(list);

        }
        /// <summary>
        /// 根据商品id获取所有属性
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        public JsonResult GetAttributeByProductId(long productId)
        {
            List<ProductAttribute> list = _dataContext.ProductAttributes.Where(n => n.ProductId == productId).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 根据商品id获取展示图片
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        public JsonResult GetProductMediaList(long productId)
        {
            List<ProductMediaViewModel> list = _productLogic.GetProductMediaList(productId, MediaTypeEnums.图片);
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 根据商品id获取一级二级分类
        /// </summary>
        /// <param name="productId"></param>
        /// <returns></returns>
        public JsonResult GetFirstAndSecondCateByProId(long productId)
        {
            ProductViewModel model = _iGoodsService.GetFirstAndSecondCateByProId(productId);
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        #endregion



    }
}