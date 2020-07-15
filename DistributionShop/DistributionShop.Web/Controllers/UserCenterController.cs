using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Models.ViewModels.dto;
using DistributionShop.Service.Accounts;
using DistributionShop.Service.Address;
using DistributionShop.Service.Citys;
using DistributionShop.Service.Countrys;
using DistributionShop.Service.Districts;
using DistributionShop.Service.OrderAddress;
using DistributionShop.Service.Orders;
using DistributionShop.Service.Provinces;
using DistributionShop.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Controllers
{
    [Authorize]
    public class UserCenterController : BaseController
    {
        private readonly DataContextEntities _dataContext;
        private readonly IAccountService _accountService;
        private readonly ICountryService _countryService;
        private readonly AccountLogic _accountLogic;
        private readonly IAddressService _addressService;
        private readonly IDistrictService _districtService;
        private readonly ICityService _cityService;
        private readonly IProvinceService _provinceService;
        private readonly IOrderService _orderService;
        private readonly IOrderAddressService _orderAddressService;
        public UserCenterController(DataContextEntities dataContext, IAccountService accountService, ICountryService countryService, AccountLogic accountLogic, IAddressService addressService, IDistrictService districtService, ICityService cityService, IProvinceService provinceService, IOrderService orderService, IOrderAddressService orderAddressService)
        {
            _dataContext = dataContext;
            _accountService = accountService;
            _countryService = countryService;
            _accountLogic = accountLogic;
            _addressService = addressService;
            _districtService = districtService;
            _cityService = cityService;
            _provinceService = provinceService;
            _orderService = orderService;
            _orderAddressService = orderAddressService;
        }

        #region 用户中心-个人中心
        public ActionResult Index()
        {
            ViewBag.PageType = (int)PageTypeEnums.个人中心;
            ViewBag.IsUserCenter = true;
            var user = this._accountService.Get(CurrentUser.UserId);
            if (user == null)
                return ToError("此用户不存在或已被删除");
            if (user.State != (int)UserStatusEnums.已通过)
                return ToError("此用户未通过审核");
            return View(user);
        }
        #endregion


        #region 用户中心-我的订单
        public ActionResult MyOrder()
        {
            ViewBag.PageType = (int)PageTypeEnums.我的订单;
            ViewBag.IsUserCenter = true;
            MyOrderViewModel viewModel = new MyOrderViewModel
            {
                SearchTypeList = EnumHelper.EnumToList<OrderSearchMonthTypeEnums>(),
                WebPayStateList = EnumHelper.EnumToList<WebPayStateEnums>(),//?.OrderBy(x=>x.Value)?.ToList()
            };
            return View(viewModel);
        }

        /// <summary>
        /// 我的订单部分视图
        /// </summary>
        /// <returns></returns>
        public PartialViewResult PartialMyOrderList(OrderForHeadRequest request)
        {
            request.UserName = CurrentUser.LoginName;
            LayuiPageResult<OrdersHeadViewModel> result = new LayuiPageResult<OrdersHeadViewModel>() { code = 1 };
            var response = _orderService.GetListForHeads(request);

            var orderSnList = response?.data?.Select(x => x.OrderSn)?.ToList();
            var orderDetailList = _orderService.GetOrderDetailListByOrderSnList(orderSnList);

            if ((response?.data?.Count ?? 0) > 0)
            {
                foreach (var item in response.data)
                {
                    var itemOrderDetailList = orderDetailList?.Where(x => x.OrderSn.Equals(item.OrderSn));
                    item.orderDetailList = itemOrderDetailList?.ToList() ?? new List<OrderDetail>();
                }
            }

            result = new LayuiPageResult<OrdersHeadViewModel>()
            {
                code = response.code,
                msg = response.msg,
                count = response.page.count,
                data = response.data
            };
            ViewBag.pageIndex = request.page;
            return PartialView(result);
        }

        /// <summary>
        /// 获取我的订单列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetOrderList(OrderForHeadRequest request)
        {
            request.UserName = CurrentUser.LoginName;
            LayuiPageResult<OrdersHeadViewModel> result = new LayuiPageResult<OrdersHeadViewModel>() { code = 1 };
            try
            {
                var response = _orderService.GetListForHeads(request);

                var orderSnList = response?.data?.Select(x => x.OrderSn)?.ToList();
                var orderDetailList = _orderService.GetOrderDetailListByOrderSnList(orderSnList);

                if ((response?.data?.Count ?? 0) > 0)
                {
                    foreach (var item in response.data)
                    {
                        var itemOrderDetailList = orderDetailList?.Where(x => x.OrderSn.Equals(item.OrderSn));
                        item.orderDetailList = itemOrderDetailList?.ToList() ?? new List<OrderDetail>();
                    }
                }

                result = new LayuiPageResult<OrdersHeadViewModel>()
                {
                    code = response.code,
                    msg = response.msg,
                    count = response.page.count,
                    data = response.data
                };
            }
            catch (Exception e)
            {
                result.msg = e.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        ///  获取我的订单详情页
        /// </summary>
        /// <param name="orderSn"></param>
        /// <param name="productId"></param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult GetOrderDetail(string orderSn)
        {
            var viewModel = new GetOrderDetailViewModel();
            if (string.IsNullOrWhiteSpace(orderSn))
            {
                return Redirect("Error");
            }
            ////查询地址
            //var orderAdddress = _orderAddressService.GetOne(new Order_Address { OrderSn = orderSn });
            //if (orderAdddress==null)
            //{
            //    return Redirect("Error");
            //}
            viewModel.OrderDetailViewModelData = _orderService.GeOrderDetailViewByOrderSn(orderSn);
            viewModel.OrderDetailList = _orderService.GetOrderDetailListByByOrderSn(orderSn);
            return View(viewModel);
        }

        /// <summary>
        /// 立即付款页面
        /// </summary>
        /// <param name="orderSn"></param>
        /// <returns></returns>
        public ActionResult OrderPayment(string orderSn)
        {
            return RedirectToAction("Index", "Pay", new { OrderSn = orderSn });
            //if (string.IsNullOrWhiteSpace(orderSn))
            //{
            //    return Redirect("Error");
            //}
            //var orderDetailViewModelData = _orderService.GeOrderDetailViewByOrderSn(orderSn);
            //if (orderDetailViewModelData == null)
            //{
            //    return Redirect("Error");
            //}
            //return View(orderDetailViewModelData);
        }

        /// <summary>
        /// 取消订单
        /// </summary>
        /// <param name="orderSn"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult CancelOrder(string orderSn)
        {
            var userName = CurrentUser.LoginName;

            //查询订单状态缺少
            var order = _orderService.GetOrder(orderSn);
            if (order == null)
            {
                return Json(new BaseResult(1, "查询订单失败"));
            }
            if (!order.UserName.Equals(userName))
            {
                return Json(new BaseResult(1, "您无权操作该订单"));
            }
            if (order.PayState != (int)PayStateEnums.未支付)
            {
                return Json(new BaseResult(1, "该订单状态已改变，无法取消"));
            }

            var result = _orderService.CancelOrder(orderSn, userName);
            return Json(new BaseResult(result > 0 ? 0 : 1, result > 0 ? "取消订单成功" : "取消订单失败"));
        }

        /// <summary>
        /// 物流订单
        /// </summary>
        /// <returns></returns>
        public ActionResult MyLogistics(string orderSn)
        {
            return View();
        }




        #endregion


        #region 我要退款
        public ActionResult OrderReFund(string orderSn)
        {

            Order order = _dataContext.Orders.FirstOrDefault(n => n.OrderSn == orderSn && n.IsDel == 0);
            if (order == null)
                return ToError("订单不存在");

            if (order.PayState == (int)PayStateEnums.未支付 || order.PayState == (int)PayStateEnums.已取消
               || order.PayState == (int)PayStateEnums.支付失败)
                return ToError($"此订单{((PayStateEnums)order.PayState).ToString()}，无法申请退款");

            var viewModel = new GetOrderDetailViewModel() { orderReFund=new DistributionShop.Models.Data.OrderReFund()};
            viewModel.OrderDetailViewModelData = _orderService.GeOrderDetailViewByOrderSn(orderSn);
            viewModel.OrderDetailList = _dataContext.OrderDetails.Where(n => n.OrderSn == orderSn
            && (n.Status == (int)WebOrderDetailStatusEnums.默认 || n.Status == (int)WebOrderDetailStatusEnums.退款申请中)).ToList();

            List<SelectOption> PayChannelEnums = EnumHelper.EnumToList<PayChannelEnums>();
            List<SelectOption> ReFundTypeEnums = EnumHelper.EnumToList<ReFundTypeEnums>();
            List<SelectOption> ReFundReasonEnums = EnumHelper.EnumToList<ReFundReasonEnums>();
            ViewBag.Order = order;
            ViewBag.OrderSn = orderSn;
            ViewBag.ReFundTypeEnums = ReFundTypeEnums;
            ViewBag.PayChannelEnums = PayChannelEnums;
            ViewBag.ReFundReasonEnums = ReFundReasonEnums;

            var refund = _dataContext.OrderReFunds.FirstOrDefault(p => p.OrderSn == orderSn && p.Status == (int)WebReFundStatusEnums.申请中);
            if (refund != null)
            {
                viewModel.orderReFund = refund;
                viewModel.applyAccount = refund.ReApplyFee.ToDecimal(0);
            }

            return View(viewModel);
        }

        public JsonResult ApplyOrderRefund(OrderReFund model)
        {
            ModelResult<int> modelResult = new ModelResult<int> { };

            Order order = _dataContext.Orders.FirstOrDefault(n => n.OrderSn == model.OrderSn && n.IsDel == 0);
            if (order.PayState == (int)PayStateEnums.未支付 || order.PayState == (int)PayStateEnums.已取消
               || order.PayState == (int)PayStateEnums.支付失败)
            {
                modelResult = new ModelResult<int>
                {
                    code = 500,
                    msg = $"此订单{((PayStateEnums)order.PayState).ToString()}，无法申请退款"
                };
                return Json(modelResult, JsonRequestBehavior.AllowGet);
            }

            #region 条件判断
            if (!isOwnerOrder(model.OrderSn))
            {
                modelResult = new ModelResult<int>
                {
                    code = 500,
                    msg = "不可以退款非自己的订单"
                };
                return Json(modelResult, JsonRequestBehavior.AllowGet);
            }

            string[] ids = model.ProductIds.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            if (ids == null || ids.Length == 0)
            {
                modelResult = new ModelResult<int>
                {
                    code = 500,
                    msg = "请选择需要退款的商品"
                };
                return Json(modelResult, JsonRequestBehavior.AllowGet);
            }
            List<long> newIds = new List<long> { };
            foreach (var item in ids)
            {
                if (item != "")
                {
                    newIds.Add(item.ToLong(0));
                }
            }

            var detail = _dataContext.OrderDetails.Where(n => n.OrderSn == model.OrderSn
            && (n.Status == (int)WebOrderDetailStatusEnums.默认 || n.Status == (int)WebOrderDetailStatusEnums.退款申请中));
            int detailCount = detail.Count();
            if (detailCount == 0)
            {
                modelResult.msg = "没有退款商品";
                modelResult.code = 500;
                return Json(modelResult, JsonRequestBehavior.AllowGet);
            }
            int count = _dataContext.OrderDetails.Count(n => n.OrderSn == model.OrderSn);
            if (ids.Length > count || ids.Length > detailCount)
            {
                modelResult.msg = "退款商品选择有误，请重新选择";
                modelResult.code = 500;
                return Json(modelResult, JsonRequestBehavior.AllowGet);
            }

            if (ids.Length == count)
            {
                model.ReFundMethod = (int)ReFundMethodEnums.全部退款;
            }
            else
            {
                model.ReFundMethod = (int)ReFundMethodEnums.部分退款;
            }

            decimal sumPrice = detail.Sum(n => (n.WebPrice*n.OrderProductAmount)).ToDecimal(2);
            if (model.ReApplyFee > sumPrice)
            {
                modelResult.msg = "退款金额有误,请查询或者咨询客服";
                modelResult.code = 500;
                return Json(modelResult, JsonRequestBehavior.AllowGet);
            }
            #endregion

            var refund = _dataContext.OrderReFunds.FirstOrDefault(p => p.OrderSn == model.OrderSn && p.Status == (int)WebReFundStatusEnums.申请中);
            if (refund != null)
            {
                refund.ProductIds = model.ProductIds;
                refund.ReFundType = model.ReFundType;
                refund.ReFundMethod = model.ReFundMethod;
                refund.ReFundReason = model.ReFundMethod;
                refund.ReApplyFee = model.ReApplyFee;
                refund.Status = (int)WebReFundStatusEnums.申请中;
                refund.IsDel = 0;
                refund.Description = model.Description;
                refund.ReUserName = CurrentUser.LoginName;
            }
            else
            {
                DateTime dtNow = DateTime.Now;
                model.AddTime = dtNow;
                model.UpdateTime = dtNow;
                model.IsDel = 0;
                model.Status = (int)WebReFundStatusEnums.申请中;
                model.ReUserName = CurrentUser.LoginName;
                _dataContext.OrderReFunds.Add(model);
            }

            int i = _dataContext.SaveChanges();
            if (i > 0)//更新orderdetail 的status状态为申请退款中
            {
                _orderService.UpdateOrderDetailStatus(newIds, (int)WebOrderDetailStatusEnums.退款申请中);
            }
            modelResult.code = 200;
            return Json(modelResult, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 是否自己订单
        /// </summary>
        /// <param name="OrderSn"></param>
        /// <returns></returns>
        public bool isOwnerOrder(string OrderSn)
        {
            long? userid = CurrentUser.UserId;
            Order orders = _dataContext.Orders.Where(n => n.OrderSn == OrderSn && n.UserId == userid).FirstOrDefault();
            if (orders != null && orders.Id > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        #endregion


        #region 用户中心-优惠券
        public ActionResult Coupon()
        {
            ViewBag.PageType = (int)PageTypeEnums.优惠券;
            ViewBag.IsUserCenter = true;
            return View();
        }
        #endregion


        #region 用户中心-我的钱包
        public ActionResult MyWallet()
        {
            ViewBag.PageType = (int)PageTypeEnums.我的钱包;
            ViewBag.IsUserCenter = true;
            return View();
        }
        #endregion


        #region 用户中心-收货人管理
        /// <summary>
        /// 用户中心-收货人管理
        /// </summary>
        /// <returns></returns>
        public ActionResult AddressManager()
        {
            ViewBag.PageType = (int)PageTypeEnums.收货人管理;
            ViewBag.IsUserCenter = true;

            return View();
        }



        /// <summary>
        ///  用户中心-添加修改地址管理
        /// </summary>
        /// <returns></returns>
        public ActionResult EditAddress(long addressId = 0)
        {
            var viewModel = new AddOrUpdateAddressViewModel();

            viewModel.CountryList = _countryService.GetAllList();
            viewModel.ProvinceList = _provinceService.GetList();

            viewModel.PrePhoneOptionList = EnumHelper.EnumToList<PhoneTypeEnums>();
            if (addressId > 0)
            {
                var address = _addressService.GetOneById(addressId);
                if (address == null)
                {
                    return Redirect("Error"); ;
                }
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
                viewModel.Address = new T_Address();

            }
            return View(viewModel);
        }

        /// <summary>
        /// 获取城市列表
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetAddressData()
        {

            var resultData = new AddOrUpdateAddressViewModel();
            resultData.CityList = _cityService.GetList();
            resultData.DistrictList = _districtService.GetList();
            if (resultData.CityList == null || !resultData.CityList.Any())
            {
                return Json(new ModelResult<AddOrUpdateAddressViewModel>
                {
                    code = 1,
                    msg = "查询城市列表失败!"
                });
            }
            if (resultData.DistrictList == null || !resultData.DistrictList.Any())
            {
                return Json(new ModelResult<AddOrUpdateAddressViewModel>
                {
                    code = 1,
                    msg = "查询镇街道列表失败!"
                });
            }
            return Json(new ModelResult<AddOrUpdateAddressViewModel>
            {
                code = 0,
                model = resultData
            });
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
                return Json(new BaseResult(1, "真实姓名不能为空"));
            }
            if (request.PrePhoneType <= 0)
            {
                return Json(new BaseResult(1, "请选择电话前缀"));
            }
            if (string.IsNullOrEmpty(request.TelPhone))
                return Json(new BaseResult(1, "手机号不能为空"));
            ValidPhoneModel model = this._accountLogic.ValidPhone(request.TelPhone);
            if (!model.IsPhone)
                return Json(new BaseResult(1, "请输入正确的手机号"));

            if (request.CountryId < 0 || string.IsNullOrWhiteSpace(request.CountryName))
            {
                return Json(new BaseResult(1, "请选择所在国家"));
            }
            if (request.ProvinceId <= 0 || string.IsNullOrWhiteSpace(request.ProvinceName))
            {
                return Json(new BaseResult(1, "请选择所在省"));
            }
            if (request.CityId <= 0 || string.IsNullOrWhiteSpace(request.CityName))
            {
                return Json(new BaseResult(1, "请选择所在市"));
            }
            //if (request.DistrictId <= 0 || string.IsNullOrWhiteSpace(request.DistrictName))
            //{
            //    return Json(new BaseResult(1, "请选择所在区县"));
            //}
            if (string.IsNullOrWhiteSpace(request.Address))
            {
                return Json(new BaseResult(1, "填写详细地址不能为空"));
            }
            //if (string.IsNullOrWhiteSpace(request.PostCode))
            //{
            //    return Json(new BaseResult(1, "填写国家邮编不能为空"));
            //}
            if (string.IsNullOrWhiteSpace(request.IdentityCard))
            {
                return Json(new BaseResult(1, "填写身份证号码不能为空"));
            }
            if (!ConvertHelper.IsIDCard(request.IdentityCard))
            {
                return Json(new BaseResult(1, "填写身份证号码格式不正确"));
            }
            #endregion

            if (request.Id <= 0)//添加地址
            {
                request.UserId = CurrentUser.UserId;
                request.UserName = CurrentUser.LoginName;
                //request.Contact = string.Empty;
                request.AddTime = DateTime.Now;
                request.IsActive = true;
                var result = _addressService.InsertOne(request);
                return Json(new BaseResult(result > 0 ? 0 : result, result > 0 ? "添加地址成功" : "添加地址失败"));
            }
            else//修改地址
            {
                var address = _addressService.GetOneById(request.Id);
                if (address == null)
                {
                    return Json(new BaseResult(1, "未查询到需要修改的地址"));
                }
                address.RealName = request.RealName;
                address.PrePhoneType = request.PrePhoneType;
                address.TelPhone = request.TelPhone;
                address.CountryId = request.CountryId;
                address.CountryName = request.CountryName;
                address.ProvinceId = request.ProvinceId;
                address.ProvinceName = request.ProvinceName;
                address.CityId = request.CityId;
                address.CityName = request.CityName;
                address.DistrictId = request.DistrictId;
                address.DistrictName = request.DistrictName;
                address.Address = request.Address;
                address.PostCode = request.PostCode;
                address.IdentityCard = request.IdentityCard;
                address.IsDefault = request.IsDefault;
                address.IDPhotoNegative = request.IDPhotoNegative;
                address.IDPhotoPositive = request.IDPhotoPositive;

                var result = _addressService.UpdateAddress(address);
                return Json(new BaseResult(result > 0 ? 0 : result, result > 0 ? "修改地址成功" : "修改地址失败"));
            }
        }

        /// <summary>
        /// 获取收货人列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetList(AddressRequest request)
        {
            var result = new LayuiPageResult<AddressViewModel>() { code = 1 };
            if (!IsLogined)
            {
                result.code = 3;
            }
           
            request.UserName = CurrentUser.LoginName;
            try
            {
                var response = this._addressService.GetList(request);
                result = new LayuiPageResult<AddressViewModel>() { code = response.code, msg = response.msg, count = response.page.count, data = response.data };
            }
            catch (Exception ex)
            {
                result.msg = ex.Message;
            }
            return Json(result, JsonRequestBehavior.AllowGet);

        }

        /// <summary>
        /// 删除的地址
        /// </summary>
        /// <param name="addressId"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        public JsonResult DelAddress(long addressId = 0)
        {
            if (!IsLogined)
            {
                return Json(new BaseResult(3, "请登录"));
            }
            var userName = CurrentUser.LoginName;
            if (addressId <= 0)
            {
                return Json(new BaseResult(1, "未查询到需要删除的地址"));
            }
            var address = _addressService.GetOneById(addressId);
            if (address == null)
            {
                return Json(new BaseResult(1, "地址已经被删除"));
            }
            if (!userName.Equals(address?.UserName))
            {
                return Json(new BaseResult(1, "您无权删除该地址"));
            }
            var result = _addressService.DelOne(addressId);
            return Json(new BaseResult(result > 0 ? 0 : 1, result > 0 ? "删除地址成功" : "删除地址失败"));
        }

        /// <summary>
        /// 设置默认地址
        /// </summary>
        /// <param name="addressId"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SetDefaultAddress(long addressId = 0)
        {
            var userName = CurrentUser.LoginName;
            if (addressId <= 0)
            {
                return Json(new BaseResult(1, "未查询到需要设置的地址"));
            }
            var address = _addressService.GetOneById(addressId);
            if (address == null)
            {
                return Json(new BaseResult(1, "地址已经被删除"));
            }
            if (!address.UserName.Equals(userName))
            {
                return Json(new BaseResult(1, "您无权设置该地址"));
            }

            var result = _addressService.SetOneDefault(addressId, userName);
            return Json(new BaseResult(result ? 0 : 1, result ? "设置默认地址成功" : "设置默认地址失败"));
        }
        #endregion


        #region 用户中心-我的邀请
        public ActionResult MyInvite()
        {
            ViewBag.PageType = (int)PageTypeEnums.我的邀请;
            ViewBag.IsUserCenter = true;
            return View();
        }
        #endregion


        #region 我的代理
        /// <summary>
        /// 我的代理
        /// </summary>
        /// <returns></returns>
        public ActionResult MyAgent()
        {
            ViewBag.PageType = (int)PageTypeEnums.我的代理;
            ViewBag.IsUserCenter = true;
            return View();
        }
        #endregion


        #region 用户中心-个人资料
        /// <summary>
        /// 个人中心-个人资料
        /// </summary>
        /// <returns></returns>
        public ActionResult PersonalInfo()
        {
            ViewBag.PageType = (int)PageTypeEnums.个人资料;
            ViewBag.IsUserCenter = true;

            var username = CurrentUser.LoginName;
            var personMessage = _accountService.GetOneByUserName(username);
            var viewModel = new UserPersonalMsgView();
            viewModel.UserMessage = new UserMessage
            {
                CountryId = personMessage.CountryId ?? 0,
                Phone = personMessage.Phone,
                UserName = personMessage.UserName,
                NickName = personMessage.NickName,
                RealName = personMessage.RealName,
                Email = personMessage.Email,
                PrePhoneType = personMessage.PrePhoneType ?? 0,
                AvatarUrl = personMessage.AvatarUrl
            };
            viewModel.CountryList = _countryService.GetAllList();
            viewModel.PrePhoneOptionList = EnumHelper.EnumToList<PhoneTypeEnums>();

            return View(viewModel);
        }

        /// <summary>
        /// 个人中心-个人资料保存
        /// </summary>
        /// <param name="userAddUserMsgDto"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SaveUserInfo(UserAddUserMsgDto userAddUserMsgDto)
        {
            userAddUserMsgDto.UserName = CurrentUser.LoginName;

            if (string.IsNullOrWhiteSpace(userAddUserMsgDto.RealName))
            {
                return Json(new BaseResult(1, "姓名不能为空"));
            }
            if (string.IsNullOrWhiteSpace(userAddUserMsgDto.NickName))
            {
                return Json(new BaseResult(1, "昵称不能为空"));
            }
            if (userAddUserMsgDto.PrePhoneType < 0)
            {
                return Json(new BaseResult(1, "请选择电话前缀"));
            }
            if (userAddUserMsgDto.CountryId < 0 || string.IsNullOrWhiteSpace(userAddUserMsgDto.CountryName))
            {
                return Json(new BaseResult(1, "请选择所在国家"));
            }
            if (string.IsNullOrEmpty(userAddUserMsgDto.Phone))
                return Json(new BaseResult(1, "手机号不能为空"));
            ValidPhoneModel model = this._accountLogic.ValidPhone(userAddUserMsgDto.Phone);
            if (!model.IsPhone)
                return Json(new BaseResult(1, "请输入正确的手机号"));

            //邮箱正则
            if (!string.IsNullOrWhiteSpace(userAddUserMsgDto.Email) && !Regex.IsMatch(userAddUserMsgDto.Email, "\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*"))
            {
                return Json(new BaseResult(1, "输入的邮箱格式不正确"));
            }

            if (string.IsNullOrEmpty(userAddUserMsgDto.NickName))
                userAddUserMsgDto.NickName = userAddUserMsgDto.RealName;

            var result = _accountService.Update(userAddUserMsgDto);
            CommonUtils.ResetCookieNickName(userAddUserMsgDto.NickName);
            if (result > 0)
            {
                return Json(new BaseResult(0, "保存成功"));
            }
            return Json(new BaseResult(1, "保存失败"));

        }

        /// <summary>
        /// 查询手机号状态
        /// </summary>
        /// <param name="phoneType"></param>
        /// <param name="phone"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult CheckPhone(int phoneType, string phone)
        {
            if (string.IsNullOrWhiteSpace(phone))
            {
                return Json(new ModelResult<bool>(1, "未获得需要查询的手机号！", false));
            }
            var phoneTypeEnum = (PhoneTypeEnums)phoneType;
            var model = _accountLogic.ValidPhone(phoneTypeEnum, phone);
            if (!model.IsPhone)
                return Json(new ModelResult<bool>(1, "请输入正确的手机号", false));

            var entity = _accountService.GetByPhone(phoneTypeEnum, phone);


            return Json(new ModelResult<bool>(0, "查询的手机号成功！", entity == null));

        }
        #endregion



        #region 用户中心-安全中心
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult SecurityCenter()
        {
            ViewBag.PageType = (int)PageTypeEnums.安全中心;
            ViewBag.IsUserCenter = true;
            return View();
        }

        /// <summary>
        /// 重置密码
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public JsonResult ChangePwd(ChangePasswordModel model)
        {
            var username = CurrentUser.LoginName;
            var result = this._accountLogic.ChangePassword(model, username);

            if (result.code == 0 && username == LoginHelper.UserName)
                return Json(new BaseResult(2, "密码重置成功"));

            return Json(result);

        }
        #endregion
    }
}