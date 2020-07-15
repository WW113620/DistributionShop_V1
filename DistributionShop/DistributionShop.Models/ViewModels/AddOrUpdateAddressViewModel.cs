using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.ViewModels
{
    public class AddOrUpdateAddressViewModel
    {
        public List<T_Country> CountryList { get; set; }
        public List<T_District> DistrictList { get; set; }

        public List<T_City> CityList { get; set; }

        public List<T_Province> ProvinceList { get; set; }

        public List<SelectOption> PrePhoneOptionList { get; set; }

        public T_Address Address { get; set; }
    }
}
