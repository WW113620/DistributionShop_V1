using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using DistributionShop.Logic;
using DistributionShop.Models.Data;
using DistributionShop.Models.Utils;
using DistributionShop.Service;
using DistributionShop.Service.ConfigInfos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Compilation;
using System.Web.Http;
using System.Web.Mvc;

namespace DistributionShop.WebApi.App_Start
{
   public class AutofacConfig
    {
        public static void Register()
        {
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;
            var baseType = typeof(IDependency);
            var assemblys = BuildManager.GetReferencedAssemblies().Cast<Assembly>();
            builder.RegisterAssemblyTypes(assemblys.ToArray()).Where(t => baseType.IsAssignableFrom(t) && t != baseType).AsImplementedInterfaces().InstancePerLifetimeScope();
            builder.RegisterControllers(Assembly.GetExecutingAssembly());
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            RegisterContainerBuilder(builder);
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

        }

        public static void RegisterContainerBuilder(ContainerBuilder container)
        {
            container.RegisterType<DataContextEntities>();
            container.RegisterType<RedisHelper>();
            container.RegisterType<OrderLogic>();
            container.RegisterType<ShoppingCartLogic>();
            container.RegisterType<AccountLogic>();
            container.RegisterType<ProductLogic>();
            
        }
    }
}