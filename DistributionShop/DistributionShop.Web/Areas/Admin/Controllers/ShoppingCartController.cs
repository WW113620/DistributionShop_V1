using DistributionShop.Logic;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    public class ShoppingCartController : Controller
    {
//        private readonly ShoppingCartLogic _shoppingCartLogic;

//        private readonly string ShoppingCartList_Code = "ShoppingCartListCode";

//        public ShoppingCartController(ShoppingCartLogic shoppingCartLogic)
//        {
//            _shoppingCartLogic = shoppingCartLogic;
//        }

//        /// <summary>
//        /// 购物车列表
//        /// </summary>
//        /// <returns></returns>
//        [AllowAnonymous]
//        public ActionResult Index()
//        {
//            int userid = 0;
//#if dev1
//            userid = 0;
//#elif dev2
//             userid = 1;
//#else
//             userid = 1;//需要补上UserId
//#endif
//            var result = new RetShoppingCartIndexVModel();
//            result.ShoppingCartList = GetShoppingCartList(userid);
//            return View(result);
//        }

//        /// <summary>
//        /// 购物车添加删除商品
//        /// </summary>
//        /// <param name="productId"></param>
//        /// <param name="num"></param>
//        /// <returns></returns>
//        [HttpPost]
//        public JsonResult UpdateShoppingCartModel(long productId, int num)
//        {
//            try
//            {
//                int userId = 0;
//#if dev1
//                userId = 0;
//#elif dev2
//             userId = 1;
//#else
//             userId = 1;//是否登录,需要补上UserId
//#endif
//                //获取购物车内容（登录从redis,未登录从cookies）
//                var shoppingCartList = GetShoppingCartList(userId);
//                //购物车数量处理
//                var result = _shoppingCartLogic.AddForShoppingCart(shoppingCartList, productId, num);

//                if (userId <= 0)//如果是未登录，cookies
//                {
//                    var listString = JsonConvert.SerializeObject(result);
//                    CookieHelper.SetCookie(ShoppingCartList_Code, listString);
//                }
//                else//如果是已登录，保存到redis
//                {
//                    _shoppingCartLogic.AddListToRedis("test", shoppingCartList);
//                }
//                return Json(new BaseResult(0, "添加成功"));
//            }
//            catch (Exception)
//            {
//                return Json(new BaseResult(1, "添加失败"));
//            }
//        }

//        #region private method

//        /// <summary>
//        /// 购物车cookies里的值
//        /// </summary>
//        /// <returns></returns>
//        private List<ShoppingCartModel> GetShoppingCartListFromCookies()
//        {
//            //var cookies = HttpContext.Response.Cookies;
//            var shoppingCartListString = CookieHelper.GetCookie(ShoppingCartList_Code);
//            if (string.IsNullOrWhiteSpace(shoppingCartListString))
//            {
//                return new List<ShoppingCartModel>();
//            }
//            else
//            {
//                return JsonConvert.DeserializeObject<List<ShoppingCartModel>>(shoppingCartListString);
//            }
//        }

//        /// <summary>
//        /// 获取购物车内容（未登录从cookies,登录从redis+从cookies）
//        /// </summary>
//        /// <param name="userId"></param>
//        /// <returns></returns>
//        public List<ShoppingCartModel> GetShoppingCartList(long userId)
//        {
//            var cookiesData = GetShoppingCartListFromCookies();
//            if (userId > 0)
//            {
//                var redisData = _shoppingCartLogic.GetListByUserNameFromRedis("test");
//                if (cookiesData != null && cookiesData.Any())
//                {
//                    redisData = _shoppingCartLogic.MergeShoppingCartList(redisData, cookiesData);

//                    //清除本地cookie的
//                    CookieHelper.DeleteCookie(ShoppingCartList_Code);
//                    //再次存redis
//                    _shoppingCartLogic.AddListToRedis("test", redisData);
//                }
//                return redisData;
//            }
//            else
//            {
//                return cookiesData;
//            }
//        }
//        #endregion
    }
}