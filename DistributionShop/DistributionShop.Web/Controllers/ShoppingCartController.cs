using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service;
using DistributionShop.Service.Address;
using DistributionShop.Service.Citys;
using DistributionShop.Service.Countrys;
using DistributionShop.Service.Districts;
using DistributionShop.Service.Provinces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Controllers
{
    public class ShoppingCartController : BaseController
    {
        private readonly ShoppingCartLogic _shoppingCartLogic;
        private readonly OrderLogic _orderLogic;
        private readonly IAddressService _addressService;
        private readonly string ShoppingCartList_Code = "ShoppingCartListCode";
        private readonly IProductService _productService;
        private readonly IDistrictService _districtService;
        private readonly ICityService _cityService;
        private readonly IProvinceService _provinceService;
        private readonly ICountryService _countryService;
        private readonly AccountLogic _accountLogic;
        public ShoppingCartController(ShoppingCartLogic shoppingCartLogic, OrderLogic orderLogic, IAddressService addressService, IProductService productService, IDistrictService districtService, ICityService cityService, IProvinceService provinceService, ICountryService countryService, AccountLogic accountLogic)
        {
            _shoppingCartLogic = shoppingCartLogic;
            _orderLogic = orderLogic;
            _addressService = addressService;
            _productService = productService;
            _districtService = districtService;
            _cityService = cityService;
            _provinceService = provinceService;
            _countryService = countryService;
            _accountLogic = accountLogic;
        }

        // GET: ShoppingCart
        public ActionResult Index()
        {
            //    long userid = CurrentUser.UserId;
            //    var result = new RetShoppingCartIndexVModel();
            //    result.ShoppingCartList = GetShoppingCartList(userid);
            return View();
        }

        /// <summary>
        /// 购物车部分视图
        /// </summary>
        /// <returns></returns>
        public PartialViewResult PartialIndex()
        {
            var data = new RetShoppingCartIndexVModel();
            string userName = CurrentUser?.LoginName;

            data.ShoppingCartList = GetShoppingCartList(userName);
            return PartialView(data);
        }

        /// <summary>
        /// 母版页购物车部分视图（数据同上，只是为了清晰单独加）
        /// </summary>
        /// <returns></returns>
        public PartialViewResult PartialMainShoppingCart()
        {
            var data = new RetShoppingCartIndexVModel();
            string userName = CurrentUser?.LoginName;

            data.ShoppingCartList = GetShoppingCartList(userName);
            return PartialView(data);
        }


        /// <summary>
        /// 获取购物车数据
        /// </summary>
        /// <param name="keyWords"></param>
        /// <returns></returns>
        public JsonResult GetShoppingCartListModel()
        {
            var data = new RetShoppingCartIndexVModel();
            
            string userName = CurrentUser?.LoginName;
            data.ShoppingCartList = GetShoppingCartList(userName);
            return Json(new ModelResult<RetShoppingCartIndexVModel> { code = 0, msg = "获取成功" ,model= data });
           
        }

        /// <summary>
        /// 购物车添加删除单个商品
        /// </summary>
        /// <param name="productId"></param>
        /// <param name="num"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UpdateShoppingCartModel(long productId, int num,bool isAdd=true)
        {
            
            string userName = CurrentUser?.LoginName;
            //获取购物车内容（登录从redis,未登录从cookies）
            var shoppingCartList = GetShoppingCartList(userName);
            //购物车数量处理
            var result = _shoppingCartLogic.AddForShoppingCart(shoppingCartList, productId, num, isAdd);
            if (result.code==1)
            {
                return Json(new BaseResult(1, result.msg));
            }
            if (string.IsNullOrWhiteSpace(userName))//如果是未登录，cookies
            {
                var listString = JsonConvert.SerializeObject(result?.model);
                CookieHelper.SetCookie(ShoppingCartList_Code, listString);
            }
            else//如果是已登录，保存到redis
            {
                _shoppingCartLogic.AddListToRedis(userName, result?.model);
            }
            return Json(new BaseResult(0, num>0?"添加成功": "删除成功"));
          
        }

        /// <summary>
        /// 购物车中多个商品删除
        /// </summary>
        /// <param name="productIdList"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DeleteShoppingCartByList(List<long> productIdList)
        {
            if (productIdList==null|| productIdList.Count<=0)
            {
                return Json(new BaseResult(1, "删除失败"));
            }

            string userName = CurrentUser?.LoginName;

            //获取购物车内容（登录从redis,未登录从cookies）
            var shoppingCartList = GetShoppingCartList(userName);

            //购物车数量处理
            var result = _shoppingCartLogic.DelForShoppingCartByList(shoppingCartList, productIdList);

            if (string.IsNullOrWhiteSpace(userName))//如果是未登录，cookies
            {
                var listString = JsonConvert.SerializeObject(result);
                CookieHelper.SetCookie(ShoppingCartList_Code, listString);
            }
            else//如果是已登录，保存到redis
            {
                _shoppingCartLogic.AddListToRedis(userName, shoppingCartList);
            }

            return Json(new BaseResult(0, "删除成功"));
          
        }

        /// <summary>
        /// 去结算时设置选中商品
        /// </summary>
        /// <param name="productIdList"></param>
        /// <returns></returns>
        //[Authorize]
        [HttpPost]
        public JsonResult SetProductChecked(List<long> productIdList)
        {
            if (!IsLogined)
            {
                return Json(new ModelResult<string>(3, "当前未登录", string.Empty));
            }

            //添加订单在order里有一个
            var userId = CurrentUser.UserId;
            string userName = CurrentUser.LoginName;
            if (string.IsNullOrWhiteSpace(userName))
            {
                return Json(new ModelResult<string>(1, "请先登录页面",string.Empty));
            }
            if (productIdList==null&& !productIdList.Any())
            {
                return Json(new ModelResult<string>(1, "请先选择要结算的商品", string.Empty));
            }

            //查询购物车里的商品
            var shopingCartModelList = GetShoppingCartList(userName);

            //更新购物车选择项目
            _shoppingCartLogic.UpdateGoodsCheckStatus(productIdList, shopingCartModelList, userName);

            ////待付款商品列表
            //var payshopingCartModeList = _shoppingCartLogic.GetCheckShoppingCartList(shopingCartModelList);
            //if (payshopingCartModeList==null&& payshopingCartModeList.Count<=0)
            //{
            //    return Json(new ModelResult<string>(1, "选择结算的商品已经被删除，请刷新购物车！", string.Empty));
            //}

            ////查询地址
            //var adddress = _addressService.GetDefaultOneByUserName(userName);
            //var platformEnum = (PlatformEnums)PlatformEnums.PC订单;
            //var payChannel = (PayChannelEnums)PayChannelEnums.支付宝;
            //var orderSn = RandomNumber.CreateOrderSn();
            //var result = _orderLogic.AddOrder(new OrderLogicAddOrderDto 
            //{
            //    checkedShoppingCartList= payshopingCartModeList,
            //    UserId= userId,
            //    UserName= userName,
            //    OrderSn = orderSn,
            //    PlatformEnum = platformEnum,
            //    PayChannel = payChannel,
            //    Remark = "直接生成的订单",
            //    t_Address = adddress
            //});
            //if (result.code==0)
            //{
            //    //删掉购物车里的商品
            //    _shoppingCartLogic.DelPaidGoods(payshopingCartModeList, userName);
            //}
            return Json(new ModelResult<string>(0,"", ""));
        }

        /// <summary>
        /// 单个物品直接付款
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        //[Authorize]
        [HttpPost]
        public JsonResult CreateOrderForSingle(OrderCreateOrderModel model)
        {
            if (!IsLogined)
            {
                return Json(new ModelResult<string>(3, "当前未登录", string.Empty));
            }
            string userName = CurrentUser.LoginName;
            if (model.productId <= 0)
            {
                return Json(new ModelResult<string>(1, "未获得此订单商品Id", string.Empty));
            }
            if (model.productNum<=0)
            {
                return Json(new ModelResult<string>(1, "未获得此订单商品数量", string.Empty));
            }
            if (model.productNum>999)
            {
                return Json(new ModelResult<string>(1, "此订单商品数量超过限制", string.Empty));
            }
            //根据商品Id查询商品信息
            var productEntity = _productService.GetProductMsgById(model.productId);

            //当前版本没有商铺分类，所以赋值默认
            if (productEntity == null || productEntity.AuditStatus != (int)AuditStatusEnums.销售中)
            {
                return Json(new ModelResult<string>(1, "此订单商品已经下架", string.Empty));
            }

            //查询购物车里的商品
            var shopingCartModelList = GetShoppingCartList(userName);

            //购物车数量处理
            var result = _shoppingCartLogic.AddForShoppingCart(shopingCartModelList, productEntity.Id, model.productNum,false);

            //更新购物车选择项目
            _shoppingCartLogic.UpdateGoodsCheckStatus(new List<long> { productEntity.Id }, shopingCartModelList, userName);


            //var adddress = _addressService.GetDefaultOneByUserName(userName);
            //if (adddress==null|| adddress.Id <= 0)
            //{
            //    return Json(new ModelResult<string>(2, "未查询到该用户订单收货地址，请先去添加收货地址", string.Empty));
            //}
            //var platformEnum = (PlatformEnums)PlatformEnums.PC订单;
            //var payChannel = (PayChannelEnums)PayChannelEnums.支付宝;
            //var orderSn = RandomNumber.CreateOrderSn();

            //var result = _orderLogic.AddOrder(new OrderLogicAddOrderDto
            //{
            //    checkedShoppingCartList = new List<ShoppingCartModel>
            //    {
            //        new ShoppingCartModel
            //        {
            //            ShopId=productEntity.ShopId??0,
            //            ShopName=productEntity.ShopName,
            //            IsCheck=false,
            //            CartProductList=new List<CartProductModel>
            //            {
            //                new CartProductModel
            //                {
            //                    ProductId=model.productId,
            //                    ProductName=productEntity.ProductName,
            //                    Num =model.productNum,
            //                    TotalFee= productEntity.WebPrice??0 * model.productNum,
            //                    IsCheck=false,
            //                    OriginalPrice=productEntity.OriginalPrice??0,
            //                    WebPrice=productEntity.WebPrice??0,
            //                    PostType=productEntity.PostType??(int)PostTypeEnums.第一类,
            //                    FileName = productEntity.CoverFileName,
            //                }
            //            }
            //        }
            //    },
            //    UserId = userId,
            //    UserName = userName,
            //    OrderSn = orderSn,
            //    PlatformEnum = platformEnum,
            //    PayChannel = payChannel,
            //    Remark = "直接生成的订单",
            //    t_Address = adddress
            //});

            return Json(new ModelResult<string>(result.code, result.msg));
        }

        /// <summary>
        /// 购物车收货人信息
        /// </summary>
        /// <returns></returns>
        [Authorize]
        public ActionResult CreateOrderAndAddress()
        {
            var viewModel = new CreateOrderAndAddressViewModel();

            viewModel.CountryList = _countryService.GetAllList();
            viewModel.ProvinceList = _provinceService.GetList();
            viewModel.PrePhoneOptionList = EnumHelper.EnumToList<PhoneTypeEnums>();

            var userName = CurrentUser.LoginName;
            var address = _addressService.GetDefaultOneByUserName(userName);
            if (address!=null&& address.Id > 0)
            {
                viewModel.CityList = _cityService.GetList((int)(address?.ProvinceId ?? 0));
                viewModel.DistrictList = _districtService.GetList((int)(address?.CityId ?? 0));
                viewModel.Address = address ?? new T_Address();
            }
            else
            {
                var proId = viewModel.ProvinceList?[0].ProID ?? 0;
                viewModel.CityList = _cityService.GetList(proId);
                var cityId = viewModel.CityList?[0].CityID ?? 0;
                viewModel.DistrictList = _districtService.GetList(cityId);

            }
            return View(viewModel);
        }

        /// <summary>
        /// 添加或者修改地址
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SaveAddress(T_Address request)
        {
            #region 验证
            if (string.IsNullOrWhiteSpace(request.RealName))
            {
                return Json(new ModelResult<int>(1, "真实姓名不能为空"));
            }
            if (request.PrePhoneType <= 0)
            {
                return Json(new ModelResult<int>(1, "请选择电话前缀"));
            }
            if (string.IsNullOrEmpty(request.TelPhone))
                return Json(new ModelResult<int>(1, "手机号不能为空"));
            ValidPhoneModel model = this._accountLogic.ValidPhone(request.TelPhone);
            if (!model.IsPhone)
                return Json(new ModelResult<int>(1, "请输入正确的手机号"));

            if (request.CountryId < 0 || string.IsNullOrWhiteSpace(request.CountryName))
            {
                return Json(new ModelResult<int>(1, "请选择所在国家"));
            }
            if (request.ProvinceId <= 0 || string.IsNullOrWhiteSpace(request.ProvinceName))
            {
                return Json(new ModelResult<int>(1, "请选择所在省"));
            }
            if (request.CityId <= 0 || string.IsNullOrWhiteSpace(request.CityName))
            {
                return Json(new ModelResult<int>(1, "请选择所在市"));
            }
            if (string.IsNullOrWhiteSpace(request.Address))
            {
                return Json(new ModelResult<int>(1, "填写详细地址不能为空"));
            }
            if (string.IsNullOrWhiteSpace(request.IdentityCard))
            {
                return Json(new ModelResult<int>(1, "填写身份证号码不能为空"));
            }
            if (!ConvertHelper.IsIDCard(request.IdentityCard))
            {
                return Json(new ModelResult<int>(1, "填写身份证号码格式不正确"));
            }
            #endregion

            if (request.Id > 0)//添加地址
            {
                var address = _addressService.GetOneById(request.Id);
                if (address!=null&&address.RealName.Equals(request.RealName) &&
                    address.PrePhoneType == request.PrePhoneType &&
                    address.TelPhone.Equals(request.TelPhone) &&
                    address.CountryId == request.CountryId &&
                    address.CountryName == request.CountryName &&
                    address.CityId == request.CityId &&
                    address.DistrictId == request.DistrictId &&
                    address.Address.Equals(request.Address) &&
                    address.PostCode.Equals(request.PostCode) &&
                    address.IdentityCard.Equals(request.IdentityCard) &&
                    address.IsDefault == request.IsDefault &&
                    address.IDPhotoNegative.Equals(request.IDPhotoNegative) &&
                    address.IDPhotoPositive.Equals(request.IDPhotoPositive))
                {
                    return Json(new ModelResult<int>(0, "地址没有被修改！", (int)request.Id));
                }
            }
            request.UserId = CurrentUser.UserId;
            request.UserName = CurrentUser.LoginName;
            request.AddTime = DateTime.Now;
            request.IsActive = true;
            var result = _addressService.InsertOne(request);
            return Json(new ModelResult<int>(result > 0 ? 0 : 1, result > 0 ? result.ToString() : "添加地址失败", result));
        }

        /// <summary>
        /// 当前收货人全部地址列表
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetAddressList(string words)
        {
            if (!IsLogined)
            {
                return Json(new ModelResult<List<T_Address>>(3, "请登录"));
            }
            var userName = CurrentUser.LoginName;
            var addressList = _addressService.GetListByUserName(userName,realName: words);
            return Json(new ModelResult<List<T_Address>>(0, "未获得此订单商品Id", addressList));
        }

        /// <summary>
        /// 获取购物车已选中商品
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetCheckProductList()
        {
            var result = new ModelResult<List<ShoppingCartModel>>();
            if (CurrentUser == null)
            {
                result.code = 3;
                result.msg = "请登录";
                return Json(result);
            }
            var userName = CurrentUser.LoginName;
            //查询购物车里的商品
            var shopingCartModelList = GetShoppingCartList(userName);
            //待付款商品列表
            var payshopingCartModeList = _shoppingCartLogic.GetCheckShoppingCartList(shopingCartModelList);
            if (payshopingCartModeList == null && payshopingCartModeList.Count <= 0)
            {
                result.code = 1;
                result.msg = "选择结算的商品已经被删除，请刷新购物车！";
                return Json(result);
            }

            result.code = 0;
            result.model = payshopingCartModeList;
            return Json(result,JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 获取一条地址
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetAddress(long id)
        {
            var result = new ModelResult<T_Address>();
            if (!IsLogined)
            {
                result.code = 3;
                result.msg = "请登录";
                return Json(result);
            }
            if (id<0)
            {
                result.code = 1;
                result.msg = "未获得地址Id";
                return Json(result);
            }
            var addreess = _addressService.GetOneById(id);
            if (addreess==null)
            {
                result.code = 1;
                result.msg = "未获得当前地址";
                return Json(result);
            }
            else
            {
                result.code = 0;
                result.model = addreess;
                return Json(result);
            }
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SaveOrder(long addressId)
        {
            if (!IsLogined)
            {
                return Json(new ModelResult<string>(3, "当前未登录", string.Empty));
            }
            if (addressId<=0)
            {
                return Json(new ModelResult<string>(1, "未获得订单存储地址", string.Empty));
            }

            //查询购物车里的商品
            var userName = CurrentUser.LoginName;
            var shopingCartModelList = GetShoppingCartList(userName);

            //待付款商品列表
            var payshopingCartModeList = _shoppingCartLogic.GetCheckShoppingCartList(shopingCartModelList);
            if (payshopingCartModeList == null && payshopingCartModeList.Count <= 0)
            {
                return Json(new ModelResult<string>(1, "选择结算的商品已经被删除，请刷新购物车！", string.Empty));
            }

            //查询地址
            var adddress = _addressService.GetDefaultOneByUserName(userName);
            if (adddress==null)
            {
                return Json(new ModelResult<string>(1, "未获得当前订单存储地址", string.Empty));
            }
            var platformEnum = (PlatformEnums)PlatformEnums.PC订单;
            var payChannel = (PayChannelEnums)PayChannelEnums.支付宝;
            var orderSn = RandomNumber.CreateOrderSn();
            var userId = CurrentUser.UserId;
            var result = _orderLogic.AddOrder(new OrderLogicAddOrderDto
            {
                checkedShoppingCartList = payshopingCartModeList,
                UserId = userId,
                UserName = userName,
                OrderSn = orderSn,
                PlatformEnum = platformEnum,
                PayChannel = payChannel,
                //Remark = "直接生成的订单",
                t_Address = adddress
            });
            if (result.code == 0)
            {
                //删掉购物车里的商品
                _shoppingCartLogic.DelPaidGoods(payshopingCartModeList, userName);
            }
            return Json(new ModelResult<string>(result.code, result.msg, orderSn));
        }

        #region private method

        /// <summary>
        /// 购物车cookies里的值
        /// </summary>
        /// <returns></returns>
        private List<ShoppingCartModel> GetShoppingCartListFromCookies()
        {
            //var cookies = HttpContext.Response.Cookies;
            var shoppingCartListString = CookieHelper.GetCookie(ShoppingCartList_Code);
            if (string.IsNullOrWhiteSpace(shoppingCartListString))
            {
                return new List<ShoppingCartModel>();
            }
            else
            {
                shoppingCartListString = HttpUtility.UrlDecode(shoppingCartListString);
                return JsonConvert.DeserializeObject<List<ShoppingCartModel>>(shoppingCartListString);
            }
        }

        /// <summary>
        /// 获取购物车内容（未登录从cookies,登录从redis+从cookies）
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<ShoppingCartModel> GetShoppingCartList(string userName)
        {
            var cookiesData = GetShoppingCartListFromCookies();
            if (!string.IsNullOrWhiteSpace(userName))
            {
                var redisData = _shoppingCartLogic.GetListByUserNameFromRedis(userName);
                if (cookiesData != null && cookiesData.Any())
                {
                    redisData = _shoppingCartLogic.MergeShoppingCartList(redisData, cookiesData);

                    //清除本地cookie的
                    CookieHelper.DeleteCookie(ShoppingCartList_Code);
                    //再次存redis
                    _shoppingCartLogic.AddListToRedis(userName, redisData);
                }
                return redisData;
            }
            else
            {
                return cookiesData;
            }
        }

        #endregion
    }
}