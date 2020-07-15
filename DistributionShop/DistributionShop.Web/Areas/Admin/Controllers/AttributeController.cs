using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using DistributionShop.Web.Attribute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    [AdminLogin]
    public class AttributeController : Controller
    {
        private readonly DataContextEntities _dataContext;
        public AttributeController() { }
        public AttributeController(DataContextEntities dataContext) {
            this._dataContext = dataContext;
        }
        // GET: Admin/Attribute
        public ActionResult Index()
        {
            ViewBag.CurrentPageCode = "P2";
            return View();
        }

        public JsonResult GetAllList()
        {
            DataResult<DistributionShop.Models.Data.Attribute> dataResult = new DataResult<DistributionShop.Models.Data.Attribute> { code = 500, msg = "失败" };
            try
            {
                dataResult.code = 200;
                dataResult.msg = "成功";
                dataResult.data = this._dataContext.Attributes.ToList();
            }
            catch (Exception ex)
            {

            }
            return Json(dataResult, JsonRequestBehavior.AllowGet);

        }

        public ActionResult AddView(long parentId, long level)
        {
            ViewBag.ParentId = parentId;
            ViewBag.Level = level;
            return View();
        }
        public ActionResult EditView(long id, string name)
        {
            var model = this._dataContext.Attributes.FirstOrDefault(p => p.Id == id);
            return View(model);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="attribute"></param>
        /// <returns></returns>
        public JsonResult Add(DistributionShop.Models.Data.Attribute attribute)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            try
            {
                bool isExistName=IsExistName(attribute.Name, Convert.ToInt64(attribute.ParentId??0), 0);
                if(!isExistName)
                {
                    attribute.AddTime = DateTime.Now;
                    _dataContext.Attributes.Add(attribute);
                    int i = _dataContext.SaveChanges();
                    result.code = 200;
                    result.msg = "成功";
                    result.model = i;
                }else
                {
                    result.code = 201;
                    result.msg = "已存在同名称的级别";
                    result.model = 0;
                }
              
              
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="attribute"></param>
        /// <returns></returns>
        public JsonResult Update(DistributionShop.Models.Data.Attribute attribute)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            try
            {
                bool isExistName = IsExistName(attribute.Name, Convert.ToInt64(attribute.ParentId ?? 0), attribute.Id);
                if(!isExistName)
                {
                    var model = this._dataContext.Attributes.FirstOrDefault(p => p.Id == attribute.Id);
                    model.Name = attribute.Name;
                    model.Description = attribute.Description;
                    int i = _dataContext.SaveChanges();
                    result.code = 200;
                    result.msg = "成功";
                    result.model = i;
                }else
                {
                    result.code = 201;
                    result.msg = "已存在同名称的级别";
                    result.model = 0;
                }
               
               
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public JsonResult DelById(long id)
        {
            ModelResult<int> result = new ModelResult<int> { code = 500, msg = "失败" };
            try
            {
                var model = this._dataContext.Attributes.FirstOrDefault(p => p.Id == id);
                _dataContext.Attributes.Remove(model);
                List<DistributionShop.Models.Data.Attribute> secondNodes = this._dataContext.Attributes.Where(n => n.ParentId == id).ToList();
                if (secondNodes != null && secondNodes.Count > 0)
                {
                    foreach (var item in secondNodes)
                    {
                        _dataContext.Attributes.Remove(item);
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

        public  bool IsExistName(string name,long parentId ,long id)
        {
            bool result = false;
            var model= _dataContext.Attributes.Where(n => n.Name == name && n.ParentId == parentId).FirstOrDefault();
            if (model == null || (model!=null&&model.Id==id))
            {
                result = false;
               
            }else
            {
                result = true;
            }

            return result;
        }
    }
}