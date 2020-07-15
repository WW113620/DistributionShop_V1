using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service.Accounts;
using DistributionShop.Service.Test;
using DistributionShop.Web.App_Start;
using log4net;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Controllers
{
    public class HomeController : BaseController
    {
        private static ILog logger = LogManager.GetLogger(typeof(HomeController));
        private readonly DataContextEntities _dataContext;
        private readonly RedisHelper _redisHelper;
        private readonly ProductLogic _productLogic;
        private readonly IAccountService _accountService;
        public HomeController(DataContextEntities dataContext, RedisHelper redisHelper, ProductLogic productLogic, IAccountService accountService)
        {
            this._dataContext = dataContext;
            this._redisHelper = redisHelper;
            this._productLogic = productLogic;
            this._accountService = accountService;
        }
        public ActionResult Index()
        {
            List<Category> categoriesList = _dataContext.Categories.Where(n => n.IsDeleted == 0 && n.ParentCategoryId == 0).ToList();
            ViewBag.categoriesList = categoriesList;
            return View();
        }



        #region Test

        [AllowAnonymous]
        public ActionResult About()
        {
            AccountRequest request = new AccountRequest();
            RoleEnums loginType = (RoleEnums)LoginHelper.UserType;
            string loginName = LoginHelper.UserName;
            var response = this._accountService.GetAdminList(request, loginName, loginType);

            return Content(JsonConvert.SerializeObject(response));
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            ///var list22= this._productLogic.GetCategoryList();
            //var name = this._testService.GetName();
            //var list2 = this._testService.GetUser();
            //var list = this._dataContext.TestUsers.ToList();

            //var viewList = AutoMapper.Mapper.Map<List<UserViewModel>>(list);

            //var list3 = this._testService.GetUserList();

            //UserRequest request = new UserRequest();
            //request.keyWord = "d";
            //var result = this._testService.GetUserList(request);



            //RedisHelper redis = new RedisHelper();
            //redis.StringSet("test", "test112");
            //string test = redis.StringGet("test");


            //this._redisHelper.StringSet("wangwei", "哈哈哈哈哈");
            //string wangwei = this._redisHelper.StringGet("wangwei");

            //string sessionCode = Session["ValidCode"] == null ? "" : Session["ValidCode"].ToString();
            return View();
        }
        #endregion

        [AllowAnonymous]
        public ActionResult Order()
        {
            string ordersn = RandomNumber.CreateOrderSn();
            return Content(ordersn);
        }


        public ActionResult Redis()
        {
            long Id = this.CurrentUser.UserId;
            string LoginName = User.Identity.Name;

            this._redisHelper.StringSet("mytest", "Redis is good");
            string test = this._redisHelper.StringGet("mytest");
            return Content(string.IsNullOrEmpty(test) ? "" : test);
        }


        [HttpGet]
        public ActionResult Error()
        {
            Response.StatusCode = 404;
            return View();
        }


    }
}