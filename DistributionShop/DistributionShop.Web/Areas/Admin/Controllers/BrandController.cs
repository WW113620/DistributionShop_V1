using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
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
    public class BrandController : Controller
    {
        private readonly IBrandService _ibrandService;
        private readonly DataContextEntities _dataContext;
        public BrandController() { }
        public BrandController(IBrandService ibrandService, DataContextEntities dataContext) {
            this._ibrandService = ibrandService;
            this._dataContext = dataContext;
        }
        // GET: Admin/Brand
        public ActionResult Index()
        {
            ViewBag.CurrentPageCode = "Z1";
            return View();
        }

        [HttpGet]
        public JsonResult GetList(BrandRequest request)
        {
            LayuiPageResult<BrandViewModel> result = new LayuiPageResult<BrandViewModel> { code = 1 };
            try
            {
                var response = this._ibrandService.GetList(request);
                result = new LayuiPageResult<BrandViewModel> { code = response.code, msg = response.msg, count = response.page.count, data = response.data };
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 获取所有品牌
        /// </summary>
        /// <returns></returns>
        public JsonResult GetBrandList()
        {
            DataResult<Brand> dataResult = new DataResult<Brand> { code = 500, msg = "失败" };
            try
            {
                dataResult.data= _ibrandService.GetList();
                dataResult.code = 200;
                dataResult.msg = "成功";
            }
            catch(Exception ex)
            {
                dataResult.msg = ex.Message;
            }
            return Json(dataResult, JsonRequestBehavior.AllowGet);   
        }


        public ActionResult AddView(long id)
        {
            Brand model = new Brand();
            if (id > 0)
            {
               model=  _dataContext.Brands.Where(n => n.Id == id).FirstOrDefault();
            }

            return View(model);
        }
        public ActionResult Detail(long id)
        {
            Brand model = _dataContext.Brands.Where(n => n.Id == id).FirstOrDefault();
            return View(model);
        }
        public JsonResult AddOrUpdate(Brand model)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            try
            {
                int i = 0;
                if (model.Id > 0)
                {
                    i = UpdateModel(model);
                }
                else
                {
                    i = AddModel(model);
                }
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
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public int AddModel(Brand model)
        {
            model.AddTime = DateTime.Now;
            _dataContext.Brands.Add(model);
            _dataContext.SaveChanges();
            return 1;
        }
      
        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public int UpdateModel(Brand model)
        {
           var entity= _dataContext.Brands.Where(n => n.Id == model.Id).FirstOrDefault();
            entity.Name = model.Name;
            entity.Description = model.Description;
            _dataContext.SaveChanges();
            return 1;
        }

     

        /// <summary>
        /// 根据主键id删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public JsonResult DelById(long id)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            var entity = _dataContext.Brands.Where(n => n.Id == id).FirstOrDefault();
            _dataContext.Brands.Remove(entity);
          int i=  _dataContext.SaveChanges();
            result.code = 200;
            result.msg = "成功";
            result.model = i;
            return Json(result, JsonRequestBehavior.AllowGet);
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
                        long id = item.ToLong(0);
                        var entity = _dataContext.Brands.Where(n => n.Id == id).FirstOrDefault();
                        _dataContext.Brands.Remove(entity);
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

        public JsonResult IsExistsName(long id, string name)
        {
            ModelResult<long> result = new ModelResult<long> { code = 500, msg = "失败" };
            try
            {

                Brand brand = _dataContext.Brands.Where(n => n.Name == name && n.Id != id).FirstOrDefault();
                long i = brand == null ? 0 : 1;
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