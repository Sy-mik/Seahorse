using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Seahorse.WebApi.Configuration;
using Seahorse.WebApi.Maintenance;

namespace Seahorse.WebApi
{
    public class Startup
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment env;
        private readonly SpaConfiguration spaConfiguration;

        public Startup(
            IConfiguration configuration,
            IWebHostEnvironment env)
        {
            this.configuration = configuration;
            this.env = env;
            spaConfiguration = configuration.GetSection(SpaConfiguration.Spa).Get<SpaConfiguration>();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var mvcBuilder = services.AddMvcCore();
            services.UseSeahorseDatabase(configuration);
            services.UseSeahorseAuth(mvcBuilder, configuration);
            services.AddSpaStaticFiles(configuration => configuration.RootPath = spaConfiguration.StaticFilesRootPath);

            if (env.IsDevelopment())
                services.AddHostedService<ApplicationPartsLogger>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSpaStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseEndpoints(builder => builder.MapControllers());

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = spaConfiguration.SourcePath;
                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
