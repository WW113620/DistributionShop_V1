using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using DistributionShop.Service.ConfigInfos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DistributionShop.Web.Areas.Admin.Controllers
{
    public class IntegralsController : Controller
    {
        IConfigInfosService _configInfosService;
        private string ScoreKey = "c_score";
        private string MoneyKey = "c_money";
        public IntegralsController(IConfigInfosService configInfosService)
        {
            _configInfosService = configInfosService;
        }

        public ActionResult Setting()
        {
            var c_score = _configInfosService.GetValueByKey(ScoreKey);
            var c_money = _configInfosService.GetValueByKey(MoneyKey);
            ViewBag.c_score = c_score;
            ViewBag.c_money = c_money;

            return View();
        }


        [HttpPost]
        public ActionResult SetRatio(SetRatioModel model)
        {
            if (model.Score<=0)
                return Json(new BaseResult(1, "设置积分比例不能小于零"));
            if (model.Money <= 0)
                return Json(new BaseResult(1, "设置人民币比例不能小于零"));
            var c_score = _configInfosService.GetValueByKey(ScoreKey);
            int scoreResult = 0;
            if (!string.IsNullOrWhiteSpace(c_score))
            {
                scoreResult = _configInfosService.UpdateOneValueByKey(ScoreKey, model.Score.ToString());
            }
            else
            {
                scoreResult = _configInfosService.InsertOne(new ConfigInfo
                {
                    Key= ScoreKey,
                    Value= model.Score.ToString(),
                    Describtion= "多余积分抵扣比例设置——积分"
                });
            }
            if (scoreResult <= 0)
            {
                return Json(new BaseResult(1, "更新积分抵扣比例失败"));
            }

            int moneyResult = 0;
            var c_money = _configInfosService.GetValueByKey("c_money");
            if (!string.IsNullOrWhiteSpace(c_money))
            {
                moneyResult = _configInfosService.UpdateOneValueByKey(MoneyKey, model.Money.ToString());
            }
            else
            {
                moneyResult = _configInfosService.InsertOne(new ConfigInfo
                {
                    Key = MoneyKey,
                    Value = model.Money.ToString(),
                    Describtion = "多余积分抵扣比例设置——货币"
                });
            }
            if (moneyResult <= 0)
            {
                return Json(new BaseResult(1, "更新货币（元）抵扣比例失败"));
            }

            return Json(new BaseResult(0, "登录成功"));
        }
     }
}