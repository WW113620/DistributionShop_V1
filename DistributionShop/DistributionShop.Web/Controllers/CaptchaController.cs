using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;


namespace DistributionShop.Web.Controllers
{
    [AllowAnonymous]
    public class CaptchaController : ApiController
    {
        public HttpResponseMessage Get()
        {
            //验证码宽
            string width = CommonHelper.GetPostValue("w");
            //验证码高
            string height = CommonHelper.GetPostValue("h");
            //验证码
            string letternum = CommonHelper.GetPostValue("n");
            int iImgWidth = string.IsNullOrEmpty(width) ? 90 : int.Parse(width);
            int iImgHeight = string.IsNullOrEmpty(height) ? 35 : int.Parse(height);
            int num = string.IsNullOrEmpty(letternum) ? 4 : int.Parse(letternum);
            using (Bitmap bmp = new Bitmap(iImgWidth, iImgHeight))
            {
                Graphics g = Graphics.FromImage(bmp);

                string chkCode = CaptchaHelper.Create(num);
                HttpContext.Current.Session["ValidCode"] = chkCode;
                CaptchaHelper.Create(bmp, chkCode, ref g, num);
                using (MemoryStream ms = new MemoryStream())
                {
                    try
                    {
                        bmp.Save(ms, ImageFormat.Png);
                        HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
                        result.Content = new ByteArrayContent(ms.ToArray());
                        result.Content.Headers.ContentType = new MediaTypeHeaderValue("image/png");
                        return result;
                    }
                    finally
                    {
                        ((IDisposable)g).Dispose();
                    }
                }
            }
        }

        [HttpGet]
        public string code()
        {
            string sessionCode = HttpContext.Current.Session["ValidCode"] == null ? "" : HttpContext.Current.Session["ValidCode"].ToString();
            return sessionCode;
        }

    }
}
