using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Address
{
    public interface IAddressService : IDependency
    {
        /// <summary>
        /// 查询用户的地址
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        List<T_Address> GetListByUserName(string userName, string phone = null, string realName = null);

        /// <summary>
        /// 查询一条默认数据
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        T_Address GetDefaultOneByUserName(string userName);

        /// <summary>
        /// 查询一条数据
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        T_Address GetOneById(long id);

        /// <summary>
        /// 插入一条数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int InsertOne(T_Address entity);
        /// <summary>
        /// 逻辑删除一条
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        int DelOne(long Id);

        /// <summary>
        /// 设置默认地址
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        bool SetOneDefault(long id, string userName);

        /// <summary>
        /// 修改地址
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int UpdateAddress(T_Address entity);

        /// <summary>
        /// 分页获取地址列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        PageResult<AddressViewModel> GetList(AddressRequest request);
    }
}
