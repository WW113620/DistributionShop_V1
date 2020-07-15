using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service.Address;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    [Obsolete("后续删除")]
    public class AddressController : Controller
    {
        private readonly IAddressService _addressService;
        public AddressController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        // GET: Admin/Address
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 获取地址列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetAddressList(string telPhone,string alias)
        {
            int userid = 0;
            var addressList = _addressService.GetListByUserName("", telPhone, alias);
            return Json(addressList, JsonRequestBehavior.AllowGet) ;
        }
        /// <summary>
        /// 添加地址
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult AddAddress(AddAddressModel model) 
        {
            try
            {
                int usereid = 0;
                #region 验证
                if (model.ProvinceId < 0 || string.IsNullOrWhiteSpace(model.ProvinceName))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "省不能为空")), JsonRequestBehavior.AllowGet);
                }
                if (model.CityId < 0 || string.IsNullOrWhiteSpace(model.CityName))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "市不能为空")), JsonRequestBehavior.AllowGet);
                }
                if (model.CountyId < 0 || string.IsNullOrWhiteSpace(model.CountyName))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "区县不能为空")), JsonRequestBehavior.AllowGet);
                }
                if (string.IsNullOrWhiteSpace(model.TelPhone))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "收货人电话号码不能为空")), JsonRequestBehavior.AllowGet);
                }
                if (string.IsNullOrWhiteSpace(model.Address))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "收货人详细地址不能为空")), JsonRequestBehavior.AllowGet);
                }
                if (string.IsNullOrWhiteSpace(model.Contact))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "收货人名字不能为空")), JsonRequestBehavior.AllowGet);
                }


                if (string.IsNullOrWhiteSpace(model.PostCode))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "邮编不能为空")), JsonRequestBehavior.AllowGet);
                }
                if (string.IsNullOrWhiteSpace(model.IdentityCard))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "收货人身份证号码不能为空")), JsonRequestBehavior.AllowGet);
                }
                if (string.IsNullOrWhiteSpace(model.IDPhotoNegative))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "收货人身份证正面照片不能为空")), JsonRequestBehavior.AllowGet);
                }
                if (string.IsNullOrWhiteSpace(model.Contact))
                {
                    return Json(new BaseResult(1, string.Format("添加地址失败：{0}", "收货人身份证反面照片不能为空")), JsonRequestBehavior.AllowGet);
                }
                #endregion
                var result = _addressService.InsertOne(new T_Address
                {
                    UserId = usereid,
                    ProvinceId = model.ProvinceId,
                    ProvinceName = model.ProvinceName,
                    CityId = model.CityId,
                    CityName = model.CityName,
                    CountryId = model.CountyId,
                    CountryName = model.CountyName,
                    TelPhone = model.TelPhone,
                    Address = model.Address,
                    Contact = model.Contact,
                    IsDefault = false,
                    Notes = model.Notes,
                    //Alias = model.Alias,
                    PostCode = model.PostCode,
                    IdentityCard = model.IdentityCard,
                    IDPhotoNegative = model.IDPhotoNegative,
                    IDPhotoPositive = model.IDPhotoPositive,
                    IsActive = true,
                });
                return Json(new BaseResult(result > 0 ? 0 : 1, result > 0 ? "添加成功" : "添加失败"), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(1, ex.Message, JsonRequestBehavior.AllowGet);
            }
        }
        /// <summary>
        /// 设置地址为默认地址
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SetDefault(int id)
        {
            string userName = string.Empty;
            try
            {
                #region 验证
                if (id < 0)
                {
                    return Json(new BaseResult(1, string.Format("设置地址默认地址失败：{0}", "默认地址Id不能为空")));
                }
                #endregion

                var result = _addressService.SetOneDefault(id, userName);
                return Json(new BaseResult(result ? 0 : 1, result ? "设置地址默认地址成功" : "设置地址默认地址失败"));
            }
            catch (Exception ex)
            {
                return Json(1, ex.Message);
            }
        }

        /// <summary>
        /// 删除地址
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DelAddress(int id)
        {
            try
            {
                #region 验证
                if (id < 0)
                {
                    return Json(new BaseResult(1, string.Format("删除地址失败：{0}", "默认地址Id不能为空")));
                }
                #endregion

                var result = _addressService.DelOne(id);
                return Json(new BaseResult(result>0 ? 0 : 1, result>0 ? "删除地址成功" : "删除地址失败"));
            }
            catch (Exception ex)
            {
                return Json(1, ex.Message);
            }
        }
    }
}