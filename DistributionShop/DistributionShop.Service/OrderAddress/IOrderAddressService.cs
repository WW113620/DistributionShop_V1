using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.OrderAddress
{
    public interface IOrderAddressService : IDependency
    {   /// <summary>
        /// 查询一条数据
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        Order_Address GetOne(Order_Address entity);
    }
}
