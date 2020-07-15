using Dapper;
using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.OrderAddress
{
    public class OrderAddressService: IOrderAddressService
    {
        /// <summary>
        /// 查询一条数据
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public Order_Address GetOne(Order_Address entity)
        {
            if (entity==null)
            {
                return null;
            }
            string sqlText = @"
SELECT TOP 1 *
FROM OrderAddress WITH(NOLOCK) 
WHERE IsActive=1 {0}
";
            string whereString = string.Empty;
            var parms = new DynamicParameters();
            if (string.IsNullOrWhiteSpace(entity?.OrderSn))
            {
                whereString += " AND [OrderSn]=@OrderSn ";
            }
            sqlText = string.Format(sqlText, whereString);
            return DapperHelper.Get<Order_Address>(sqlText, parms);
        }
    }
}
