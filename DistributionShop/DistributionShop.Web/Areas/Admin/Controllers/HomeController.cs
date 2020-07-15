using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels;
using DistributionShop.Models.ViewModels.Charts;
using DistributionShop.Service.BaseCommon;
using DistributionShop.Service.Orders;
using DistributionShop.Web.Attribute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    [AdminLogin]
    public class HomeController : Controller
    {
        private readonly DataContextEntities _dataContext;
        private readonly IOrderService _orderService;
        private readonly ICommonService _commonService;
        public HomeController(DataContextEntities dataContext, IOrderService orderService, ICommonService commonService)
        {
            this._dataContext = dataContext;
            this._orderService = orderService;
            this._commonService = commonService;
        }

        public ActionResult Index()
        {
            OrderStatisticsModel model = new OrderStatisticsModel();
            var orderList = _dataContext.Orders.Where(p => p.IsDel == 0 && (p.PayState == (int)PayStateEnums.未支付 || p.PayState == (int)PayStateEnums.已支付未发货 || p.PayState == (int)PayStateEnums.已支付已发货
            || p.PayState == (int)PayStateEnums.已收货 || p.PayState == (int)PayStateEnums.已完成 || p.PayState == (int)PayStateEnums.已退款)).ToList();

            model.NoPayCount = orderList.Count(p => p.PayState == (int)PayStateEnums.未支付);
            model.NoSendCount = orderList.Count(p => p.PayState == (int)PayStateEnums.已支付未发货);
            model.PayedCount = orderList.Count(p => p.PayState == (int)PayStateEnums.已支付未发货 || p.PayState == (int)PayStateEnums.已支付已发货 || p.PayState == (int)PayStateEnums.已收货 || p.PayState == (int)PayStateEnums.已完成);
            model.ApplyRefundCount = _orderService.OrderStatistics(WebReFundStatusEnums.申请中, PayStateEnums.已退款);

            return View(model);
        }

        [HttpPost]
        public JsonResult GetChartData()
        {
            ChartResultModel resultModel = new ChartResultModel();
            resultModel.OrderLineData = GetOrderLineData();
            resultModel.ProductPieData = GetProductPieData();
            resultModel.UserLineData = GetUserLineData();
            return Json(new { code = 0, data = resultModel });
        }

     
        #region 用户折线图

        public EchartsData<LineStyleValue> GetOrderLineData()
        {
            EchartsData<LineStyleValue> result = new EchartsData<LineStyleValue>() { code = 1, series = new List<LineStyleValue>() };

            var list = this._commonService.GetOrderLineData();
            List<OrderChartModels> viewList = new List<OrderChartModels>();

            viewList = list;

            result = new EchartsData<LineStyleValue>()
            {
                code = 0,
                name = "最近一月订单数据统计分析",
                xAxisData = viewList.Select(x => x.ShowDate).ToArray(),
                series = new List<LineStyleValue>
                    {
                        new LineStyleValue() {name="未支付",itemStyle=GetItemStyle(), data=viewList.Select(y=>y.NoPayCount).ToList() },
                        new LineStyleValue() {name="已支付",itemStyle=GetItemStyle(),data=viewList.Select(y=>y.PayedCount).ToList() },
                        new LineStyleValue() {name="已取消",itemStyle=GetItemStyle(),data=viewList.Select(y=>y.CancelCount).ToList() },
                        new LineStyleValue() {name="已退款",itemStyle=GetItemStyle(),data=viewList.Select(y=>y.RefundCount).ToList() },
                    }
            };

            return result;
        }

        public ItemStyle GetItemStyle()
        {
            AreaStyle areaStyle = new AreaStyle { type = "default" };
            LineNormal normal = new LineNormal { areaStyle = areaStyle };
            ItemStyle itemStyle = new ItemStyle { normal = normal };
            return itemStyle;
        }
        #endregion

        #region 上架产品饼状汇总图
        public EchartsData<KeyValue> GetProductPieData()
        {
            EchartsData<KeyValue> result = new EchartsData<KeyValue>() { code = 1, series = new List<KeyValue>() };
            List<KeyValue> list = this._commonService.GetProductPieData(AuditStatusEnums.销售中);

            result = new EchartsData<KeyValue>()
            {
                code = 0,
                name = "线上产品分类数据统计",
                xAxisData = list.Select(x => x.name).ToArray(),
                series = list
            };
            return result;
        }
        #endregion

        #region 用户折线图

        public EchartsData<LineValue> GetUserLineData()
        {
            EchartsData<LineValue> result = new EchartsData<LineValue>() { code = 1, series = new List<LineValue>() };

            var list = this._commonService.GetUserLineData();
            List<ChartModels> viewList = new List<ChartModels>();

            #region 
            DateTime end = DateTime.Now.Date;
            DateTime start = end.AddMonths(-1);
            var dateList = CommonHelper.GetDateList(start, end);

            ChartModels model = null;
            foreach (var item in dateList)
            {
                model = new ChartModels();
                var itemData = list.FirstOrDefault(p => p.ShowDate == item);
                model.ShowDate = item;
                model.UserCount = itemData != null ? itemData.UserCount : 0;
                model.AgentCount = itemData != null ? itemData.AgentCount : 0;
                viewList.Add(model);
            }
            #endregion

           // viewList = list;

            result = new EchartsData<LineValue>()
            {
                code = 0,
                name = "最近一月新增用户统计",
                xAxisData = viewList.Select(x => x.ShowDate).ToArray(),
                series = new List<LineValue>
                    {
                        new LineValue() {name="普通用户",data=viewList.Select(y=>y.UserCount).ToList() },
                        new LineValue() {name="代理用户",data=viewList.Select(y=>y.AgentCount).ToList() }
                    }
            };

            return result;
        }
        #endregion

    }
}