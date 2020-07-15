using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(DistributionShop.Web.Startup))]

namespace DistributionShop.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}