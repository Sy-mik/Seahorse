using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Seahorse.WebApi.Configuration;
using Seahorse.WebApi.Contract.Auth;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Test.Mock
{
    public class WebApplicationMockFactory : WebApplicationFactory<Startup>
    {
        public readonly ServiceUser[] TestUsers = new ServiceUser[]
        {
            new ServiceUser("test@test.com", "1qaz@WSX")
        };

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            var spaConfig = new Dictionary<string, string>
            {
                [$"{SpaConfiguration.Spa}:{nameof(SpaConfiguration.StaticFilesRootPath)}"] = "../../../../../web-app/seahorse/build",
                [$"{SpaConfiguration.Spa}:{nameof(SpaConfiguration.SourcePath)}"] = "../../../../../web-app/seahorse"
            };

            builder.ConfigureAppConfiguration(configBuilder => configBuilder.AddInMemoryCollection(spaConfig));
            builder.ConfigureServices(ConfigureServices);
        }

        private void ConfigureServices(IServiceCollection serviceDescriptors)
        {
            using var serviceProvider = serviceDescriptors.BuildServiceProvider();
            using var scope = serviceProvider.CreateScope();
            AddTestUsers(scope).ConfigureAwait(false).GetAwaiter().GetResult();
        }

        private async Task AddTestUsers(IServiceScope scope)
        {
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();

            foreach(var user in TestUsers)
            {
                await AddUser(userManager, user).ConfigureAwait(false);
            }
        }

        private async Task AddUser(UserManager<User> userManager, ServiceUser serviceUser)
        {
            var user = new User
            {
                UserName = serviceUser.UserName,
                Email = serviceUser.UserName
            };

            await userManager.CreateAsync(user, serviceUser.Password).ConfigureAwait(false);
        }
    }

    public class ServiceUser
    {
        public ServiceUser(string username, string password)
        {
            UserName = username;
            Password = password;
        }

        public string UserName { get; }
        public string Password { get; }
    }
}
