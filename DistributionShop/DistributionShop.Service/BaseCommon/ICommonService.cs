using DistributionShop.Models.Utils;
using DistributionShop.Models.ViewModels.Charts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.BaseCommon
{
    public interface ICommonService:IDependency
    {
        List<ChartModels> GetUserLineData();

        List<KeyValue> GetProductPieData(AuditStatusEnums auditStatus);

        List<OrderChartModels> GetOrderLineData();
    }
}
