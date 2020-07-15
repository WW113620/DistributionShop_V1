using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class ProductMediaViewModel : ProductMedia
    {
        public string FileSize => MediaSize > 0 ? $"{Math.Round(Convert.ToDouble(MediaSize) / 1024, 1)}kb" : "";
        public string ImageUrl => ConfigHelper.GetProductImage(NewFileName);
    }
}
