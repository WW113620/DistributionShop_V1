using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    public class ImageController : Controller
    {
        private static string ProductImagePath = ConfigHelper.ProductImagePath;
        private static string ProductCoverPath = ConfigHelper.ProductCoverPath;
        private static string UserAvatarPath = ConfigHelper.UserAvatarPath;
        private static string UserIdCardPath = ConfigHelper.UserIdCardPath;
        private readonly IProductService _iproductService;
        private readonly DataContextEntities _dataContext;

        public ImageController() { }
        public ImageController(IProductService iproductService, DataContextEntities dataContext)
        {
            this._iproductService = iproductService;
            this._dataContext = dataContext;
        }
        // GET: Admin/Image
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public JsonResult UploadCoverPic(int type = 0)
        {
            HttpFileCollection Files = System.Web.HttpContext.Current.Request.Files;
            if (Files.Count > 0)
            {
                try
                {
                    var file = Files[0];
                    string fileExt = System.IO.Path.GetExtension(file.FileName).ToLower();
                    string[] fileFilt = { ".gif", ".jpg", ".jpeg", ".png" };
                    if (!fileFilt.Contains(fileExt))
                        return Json(new BaseResult(1, "请上传jpg、jpeg、gif、png格式的图片"));

                    //大小验证
                    if (file.ContentLength >= 10 * 1024 * 1024)
                        return Json(new BaseResult(1, "图片大小不能超过10MB"));

                    string saveName = string.Format("{0}{1}", DateTime.Now.ToString("yyyyMMddHHmmssfff"), fileExt);

                    string saveDirectory = string.Empty;
                    if (type == (int)UploadImageEnums.身份证)
                    {
                        saveDirectory = UserIdCardPath;
                    }
                    else if (type == (int)UploadImageEnums.用户头像)
                    {
                        saveDirectory = UserAvatarPath;
                    }
                    else if (type == (int)UploadImageEnums.产品封面)
                    {
                        saveDirectory = ProductCoverPath;
                    }
                    else
                    {
                        return Json(new BaseResult(1, "图片类型错误"));
                    }
                    if (!System.IO.Directory.Exists(saveDirectory))
                        Directory.CreateDirectory(saveDirectory);
                    string savePath = Path.Combine(saveDirectory, saveName);
                    file.SaveAs(savePath);
                    return Json(new BaseResult(0, saveName));

                }
                catch (Exception e)
                {
                    return Json(new BaseResult(1, e.Message));
                }
            }
            else
            {
                return Json(new BaseResult(1, "请选择需要上传的图片"));
            }
        }



        [HttpPost]
        public JsonResult UploadProductPic(long productId)
        {
            HttpFileCollection Files = System.Web.HttpContext.Current.Request.Files;
            if (Files.Count > 0)
            {
                try
                {
                    var file = Files[0];
                    string fileName = file.FileName;
                    string fileExt = System.IO.Path.GetExtension(fileName).ToLower();
                    string[] fileFilt = { ".gif", ".jpg", ".jpeg", ".png" };
                    if (!fileFilt.Contains(fileExt))
                        return Json(new BaseResult(1, "请上传jpg、jpeg、gif、png格式的图片"));

                    //大小验证
                    if (file.ContentLength >= 10 * 1024 * 1024)
                        return Json(new BaseResult(1, "图片大小不能超过10MB"));

                    string saveName = string.Format("{0}{1}", DateTime.Now.ToString("yyyyMMddHHmmssfff"), fileExt);
                    if (!System.IO.Directory.Exists(ProductImagePath))
                        Directory.CreateDirectory(ProductImagePath);
                    string savePath = Path.Combine(ProductImagePath, saveName);
                    file.SaveAs(savePath);
                    ProductMedia productMedia = new ProductMedia()
                    {
                        ProductId = productId,
                        MediaType = (int)MediaTypeEnums.图片,
                        NewFileName = saveName,
                        OriginalFileName = fileName,
                        MediaSize = file.ContentLength,
                        MediaSort = 0,
                        MediaCloudId = "",
                        AddTime = DateTime.Now
                    };
                    this._dataContext.ProductMedias.Add(productMedia);
                    this._dataContext.SaveChanges();
                    return Json(new BaseResult(0, saveName));
                }
                catch (Exception e)
                {
                    return Json(new BaseResult(1, e.Message));
                }

            }
            else
            {
                return Json(new BaseResult(1, "请选择需要上传的图片"));
            }
        }


        public JsonResult GetMediaListByProId(long productId, int mediatype)
        {
            List<ProductMedia> productMedias = _iproductService.GetMediaListByProId(productId, mediatype);
            return Json(productMedias, JsonRequestBehavior.AllowGet);
        }


        public JsonResult DelMediaById(long id)
        {
            ModelResult<int> result = new ModelResult<int> { code = 200, msg = "成功" };
            int i = _iproductService.DelMediaById(id);
            result.model = i;
            return Json(result, JsonRequestBehavior.AllowGet);
        }


    }
}