using AutoMapper;
using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service;
using DistributionShop.Web.Attribute;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    [AdminLogin]
    public class ProductController : Controller
    {
        private static string ProductImagePath = ConfigHelper.ProductImagePath;
        private readonly IProductService _iproductService;
        private readonly DataContextEntities _dataContext;
        private readonly ProductLogic _productLogic;
        public ProductController() { }
        public ProductController(IProductService iproductService, DataContextEntities dataContext, ProductLogic productLogic)
        {
            this._iproductService = iproductService;
            this._dataContext = dataContext;
            this._productLogic = productLogic;
        }
        // GET: Admin/Product
        public ActionResult Index()
        {
            ViewBag.CurrentPageCode = "P1";
            List<SelectOption> AuditStatusEnums = EnumHelper.EnumToList<AuditStatusEnums>();
            List<SelectOption> ProductNewEnums = EnumHelper.EnumToList<ProductNewEnums>();
            List<SelectOption> ProductTopEnums = EnumHelper.EnumToList<ProductTopEnums>();
            List<SelectOption> ShowHomePageEnums = EnumHelper.EnumToList<ShowHomePageEnums>();
            ViewBag.AuditStatusEnums = AuditStatusEnums;
            ViewBag.ProductNewEnums = ProductNewEnums;
            ViewBag.ProductTopEnums = ProductTopEnums;
            ViewBag.ShowHomePageEnums = ShowHomePageEnums;
            return View();
        }

        [HttpGet]
        public JsonResult GetList(ProductRequest request)
        {
            LayuiPageResult<ProductViewModel> result = new LayuiPageResult<ProductViewModel> { code = 1 };
            try
            {
                var response = this._iproductService.GetList(request);
                result = new LayuiPageResult<ProductViewModel> { code = response.code, msg = response.msg, count = response.page.count, data = response.data };
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }



        public ActionResult Add(long? id)
        {
            ProductViewModel model = new ProductViewModel() { Id = 0 };
            if (id != null && id > 0)
            {
                model = _iproductService.Get(id.ToLong(0));
                if (model == null)
                    return Content("该商品不存在或者已被删除");

                model.CoverMediaPath = ConfigHelper.GetCoverImage(model.CoverFileName);
            }
            ViewBag.CurrentPageCode = "P1";
            List<SelectOption> ProductNewEnums = EnumHelper.EnumToList<ProductNewEnums>();
            List<SelectOption> ProductTopEnums = EnumHelper.EnumToList<ProductTopEnums>();
            List<SelectOption> PostTypeEnums = EnumHelper.EnumToList<PostTypeEnums>();
            List<SelectOption> SendTypeEnums = EnumHelper.EnumToList<SendTypeEnums>();
            List<SelectOption> ShowHomePageEnums = EnumHelper.EnumToList<ShowHomePageEnums>();
            ViewBag.ProductNewEnums = ProductNewEnums;
            ViewBag.ProductTopEnums = ProductTopEnums;
            ViewBag.PostTypeEnums = PostTypeEnums;
            ViewBag.SendTypeEnums = SendTypeEnums;
            ViewBag.ShowHomePageEnums = ShowHomePageEnums;
            ViewBag.BrandList = this._dataContext.Brands.ToList();
            ViewBag.ShopList = this._dataContext.Shops.Where(p => p.IsDel == 0).ToList();
            return View(model);
        }

        public PartialViewResult PartailMedia(long productId)
        {
            List<ProductMediaViewModel> medias = new List<ProductMediaViewModel>();
            medias = this._productLogic.GetProductMediaList(productId, MediaTypeEnums.图片);
            return PartialView(medias);
        }

        [HttpPost]
        public JsonResult AddProduct(Product model, string MediaCollection)
        {
            BaseResult result = new BaseResult();
            try
            {
                if (string.IsNullOrEmpty(model.ProductName))
                {
                    return Json(new BaseResult(1, "商品名称不能为空"));
                }

                if (model.CategoryId <= 0)
                {
                    return Json(new BaseResult(1, "请选择商品类别"));
                }

                if (string.IsNullOrEmpty(model.CoverFileName))
                {
                    return Json(new BaseResult(1, "封面图片不能为空"));
                }


                if (model.Id > 0)
                {
                    var product = this._dataContext.Products.Find(model.Id);
                    if (product == null)
                        return Json(new BaseResult(1, "该商品不存在或者已被删除"));
                    if (product.AuditStatus == (int)AuditStatusEnums.销售中)
                        return Json(new BaseResult(1, "商品销售中，暂时无法修改"));

                    product.ProductName = model.ProductName;
                    product.BrandId = model.BrandId;
                    product.ShopId = model.ShopId;
                    product.CategoryId = model.CategoryId;
                    product.CategoryPath = model.CategoryPath;
                    product.CoverFileName = model.CoverFileName;
                    product.Description = model.Description;
                    product.IsNew = model.IsNew;
                    product.IsTop = model.IsTop;
                    product.IsHomePage = model.IsHomePage;
                    product.SendType = model.SendType;
                    product.PostType = model.PostType;
                    if (model.OriginalPrice > model.WebPrice && model.OriginalPrice > 0)
                        product.IsDiscount = (int)ProductDiscountEnums.折扣;
                    else
                        product.IsDiscount = (int)ProductDiscountEnums.平价;
                    product.OriginalPrice = model.OriginalPrice;
                    product.WebPrice = model.WebPrice;
                    this._dataContext.SaveChanges();
                }
                else
                {
                    if (string.IsNullOrEmpty(MediaCollection))
                        return Json(new BaseResult(1, "请上传商品展示图片"));
                    var MediaCollections = MediaCollection.Split(',');
                    if (MediaCollections == null || MediaCollections.Length == 0)
                        return Json(new BaseResult(1, "请上传商品展示图片"));

                    if (model.OriginalPrice > model.WebPrice && model.OriginalPrice > 0)
                        model.IsDiscount = (int)ProductDiscountEnums.折扣;
                    else
                        model.IsDiscount = (int)ProductDiscountEnums.平价;
                    model.ProductType = (int)ProductTypeEnums.实物商品;
                    model.AuditStatus = (int)AuditStatusEnums.待审核;
                    model.IsDeleted = 0;
                    model.AddTime = DateTime.Now;
                    this._dataContext.Products.Add(model);
                    this._dataContext.SaveChanges();
                    UpdateMedia(MediaCollections, model.Id);
                }

                return Json(new BaseResult(0, model.Id > 0 ? "编辑成功" : "添加成功"));
            }
            catch (Exception e)
            {
                return Json(new BaseResult(1, "Exception=" + e.Message));
            }
        }

        public void UpdateMedia(string[] MediaCollections, long ProductId)
        {
            try
            {
                this._iproductService.UpdateMedia(MediaCollections, ProductId);
            }
            catch (Exception e)
            {

            }
        }

        [HttpPost]
        public JsonResult Delete(long Id)
        {
            var product = this._dataContext.Products.Find(Id);
            if (product != null)
            {
                if (product.AuditStatus == (int)AuditStatusEnums.销售中)
                    return Json(new BaseResult(1, "商品销售中无法删除"));
                this._dataContext.Products.Remove(product);
                this._dataContext.SaveChanges();
            }
            return Json(new BaseResult(0, "删除成功"));
        }

        [HttpPost]
        public JsonResult Publish(long Id)
        {
            var product = this._dataContext.Products.Find(Id);
            if (product == null)
                return Json(new BaseResult(1, "此商品已不存在或已被删除"));
            if (product.AuditStatus == (int)AuditStatusEnums.销售中)
                return Json(new BaseResult(1, "商品销售中无法上架"));
            if (string.IsNullOrEmpty(product.CoverFileName))
                return Json(new BaseResult(1, "商品无封面图片，暂时无法上架，请先添加"));

            int count = this._dataContext.ProductAttributes.Count(p => p.ProductId == Id);
            if (count == 0)
                return Json(new BaseResult(1, "商品无描述属性，暂时无法上架，请先添加"));

            int count2 = this._dataContext.ProductMedias.Count(p => p.ProductId == Id);
            if (count2 == 0)
                return Json(new BaseResult(1, "商品无展示图片，暂时无法上架，请先上传"));

            product.AuditStatus = (int)AuditStatusEnums.销售中;
            this._dataContext.SaveChanges();
            return Json(new BaseResult(0, "上架成功"));
        }

        [HttpPost]
        public JsonResult Down(long Id)
        {
            var product = this._dataContext.Products.Find(Id);
            if (product == null)
                return Json(new BaseResult(1, "此商品已不存在或已被删除"));
            if (product.AuditStatus == (int)AuditStatusEnums.待审核)
                return Json(new BaseResult(1, "待审核商品无法下架"));
            if (product.AuditStatus == (int)AuditStatusEnums.已下架)
                return Json(new BaseResult(1, "此商品已下架"));

            product.AuditStatus = (int)AuditStatusEnums.已下架;
            this._dataContext.SaveChanges();
            return Json(new BaseResult(0, "上架成功"));
        }

        public ActionResult Detail(long? id)
        {
            ProductViewModel model = new ProductViewModel() { Id = 0 };
            if (id != null && id > 0)
            {
                model = _iproductService.Get(id.ToLong(0));
                if (model == null)
                    return Content("该商品不存在或者已被删除");

                model.CoverMediaPath = ConfigHelper.GetCoverImage(model.CoverFileName);
            }
            ViewBag.CurrentPageCode = "P1";
            List<SelectOption> ProductNewEnums = EnumHelper.EnumToList<ProductNewEnums>();
            List<SelectOption> ProductTopEnums = EnumHelper.EnumToList<ProductTopEnums>();
            List<SelectOption> PostTypeEnums = EnumHelper.EnumToList<PostTypeEnums>();
            List<SelectOption> SendTypeEnums = EnumHelper.EnumToList<SendTypeEnums>();
            ViewBag.ProductNewEnums = ProductNewEnums;
            ViewBag.ProductTopEnums = ProductTopEnums;
            ViewBag.PostTypeEnums = PostTypeEnums;
            ViewBag.SendTypeEnums = SendTypeEnums;
            ViewBag.BrandList = this._dataContext.Brands.ToList();
            ViewBag.ShopList = this._dataContext.Shops.Where(p => p.IsDel == 0).ToList();
            return View(model);
        }

        #region 属性页面
        public ActionResult Attribute(long? id)
        {
            ProductViewModel model = new ProductViewModel() { Id = 0 };
            if (id == null || id <= 0)
                return Content("参数不对");
            model = _iproductService.Get(id.ToLong(0));
            if (model == null)
                return Content("该商品不存在或者已被删除");
            List<ProductAttribute> productAttrbuteList = _dataContext.ProductAttributes.Where(n => n.ProductId == id).ToList();
            var attributeIds = "";
            if (productAttrbuteList != null && productAttrbuteList.Count > 0)
            {
                foreach (var item in productAttrbuteList)
                {
                    attributeIds += item.AttributeId + ",";
                }
                attributeIds = attributeIds.TrimEnd(new char[] { ',' });
            }
            ViewBag.attributeIds = attributeIds;
            ViewBag.productId = id;
            return View();
        }
        /// <summary>
        /// 获取属性集合
        /// </summary>
        /// <returns></returns>
        public JsonResult GetAtrributeTreeData()
        {
            List<AttributeModelFirst> list = _productLogic.GetAttributeList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult RelateProductAttribute()
        {
            string requestParams = Request.Form["data"].ToString();
            long productId = Request.Form["productId"].ToLong(0);
            List<AttributeModelFirst> attributeModelFirsts = JsonConvert.DeserializeObject<List<AttributeModelFirst>>(requestParams);
            //删除 属性
            _iproductService.DelProductAttributeByProId(productId);
            if (attributeModelFirsts != null && attributeModelFirsts.Count > 0)
            {
                DateTime dt = DateTime.Now;
                //重新添加属性
                foreach (var item in attributeModelFirsts)
                {
                    long AttributeParentId = item.id;
                    string AttributeParentName = item.title;
                    if (item.children != null && item.children.Count > 0)
                    {
                        foreach (var item2 in item.children)
                        {
                            long AttributeId = item2.id;
                            string AttributeName = item2.title;
                            ProductAttribute entity = new ProductAttribute
                            {
                                ProductId = productId,
                                AttributeId = AttributeId,
                                AttributeName = AttributeName,
                                AttributeParentId = AttributeParentId,
                                AttributeParentName = AttributeParentName,
                                AddTime = dt
                            };
                            _dataContext.ProductAttributes.Add(entity);
                            _dataContext.SaveChanges();
                        }
                    }

                }
            }
            ModelResult<int> modelResult = new ModelResult<int> { code = 200, msg = "成功", model=1 };
            return Json(modelResult, JsonRequestBehavior.AllowGet);
        }

        #endregion



        [HttpPost]
        public JsonResult DeletePic(long Id)
        {
            var media = this._dataContext.ProductMedias.Find(Id);
            if (media != null)
            {
                try
                {

                    string savePath = Path.Combine(ProductImagePath, media.NewFileName);

                    if (System.IO.File.Exists(savePath))
                        System.IO.File.Delete(savePath);
                }
                catch (Exception e)
                {

                }
                this._dataContext.ProductMedias.Remove(media);
                this._dataContext.SaveChanges();
            }
            return Json(new BaseResult(0, "删除成功"));
        }


        /// <summary>
        /// 批量删除
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public JsonResult DelByIds(string ids)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            try
            {
                List<long> idList = new List<long> { };
                if (!string.IsNullOrEmpty(ids))
                {
                    List<string> list = ids.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToList();
                    foreach (var item in list)
                    {
                        idList.Add(item.ToLong(0));
                    }
                }
                int i = _iproductService.BatDelById(idList);
                result.code = 200;
                result.msg = "成功";
                result.model = i;
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        /// <summary>
        /// 添加审批记录
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public JsonResult AddProductAudit(ProductAudit model)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            model.OperatorId = LoginHelper.UserID.ToLong(0);
            model.OperatorName = LoginHelper.UserName;
            try
            {
                int i = _iproductService.AddProductAudit(model);
                result.code = 200;
                result.msg = "成功";
                result.model = i;
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 判断货号是否重复
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public JsonResult IsExistsProCode(long id, string productcode)
        {
            ModelResult<long> result = new ModelResult<long> { code = 500, msg = "失败" };
            try
            {

                Product pro = _dataContext.Products.Where(n => n.ProductCode == productcode && n.IsDeleted == 0 && n.Id != id).FirstOrDefault();
                long i = pro == null ? 0 : 1;
                result.code = 200;
                result.msg = "成功";
                result.model = i;
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public string getMediaPathByproId(long proId, int mediaType)
        {
            string result = "";
            List<string> pathList = _dataContext.ProductMedias.Where(n => n.ProductId == proId && n.MediaType == mediaType).Select(n => n.OriginalFileName).ToList();
            if (pathList != null && pathList.Count > 0)
            {
                result = string.Join(",", pathList);
            }
            return result;
        }



    }
}