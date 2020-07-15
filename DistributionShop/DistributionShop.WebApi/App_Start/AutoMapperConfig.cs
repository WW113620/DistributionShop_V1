using AutoMapper;
using DistributionShop.Models.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DistributionShop.WebApi.App_Start
{
    public class AutoMapperConfig
    {
        public static void Register()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<MapperProfile>();
            });
        }

    }


}