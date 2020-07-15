using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Service;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace DistributionShop.Web.Controllers
{

    public class MediaApiController : ApiController
    {
        private static string ProductCoverPath = ConfigHelper.ProductCoverPath;
        private static string ProductImagePath = ConfigHelper.ProductImagePath;
        private static string UserAvatarPath = ConfigHelper.UserAvatarPath;
        private static string UserIdCardPath = ConfigHelper.UserIdCardPath;
        private readonly DataContextEntities _dataContext;
        private readonly IProductService _iproductService;

        public MediaApiController(IProductService iproductService)
        {
            this._dataContext = new DataContextEntities();
            this._iproductService = iproductService;
        }

        #region 封面图片
        [HttpGet]
        public HttpResponseMessage GetCover(long? id)
        {
            if (id == null || id <= 0)
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("参数错误") };

            var model = this._dataContext.Products.FirstOrDefault(p => p.Id == id);
            if (model == null)
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("商品不存在或已被删除") };
            if (string.IsNullOrEmpty(model.CoverFileName))
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("暂无封面") };

            return GetCoverFileName(model.CoverFileName);
        }


        [HttpGet]
        public HttpResponseMessage GetCoverFileName(string fileName, int mediaType = (int)UploadImageEnums.产品封面)
        {
            if (string.IsNullOrEmpty(fileName))
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("参数错误") };
            string savePath;
            if (mediaType == (int)UploadImageEnums.产品封面)
            {
                savePath = Path.Combine(ProductCoverPath, fileName);
            }
            else if (mediaType == (int)UploadImageEnums.身份证)
            {
                savePath = Path.Combine(UserIdCardPath, fileName);
            }
            else if (mediaType == (int)UploadImageEnums.用户头像)
            {
                savePath = Path.Combine(UserAvatarPath, fileName);
            }
            else
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("图片类型错误") };
            }
            if (!File.Exists(savePath))
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("图片不存在或已被删除") };
            byte[] fileBytes = ConvertHelper.FileToBytes(savePath);
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = new ByteArrayContent(fileBytes);
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("image/jpeg");
            ContentDispositionHeaderValue cdh = new ContentDispositionHeaderValue("Inline");
            cdh.FileName = fileName;
            result.Content.Headers.ContentDisposition = cdh;
            return result;

        }
        #endregion

        #region 展示图片
        [HttpGet]
        public HttpResponseMessage GetProDisplayImage(long? id)
        {
            if (id == null || id <= 0)
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("参数错误") };

            var model = this._dataContext.ProductMedias.FirstOrDefault(p => p.Id == id);
            if (model == null)
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("商品展示图片不存在或已被删除") };
            if (string.IsNullOrEmpty(model.NewFileName))
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("暂无封面") };

            return GetCoverFileName(model.NewFileName);
        }


        [HttpGet]
        public HttpResponseMessage GetProDisplayFileName(string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("参数错误") };

            string savePath = Path.Combine(ProductImagePath, fileName);

            if (!File.Exists(savePath))
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent("展示图片不存在或已被删除") };
            byte[] fileBytes = ConvertHelper.FileToBytes(savePath);
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = new ByteArrayContent(fileBytes);
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("image/jpeg");
            ContentDispositionHeaderValue cdh = new ContentDispositionHeaderValue("Inline");
            cdh.FileName = fileName;
            result.Content.Headers.ContentDisposition = cdh;
            return result;

        }
        #endregion

    }
}
