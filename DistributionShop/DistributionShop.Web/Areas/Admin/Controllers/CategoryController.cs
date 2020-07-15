using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service;
using DistributionShop.Web.Attribute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    [AdminLogin]
    public class CategoryController : Controller
    {
        private readonly ICategoryService _iCategoryService;
        private readonly ProductLogic _productLogic;
        private readonly DataContextEntities _dataContext;
        public CategoryController() { }
       
        public CategoryController(ICategoryService iCategoryService, DataContextEntities dataContext,  ProductLogic productLogic)
        {
            this._iCategoryService = iCategoryService;
            this._dataContext = dataContext;
            this._productLogic = productLogic;

        }

        // GET: Admin/Category
        public ActionResult Index()
        {
            ViewBag.CurrentPageCode = "C1";
            return View();
        }
        public JsonResult GetTreeData()
        {
            DataResult<CategoryModelFirst> dataResult = new DataResult<CategoryModelFirst> { code = 500, msg = "失败" };
            try
            {
                dataResult.code = 200;
                dataResult.msg = "成功";
                 dataResult.data=this._productLogic.GetCategoryList();
            }
            catch(Exception ex)
            {

            }
            return Json(dataResult, JsonRequestBehavior.AllowGet);

        }
        /// <summary>
        ///根据parentId获取分类list
        /// </summary>
        /// <param name="parentId"></param>
        /// <returns></returns>
        public JsonResult GetListByParentId(long parentId)
        {
            ModelResult<List<Category>> modelResult = new ModelResult<List<Category>> { code = 500, msg = "失败", model = null };
            try
            {
                List<Category> list = _iCategoryService.GetListByParentId(parentId);
                modelResult.code = 200;
                modelResult.msg = "成功";
                modelResult.model = list;
            }
            catch(Exception ex)
            {
                string exMsg = string.Format("获取商品分类异常msg:{0}，StackTrace:{1}，Source:{2}", ex.Message, ex.StackTrace, ex.Source);
                modelResult.msg = exMsg;
            }
            return Json(modelResult, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetAllList()
        {
            DataResult<Category> dataResult = new DataResult<Category> { code = 500, msg = "失败" };
            try
            {
                dataResult.code = 200;
                dataResult.msg = "成功";
                dataResult.data =_dataContext.Categories.Where(n => n.IsDeleted == 0).ToList();
            }
            catch (Exception ex)
            {

            }
            return Json(dataResult, JsonRequestBehavior.AllowGet);
          
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="parentCateId"></param>
        /// <returns></returns>
        public ActionResult AddCateView(long parentCateId,long depth)
        {
            ViewBag.ParentCateId = parentCateId;
            ViewBag.Depth = depth;
            return View();
        }
        public ActionResult EditCateView(long id,string name)
        {
            ViewBag.Id = id;
            ViewBag.Name = name;
            return View();
        }
        public JsonResult Add(Category category)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            try
            {
                category.IsDeleted = 0;
                _dataContext.Categories.Add(category);
                int i=_dataContext.SaveChanges();
                result.code = 200;
                result.msg = "成功";
                result.model =i ;
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(Category category)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            try
            {
                var model = this._dataContext.Categories.FirstOrDefault(p => p.Id == category.Id);
                model.Name = category.Name;
                int i = _dataContext.SaveChanges();
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

        public JsonResult DelById(long id)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            try
            {
                var model = this._dataContext.Categories.FirstOrDefault(p => p.Id == id);
                model.IsDeleted = 1;
                List<Category> secondNodes = this._dataContext.Categories.Where(n => n.ParentCategoryId == id).ToList();
                if(secondNodes != null&& secondNodes.Count>0)
                {
                    foreach(var item in secondNodes)
                    {
                        item.IsDeleted = 1;
                        List<Category> thirdNodes = this._dataContext.Categories.Where(n => n.ParentCategoryId == item.Id).ToList();
                        if(thirdNodes!=null&&thirdNodes.Count>0)
                        {
                            foreach(var item2 in thirdNodes)
                            {
                                item2.IsDeleted = 1;
                            }
                        }
                    }
                }
                int i = _dataContext.SaveChanges();
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

    }
}