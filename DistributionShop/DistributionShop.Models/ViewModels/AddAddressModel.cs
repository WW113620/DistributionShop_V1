using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class AddAddressModel
    {
        public long ProvinceId { get; set; }
        public string ProvinceName { get; set; }
        public long CityId { get; set; }
        public string CityName { get; set; }
        /// <summary>
        /// 区县
        /// </summary>
        public long CountyId { get; set; }
        /// <summary>
        /// 区县Name
        /// </summary>
        public string CountyName { get; set; }
        /// <summary>
        /// 收货人手机号
        /// </summary>
        public string TelPhone { get; set; }
        /// <summary>
        /// 详细地址
        /// </summary>
        public string Address { get; set; }
        /// <summary>
        /// 联系人
        /// </summary>
        public string Contact { get; set; }
        /// <summary>
        /// 是否是默认 1默认 0否
        /// </summary>
        public bool IsDefault { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public string Notes { get; set; }
        /// <summary>
        /// 别名
        /// </summary>
        public string Alias { get; set; }
        public string PostCode { get; set; }
        public string IdentityCard { get; set; }
        public string IDPhotoNegative { get; set; }
        public string IDPhotoPositive { get; set; }
    }
}
