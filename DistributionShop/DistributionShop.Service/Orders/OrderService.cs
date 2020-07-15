using Dapper;
using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Orders
{
    public class OrderService : IOrderService
    {

        public int OrderStatistics(WebReFundStatusEnums status, PayStateEnums payState)
        {
            string sql = @" SELECT COUNT(0) AS iCount FROM [dbo].[Order] AS a
                            INNER JOIN [dbo].[OrderReFund] AS b ON a.OrderSn=b.[OrderSn]
                            WHERE a.IsDel=0 AND b.Status=@status AND a.PayState<>@payState ";
            var count = DapperHelper.Get<int>(sql, new { status = status, payState = payState });
            return count;
        }

        public OrderViewModel Get(string OrderSn)
        {
            string sql = @"  SELECT * FROM [dbo].[Order]  WHERE IsDel=0 AND OrderSn=@OrderSn ";
            var result = DapperHelper.Get<OrderViewModel>(sql, new { OrderSn = OrderSn });
            return result;
        }

        public PageResult<OrderViewModel> GetList(OrderRequest request)
        {
            PageResult<OrderViewModel> result = new PageResult<OrderViewModel>();
            string sql = @" SELECT * FROM [dbo].[Order]  WHERE IsDel=0 {0} ";
            string sort = " [Id] DESC ";

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (!string.IsNullOrEmpty(request.OrderSn))
            {
                string OrderSn = $"%{request.OrderSn.Trim()}%";
                sqlWhere.Append(" AND OrderSn like @OrderSn ");
                param.Add("OrderSn", OrderSn.Trim());
            }
            if (!string.IsNullOrEmpty(request.UserName))
            {
                string UserName = $"%{request.UserName.Trim()}%";
                sqlWhere.Append(" AND UserName like @UserName ");
                param.Add("UserName", UserName.Trim());
            }

            if (!string.IsNullOrEmpty(request.PayState))
            {
                int state = request.PayState.ToInt(0);
                if (state == (int)OrderPayStateEnums.已支付)
                {
                    sqlWhere.Append(" AND PayState in (1,2,3,4,9) ");
                }
                else if (state == 100)//待发货用
                {
                    sqlWhere.Append(" AND PayState =1 ");
                }
                else
                {
                    sqlWhere.Append(" AND PayState = @PayState ");
                    param.Add("PayState", state);
                }
            }

            if (!string.IsNullOrEmpty(request.Platform))
            {
                sqlWhere.Append(" AND Platform = @Platform ");
                param.Add("Platform", request.Platform.ToInt(0));
            }

            if (!string.IsNullOrEmpty(request.PayChannel))
            {
                sqlWhere.Append(" AND PayChannel = @PayChannel ");
                param.Add("PayChannel", request.PayChannel.ToInt(0));
            }

            if (!string.IsNullOrEmpty(request.StartDate))
            {
                sqlWhere.Append(" AND PayState=1 AND PayTime >= @StartDate ");
                param.Add("StartDate", request.StartDate);
            }

            if (!string.IsNullOrEmpty(request.EndDate))
            {
                sqlWhere.Append(" AND PayState=1 AND PayTime <= @EndDate ");
                param.Add("EndDate", request.EndDate);
            }

            sql = string.Format(sql, sqlWhere.ToString());
            result = DapperHelper.GetPageList<OrderViewModel>(sql, sort, request, param);
            return result;
        }


        public PageResult<OrderDetailViewModel> GetDetailList(OrderDetailRequest request)
        {
            PageResult<OrderDetailViewModel> result = new PageResult<OrderDetailViewModel>();
            string sql = @" SELECT a.*,b.[PayState],b.[Platform],b.[PayChannel],b.[PayTime] 
                            FROM [dbo].[OrderDetail] as a
                            INNER JOIN [dbo].[Order] as b ON a.OrderSn =b.OrderSn
                            WHERE b.[IsDel]=0 {0} ";
            string sort = " [Id] DESC ";

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (!string.IsNullOrEmpty(request.OrderSn))
            {
                string OrderSn = $"%{request.OrderSn.Trim()}%";
                sqlWhere.Append(" AND b.OrderSn like @OrderSn ");
                param.Add("OrderSn", OrderSn.Trim());
            }
            if (!string.IsNullOrEmpty(request.UserName))
            {
                string UserName = $"%{request.UserName.Trim()}%";
                sqlWhere.Append(" AND a.UserName like @UserName ");
                param.Add("UserName", UserName.Trim());
            }

            if (!string.IsNullOrEmpty(request.ProductName))
            {
                string ProductName = $"%{request.ProductName.Trim()}%";
                sqlWhere.Append(" AND a.ProductName like @ProductName ");
                param.Add("ProductName", ProductName.Trim());
            }

            if (!string.IsNullOrEmpty(request.PayState))
            {
                int state = request.PayState.ToInt(0);
                if (state == (int)PayStateEnums.未支付 || state == (int)PayStateEnums.已退款 || state == (int)PayStateEnums.已取消)
                {
                    sqlWhere.Append(" AND PayState = @PayState ");
                    param.Add("PayState", state);
                }
                else
                {
                    sqlWhere.Append(" AND PayState in (1,2,3,4) ");

                }
            }

            if (!string.IsNullOrEmpty(request.Platform))
            {
                sqlWhere.Append(" AND b.Platform = @Platform ");
                param.Add("Platform", request.Platform.ToInt(0));
            }

            if (!string.IsNullOrEmpty(request.PayChannel))
            {
                sqlWhere.Append(" AND b.PayChannel = @PayChannel ");
                param.Add("PayChannel", request.PayChannel.ToInt(0));
            }

            if (!string.IsNullOrEmpty(request.StartDate))
            {
                sqlWhere.Append(" AND b.PayState=1 AND b.PayTime >= @StartDate ");
                param.Add("StartDate", request.StartDate);
            }

            if (!string.IsNullOrEmpty(request.EndDate))
            {
                sqlWhere.Append(" AND b.PayState=1 AND b.PayTime <= @EndDate ");
                param.Add("EndDate", request.EndDate);
            }

            sql = string.Format(sql, sqlWhere.ToString());
            result = DapperHelper.GetPageList<OrderDetailViewModel>(sql, sort, request, param);
            return result;
        }

        /// <summary>
        /// 添加订单和订单详情
        /// </summary>
        /// <param name="order"></param>
        /// <param name="orderDetailList"></param>
        /// <returns></returns>
        public bool AddOrderAndOrderDetail(Order order, List<OrderDetail> orderDetailList, Order_Address order_Address)
        {
            if (order == null || (!orderDetailList?.Any() ?? true) || order_Address == null)
            {
                return false;
            }
            using (IDbConnection conn = DapperHelper.GetConnection(string.Empty))
            {
                conn.Open();
                var transaction = conn.BeginTransaction();
                try
                {
                    #region 保存主订单

                    string sqlText1 = @"
INSERT INTO [dbo].[Order]
           ([UserId]
           ,[UserName]
           ,[RealName]
           ,[Postage]
           ,[OrderSn]
           ,[PayState]
           ,[TotalPayPrice]
           ,[DiscountAmount]
           ,[Platform]
           ,[PayChannel]
           ,[IsDel]
           ,[Remark]
           ,[AddTime]
           ,[UpdateTime])
     VALUES
           (@UserId
           ,@UserName
           ,@RealName
           ,@Postage
           ,@OrderSn
           ,@PayState
           ,@TotalPayPrice
           ,@DiscountAmount
           ,@Platform
           ,@PayChannel
           ,0
           ,@Remark
           ,GETDATE()
           ,GETDATE())
select @@identity
";
                    int id = DapperHelper.Execute(sqlText1, order, transaction);
                    if (id <= 0)
                    {
                        transaction.Rollback();
                        return false;
                    }

                    #endregion

                    #region 保存订单详情列表

                    string sqlText2 = @"
INSERT INTO [dbo].[OrderDetail]
           ([UserName]
           ,[OrderSn]
           ,[ProductId]
           ,[ProductName]
           ,[ShopId]
           ,[ShopName]
           ,[OriginalPrice]
           ,[WebPrice]
           ,[OrderProductAmount]
           ,[Status]
           ,[IsDel]
           ,[ProductImagePath]
           ,[AddTime])
     VALUES
{0}
";
                    var whereText = string.Empty;
                    var whereStrList = new List<string>();
                    var parameters = new DynamicParameters();
                    for (int i = 0; i < orderDetailList.Count; i++)
                    {
                        whereStrList.Add($"(@UserName{i} ,@OrderSn{i} ,@ProductId{i} ,@ProductName{i} ,@ShopId{i} ,@ShopName{i} ,@OriginalPrice{i} ,@WebPrice{i} ,@OrderProductAmount{i},0 ,0,@ProductImagePath{i} ,GETDATE())");
                        parameters.Add($"UserName{i}", orderDetailList[i].UserName);
                        parameters.Add($"OrderSn{i}", orderDetailList[i].OrderSn);
                        parameters.Add($"ProductId{i}", orderDetailList[i].ProductId);
                        parameters.Add($"ProductName{i}", orderDetailList[i].ProductName);
                        parameters.Add($"ShopId{i}", orderDetailList[i].ShopId);
                        parameters.Add($"ShopName{i}", orderDetailList[i].ShopName);
                        parameters.Add($"OriginalPrice{i}", orderDetailList[i].OriginalPrice);
                        parameters.Add($"WebPrice{i}", orderDetailList[i].WebPrice);
                        parameters.Add($"OrderProductAmount{i}", orderDetailList[i].OrderProductAmount);
                        parameters.Add($"ProductImagePath{i}", orderDetailList[i].ProductImagePath);
                    }
                    whereText = string.Join(",", whereStrList);
                    sqlText2 = string.Format(sqlText2, whereText);
                    int result2 = DapperHelper.Execute(sqlText2, parameters, transaction);
                    if (result2 <= 0)
                    {
                        transaction.Rollback();
                        return false;
                    }

                    #endregion

                    #region 固化订单地址

                    var sqlText3 = @"
INSERT INTO [dbo].[Order_Address]
           ([UserId]
           ,[OrderSn]
           ,[ProvinceId]
           ,[ProvinceName]
           ,[CityId]
           ,[CityName]
           ,[CountryId]
           ,[CountryName]
            ,[DistrictId]
           ,[DistrictName]
           ,[TelPhone]
           ,[PrePhoneType]
           ,[Address]
           ,[Contact]
           ,[Notes]
           ,[RealName]
           ,[PostCode]
           ,[IdentityCard]
           ,[IDPhotoNegative]
           ,[IDPhotoPositive]
           ,[AddTime]
           ,[IsActive])
     VALUES
           (@UserId
           ,@OrderSn
           ,@ProvinceId
           ,@ProvinceName
           ,@CityId
           ,@CityName
           ,@CountryId
           ,@CountryName
            ,@DistrictId
           ,@DistrictName
           ,@TelPhone
           ,@PrePhoneType
           ,@ADDRESS
           ,@Contact
           ,@Notes
           ,@RealName
           ,@PostCode
           ,@IdentityCard
           ,@IDPhotoNegative
           ,@IDPhotoPositive
           ,GETDATE()
           ,1)
";
                    int id3 = DapperHelper.Execute(sqlText3, order_Address, transaction);
                    if (id3 <= 0)
                    {
                        transaction.Rollback();
                        return false;
                    }

                    #endregion

                    transaction.Commit();
                    return true;
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    throw ex;
                }
            }
        }



        /// <summary>
        /// 前端查询分页列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Obsolete("无法根据订单分页，暂时废弃")]
        public PageResult<OrderHeadViewModel> GetListForHead(OrderForHeadRequest request)
        {
            var result = new PageResult<OrderHeadViewModel>();
            string sql = @" 
SELECT 
	O.OrderSn,
	O.AddTime,
	O.TotalPayPrice,
	O.Postage,
	OD.ProductName,
    OD.ProductImagePath,
	O.RealName,
	OD.WebPrice
FROM [dbo].[Order] AS O WITH(NOLOCK)
LEFT JOIN [dbo].[OrderDetail] AS OD WITH(NOLOCK) ON O.OrderSn=OD.OrderSn
WHERE O.IsDel=0 
AND OD.IsDel=0
AND O.PayState=5
";
            string sort = " O.AddTime DESC ";

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();


            //if (request.EndAddTime != null)
            //{
            //    sqlWhere.Append(" AND O.AddTime <= @EndAddTime ");
            //    param.Add("EndAddTime", request.EndAddTime);
            //}
            if (string.IsNullOrWhiteSpace(request.MixtureWords))
            {
                var mixtureWords = request.MixtureWords.Trim();
                //string UserName = $"%{request.UserName.Trim()}%";
                var idWhere = string.Empty;
                if (ConvertHelper.IsIntegerNumber(request.MixtureWords))
                {
                    idWhere = ConvertHelper.IsIntegerNumber(request.MixtureWords) ? "OR O.Id=@Id" : "";
                    param.Add("Id", mixtureWords);
                }
                sqlWhere.Append(string.Format(" AND ( OD.ProductName Like @ProductName OR O.OrderSn =@OrderSn {0})", idWhere));
                param.Add("ProductName", $"%{mixtureWords}%");
                param.Add("OrderSn", mixtureWords);
            }
            sql = string.Format(sql, sqlWhere);
            result = DapperHelper.GetPageList<OrderHeadViewModel>(sql, sort, request, param);
            return result;
        }


        /// <summary>
        /// 订单分页(因为需要根据订单下的商品名模糊查询)
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public PageResult<OrdersHeadViewModel> GetListForHeads(OrderForHeadRequest request)
        {
            string sqlText = @"
SELECT {0}
FROM
(
	SELECT ROW_NUMBER() OVER ( PARTITION  BY T.OrderSn ORDER BY T.AddTime) RowId,*
	FROM
	(
		SELECT 
			O.OrderSn,
			O.AddTime,
            O.TotalPayPrice,
            O.Postage,
			OD.ProductName,
            O.RealName,
            O.PayState
		FROM [dbo].[Order] AS O WITH(NOLOCK)
		LEFT JOIN [dbo].[OrderDetail] AS OD WITH(NOLOCK) ON O.OrderSn=OD.OrderSn
		WHERE O.IsDel=0 
		AND OD.IsDel=0
        {1}
	) T
) U
WHERE RowId<2
{2}
";
            var result = new PageResult<OrdersHeadViewModel>();

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();

            if (!string.IsNullOrWhiteSpace(request.UserName))
            {
                sqlWhere.Append(" AND O.UserName = @UserName ");
                param.Add("UserName", request.UserName);
            }
            if (request.EndAddTimeType == (int)OrderSearchMonthTypeEnums.近3个月订单)
            {
                sqlWhere.Append(" AND O.AddTime > @EndAddTime ");
                param.Add("EndAddTime", DateTime.Now.Date.AddMonths(-3));
            }
            else if (request.EndAddTimeType == (int)OrderSearchMonthTypeEnums.近2个月订单)
            {
                sqlWhere.Append(" AND O.AddTime > @EndAddTime ");
                param.Add("EndAddTime", DateTime.Now.Date.AddMonths(-2));
            }

            if (!string.IsNullOrWhiteSpace(request.MixtureWords))
            {
                var mixtureWords = request.MixtureWords.Trim();
                //string UserName = $"%{request.UserName.Trim()}%";
                var idWhere = string.Empty;
                if (ConvertHelper.IsIntegerNumber(request.MixtureWords))
                {
                    idWhere = ConvertHelper.IsIntegerNumber(request.MixtureWords) ? "OR O.Id=@Id" : "";
                    param.Add("Id", mixtureWords);
                }
                sqlWhere.Append(string.Format(" AND ( OD.ProductName Like @ProductName OR O.OrderSn =@OrderSn {0})", idWhere));
                param.Add("ProductName", $"%{mixtureWords}%");
                param.Add("OrderSn", mixtureWords);
            }

            if (request.WebPayState >= 0)
            {
                //int state = request.WebPayState;
                //sqlWhere.Append(" AND O.PayState = @PayState ");
                //param.Add("PayState", state);

                if (request.WebPayState == (int)WebPayStateEnums.待付款)
                {
                    sqlWhere.Append($" AND O.PayState in ({(int)PayStateEnums.未支付},{(int)PayStateEnums.支付失败}) ");
                    //sqlWhere.Append(" AND O.PayState = @PayState ");
                    //param.Add("PayState", (int)PayStateEnums.未支付);
                }
                else if (request.WebPayState == (int)WebPayStateEnums.待发货)
                {
                    //sqlWhere.Append(" AND O.PayState = @PayState ");
                    //param.Add("PayState", (int)PayStateEnums.已支付未发货);
                    sqlWhere.Append($" AND O.PayState in ({(int)PayStateEnums.已支付未发货},{(int)PayStateEnums.已支付已发货}) ");
                }
                //else if (request.WebPayState == (int)WebPayStateEnums.已发货)
                //{
                //    sqlWhere.Append($" AND O.PayState in ({(int)PayStateEnums.已支付已发货},{(int)PayStateEnums.已收货}) ");
                //}
                else if (request.WebPayState == (int)WebPayStateEnums.已完成)
                {
                    sqlWhere.Append($" AND O.PayState in ({(int)PayStateEnums.已收货},{(int)PayStateEnums.已完成}) ");
                    //sqlWhere.Append(" AND O.PayState = @PayState ");
                    //param.Add("PayState", (int)PayStateEnums.已完成);
                }
                else if (request.WebPayState == (int)WebPayStateEnums.退货退款)
                {
                    sqlWhere.Append($" AND (O.PayState in ({(int)PayStateEnums.已退款},{(int)PayStateEnums.已拒绝}) OR OD.Status in ({(int)WebOrderDetailStatusEnums.退款申请中},{(int)WebOrderDetailStatusEnums.已退款}))");
                }
            }

            int pageSize = request.limit;
            var pageStart = (request.page - 1) * request.limit;
            var pageWhere = string.Format("ORDER BY U.AddTime DESC OFFSET {0} ROWS FETCH NEXT {1} ROWS ONLY", pageStart, pageSize);
            string pageSql = string.Format(sqlText, "*", sqlWhere, pageWhere);
            string countSql = string.Format(sqlText, "COUNT(*)", sqlWhere, "");

            using (IDbConnection conn = DapperHelper.GetConnection(""))
            {
                conn.Open();
                request.count = conn.Query<long>(countSql, param, commandTimeout: 30).FirstOrDefault();
                result.page = request;
                result.code = 0;
                result.msg = "";
                result.data = conn.Query<OrdersHeadViewModel>(pageSql, param, commandTimeout: 30).ToList();
                return result;
            }
        }

        /// <summary>
        /// 根据订单号查询所有下面的订单商品详情
        /// </summary>
        /// <param name="orderSnList"></param>
        /// <returns></returns>
        public List<OrderDetail> GetOrderDetailListByOrderSnList(List<string> orderSnList)
        {
            if (orderSnList == null || !orderSnList.Any())
            {
                return new List<OrderDetail>();
            }
            string sqlText = @"
SELECT [Id]
      ,[UserName]
      ,[OrderSn]
      ,[ProductId]
      ,[ProductName]
      ,[ProductImagePath]
      ,[ShopId]
      ,[ShopName]
      ,[OriginalPrice]
      ,[WebPrice]
      ,[OrderProductAmount]
      ,[IsDel]
      ,[AddTime]
  FROM [dbo].[OrderDetail]
WHERE IsDel=0 AND OrderSn IN @OrderSns
";
            return DapperHelper.Query<OrderDetail>(sqlText, new
            {
                OrderSns = orderSnList
            });
        }

        /// <summary>
        /// 个人中心-订单详情
        /// </summary>
        /// <param name="orderId"></param>
        /// <returns></returns>
        public OrderDetailViewModelData GeOrderDetailViewByOrderSn(string orderSn)
        {
            string sqlText = @" SELECT 
                                 OA.RealName,
                                 OA.PrePhoneType,
                                 OA.TelPhone,
                                 OA.ProvinceName,
                                 OA.CityName,
                                 OA.CountryName,
                                 OA.DistrictName,
                                 OA.Address,
                                 O.OrderSn,
                                 O.AddTime,
                                 O.PayState,
                                 O.[TotalPayPrice],
                                 O.[Postage]
                                FROM [dbo].[Order] AS O WITH(NOLOCK)
                                JOIN [dbo].[Order_Address] AS OA  WITH(NOLOCK) ON O.OrderSn=OA.OrderSn
                                WHERE O.IsDel=0 
                                AND OA.[IsActive]=1 
                                AND O.OrderSn=@OrderSn ";
            return DapperHelper.Get<OrderDetailViewModelData>(sqlText, new
            {
                OrderSn = orderSn
            });
        }

        /// <summary>
        ///  个人中心-查询订单下详细列表
        /// </summary>
        /// <param name="orderSn"></param>
        /// <returns></returns>
        public List<OrderDetail> GetOrderDetailListByByOrderSn(string orderSn)
        {
            string sqlText = @"
SELECT *
FROM [dbo].[OrderDetail] WITH(NOLOCK)
WHERE IsDel=0 
AND OrderSn=@OrderSn
";
            return DapperHelper.Query<OrderDetail>(sqlText, new
            {
                OrderSn = orderSn
            });
        }

        /// <summary>
        /// 取消订单
        /// </summary>
        /// <param name="orderSn"></param>
        /// <returns></returns>
        public int CancelOrder(string orderSn, string userName)
        {
            string sqlText = @"
UPDATE [dbo].[Order]
SET PayState=@PayState
WHERE UserName=@UserName 
AND OrderSn=@OrderSn
";
            return DapperHelper.Execute(sqlText, new
            {
                OrderSn = orderSn,
                UserName = userName,
                PayState = (int)PayStateEnums.已取消
            });
        }

        /// <summary>
        /// 查询一个
        /// </summary>
        /// <param name="orderSn"></param>
        /// <param name="userName"></param>
        /// <returns></returns>
        public Order GetOrder(string orderSn)
        {
            string sqlText = @"
SELECT *
FROM [dbo].[OrderDetail] WITH(NOLOCK)
WHERE IsDel=0 
AND OrderSn=@OrderSn
";
            return DapperHelper.Get<Order>(sqlText, new
            {
                OrderSn = orderSn,
            });
        }
        /// <summary>
        /// 根据主键id 更新 status 为1 已经退货
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public int UpdateOrderDetailStatus(List<long> ids, int status)
        {
            string sql = @"update orderdetail set [status]=@status where id in @ids";
            return DapperHelper.Execute(sql, new { ids = ids.ToArray(), status = status });

        }

        #region 退款相关

        public PageResult<OrderReFundModel> GetOrderReFundList(OrderReFundRequest request)
        {
            PageResult<OrderReFundModel> result = new PageResult<OrderReFundModel>();
            string sql = @" select * from OrderReFund   WHERE IsDel=0 {0} ";
            string sort = " [Id] DESC ";

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (!string.IsNullOrEmpty(request.OrderSn))
            {
                string OrderSn = $"%{request.OrderSn.Trim()}%";
                sqlWhere.Append(" AND OrderSn like @OrderSn ");
                param.Add("OrderSn", OrderSn.Trim());
            }
            if (!string.IsNullOrEmpty(request.ReUserName))
            {
                string ReUserName = $"%{request.ReUserName.Trim()}%";
                sqlWhere.Append(" AND ReUserName like @ReUserName ");
                param.Add("ReUserName", ReUserName.Trim());
            }

            if (!string.IsNullOrEmpty(request.ReStatus))
            {
                int state = request.ReStatus.ToInt(0);
                sqlWhere.Append(" AND status = @status ");
                param.Add("status", state);

            }

            if (!string.IsNullOrEmpty(request.StartDate))
            {
                sqlWhere.Append(" AND AddTime >= @StartDate ");
                param.Add("StartDate", request.StartDate);
            }

            if (!string.IsNullOrEmpty(request.EndDate))
            {
                sqlWhere.Append("  AND AddTime <= @EndDate ");
                param.Add("EndDate", request.EndDate);
            }

            sql = string.Format(sql, sqlWhere.ToString());
            result = DapperHelper.GetPageList<OrderReFundModel>(sql, sort, request, param);
            return result;
        }
        #endregion
    }
}
