using DistributionShop.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.ConfigInfos
{
    public interface IConfigInfosService : IDependency
    {
        /// <summary>
        /// 根据key获取对应的值value
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        string GetValueByKey(string key);

        /// <summary>
        /// 插入一条数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int InsertOne(ConfigInfo entity);

        /// <summary>
        /// 根据key更新value
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        int UpdateOneValueByKey(string key, string value);
    }
}
