using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    /// <summary>
    /// 购物车
    /// </summary>
    public class ShoppingCartModel
    {
        /// <summary>
        /// 商家Id
        /// </summary>
        public long ShopId { get; set; }

        /// <summary>
        /// 商家名称
        /// </summary>
        public string ShopName { get; set; }

        /// <summary>
        /// 购买的商家货物
        /// </summary>
        public List<CartProductModel> CartProductList { get; set; }

        /// <summary>
        /// 当前商家下的商品是否全被选中
        /// </summary>
        public bool IsCheck { get; set; }
    }

    /// <summary>
    /// 购物车里的商品
    /// </summary>
    public class CartProductModel
    {
        /// <summary>
        /// 商品Id
        /// </summary>
        public long ProductId { get; set; }

        /// <summary>
        /// 商品名
        /// </summary>
        public string ProductName { get; set; }

        /// <summary>
        /// 购物车中商品数量
        /// </summary>
        public int Num { get; set; }

        /// <summary>
        /// 商品总金额
        /// </summary>
        public decimal TotalFee { get; set; }

        /// <summary>
        /// 当前商品是否被选中
        /// </summary>
        public bool IsCheck { get; set; }

        public decimal OriginalPrice { get; set; }

        public decimal WebPrice { get; set; }

        /// <summary>
        /// 邮费类型
        /// </summary>
        public int PostType { get; set; }

        /// <summary>
        /// 封面图片名
        /// </summary>
        public string FileName { get; set; }
    }

    /// <summary>
    /// 商品拓展类
    /// </summary>
    public class ProductExtend: Product
    { 
        public string ShopName { get; set; }
    }
}
