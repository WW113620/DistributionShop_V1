using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DistributionShop.Models.AutoMapper;

namespace DistributionShop.Web.App_Start
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