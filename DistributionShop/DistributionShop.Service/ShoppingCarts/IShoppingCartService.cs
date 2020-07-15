using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service
{
    public interface IShoppingCartService : IDependency
    {
        /// <summary>
        /// 插入一条数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int InsertOne(ShoppingCart entity);


        /// <summary>
        /// 更新购物车数量
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int UpdateGoodNumById(ShoppingCart entity);

        /// <summary>
        /// 逻辑删除一条
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        int DelOne(long Id);
    }
}
