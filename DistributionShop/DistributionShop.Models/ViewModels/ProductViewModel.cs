using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class ProductViewModel : Product
    {
        public ProductViewModel()
        {
        }
        public long _row_number_ { get; set; }
        public string BrandName { get; set; }
        public string ShopName { get; set; }
        public string CategoryName { get; set; }
        public long FirstCategoryId { get; set; }
        public string FirstCategoryName { get; set; }
        public string ShowCategoryName => $"{FirstCategoryName} -> {CategoryName}";
        public string OriginalPriceValue => (OriginalPrice.ToDecimal(2)).ToMoney();
        public string WebPriceValue => (WebPrice.ToDecimal(2)).ToMoney();

        public string AuditStatusName => Enum.GetName(typeof(AuditStatusEnums), AuditStatus.ToInt(0));
        public string TopStatus => Enum.GetName(typeof(ProductTopEnums), IsTop.ToInt(0));
        public string NewStatus => Enum.GetName(typeof(ProductNewEnums), IsNew.ToInt(0));
        public string AddTimeValue => Convert.ToDateTime(AddTime).ToString("yyyy-MM-dd HH:mm");

        /// <summary>
        /// 封面图片路径
        /// </summary>
        public string CoverMediaPath { get; set; }
        public string DiscountBeginTime { get; set; }
        public string DiscountEndTime { get; set; }
        public int Discount { get; set; }

        public string MediaCollection { get; set; }

    }
    public class ProductRequest : BaseReqestParams
    {
        /// <summary>
        /// 商品名称
        /// </summary>
        public string ProductName { get; set; }
        /// <summary>
        /// 所属店铺
        /// </summary>
        public string ShopName { get; set; }

        public string AuditStatus { get; set; }
        public string IsTop { get; set; }
        /// <summary>
        /// 商品品牌
        /// </summary>
        public string BrandName { get; set; }

        /// <summary>
        /// 品牌Id
        /// </summary>
        public string BrandIds { get; set; }
        /// <summary>
        /// 商品分类Id
        /// </summary>

        public string FiristCategoryId { get; set; }
        public string SecondCategoryId { get; set; }
        public string IsNew { get; set; }

        public string IsDiscount { get; set; }
        public string IsHomePage { get; set; }
        /// <summary>
        /// 排序字段
        /// </summary>
        public string OrderBy { get; set; }
        /// <summary>
        /// asc  desc
        /// </summary>
        public string OrderByType { get; set; }
        /// <summary>
        /// 多个用逗号号分隔
        /// </summary>

        public string AttributeParentIds { get; set; }
        /// <summary>
        /// 多个用逗号分隔
        /// </summary>
        public string AttributeIds { get; set; }
    }
}
