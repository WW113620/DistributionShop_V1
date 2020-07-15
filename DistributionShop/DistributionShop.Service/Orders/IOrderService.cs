using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Orders
{
    public interface IOrderService : IDependency
    {
        int OrderStatistics(WebReFundStatusEnums status, PayStateEnums payState);
        OrderViewModel Get(string OrderSn);
        PageResult<OrderViewModel> GetList(OrderRequest request);
        PageResult<OrderDetailViewModel> GetDetailList(OrderDetailRequest request);

        /// <summary>
        /// 添加订单和订单详情
        /// </summary>
        /// <param name="order"></param>
        /// <param name="orderDetailList"></param>
        /// <returns></returns>
        bool AddOrderAndOrderDetail(Order order, List<OrderDetail> orderDetailList,Order_Address order_Address);

        /// <summary>
        /// 订单分页(因为需要根据订单下的商品名模糊查询)
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        PageResult<OrdersHeadViewModel> GetListForHeads(OrderForHeadRequest request);

        /// <summary>
        /// 根据订单号查询所有下面的订单商品详情
        /// </summary>
        /// <param name="orderSnList"></param>
        /// <returns></returns>
        List<OrderDetail> GetOrderDetailListByOrderSnList(List<string> orderSnList);

        /// <summary>
        /// 个人中心-订单详情
        /// </summary>
        /// <param name="orderId"></param>
        /// <returns></returns>
        OrderDetailViewModelData GeOrderDetailViewByOrderSn(string orderSn);

        /// <summary>
        ///  个人中心-查询订单下详细列表
        /// </summary>
        /// <param name="orderSn"></param>
        /// <returns></returns>
        List<OrderDetail> GetOrderDetailListByByOrderSn(string orderSn);

        /// <summary>
        /// 取消订单
        /// </summary>
        /// <param name="orderSn"></param>
        /// <returns></returns>
        int CancelOrder(string orderSn, string userName);

        /// <summary>
        /// 查询一个
        /// </summary>
        /// <param name="orderSn"></param>
        /// <param name="userName"></param>
        /// <returns></returns>
         Order GetOrder(string orderSn);
        /// <summary>
        /// 根据主键id 更新 status 为 申请中
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        int UpdateOrderDetailStatus(List<long> ids, int status);

        #region 退款相关
        PageResult<OrderReFundModel> GetOrderReFundList(OrderReFundRequest request);
        #endregion
    }
}
