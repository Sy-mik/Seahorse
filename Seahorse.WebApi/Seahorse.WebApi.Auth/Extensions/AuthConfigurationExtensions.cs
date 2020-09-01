using Microsoft.AspNetCore.Identity;
using Seahorse.WebApi.Auth.Configuration;
using Seahorse.WebApi.Auth.Services;
using Seahorse.WebApi.Contract.Auth;
using Seahorse.WebApi.Db.Service;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AuthConfigurationExtensions
    {
        public static void UseSeahorseAuth(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddIdentity<User, Role>(opts => opts.User.RequireUniqueEmail = true)
                .AddEntityFrameworkStores<AuthDbContext>()
                .AddDefaultTokenProviders();

            RegisterConfiguration(serviceCollection);
            RegisteredServices(serviceCollection);

            serviceCollection.AddAuthentication(opts =>
            {
                opts.AddScheme<SeahorseAuthenticationHandler>(SeahorseAuthenticationHandler.AuthenticationScheme, null);
                opts.DefaultAuthenticateScheme = SeahorseAuthenticationHandler.AuthenticationScheme;
                opts.DefaultChallengeScheme = SeahorseAuthenticationHandler.AuthenticationScheme;
                opts.DefaultSignInScheme = SeahorseAuthenticationHandler.AuthenticationScheme;
            });
        }

        private static void RegisterConfiguration(IServiceCollection serviceCollection)
        {
            serviceCollection.AddOptions<AuthOptions>(AuthOptions.Auth);
        }

        private static void RegisteredServices(IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IJwtSessionTokenParametersProvider, JwtSessionTokenParametersProvider>();
            serviceCollection.AddSingleton<IJwtSessionTokenReader, JwtSessionTokenReader>();
            serviceCollection.AddSingleton<ISessionIdProvider, SessionIdProvider>();
            serviceCollection.AddScoped<IAuthenticationTicketBuilder, AuthenticationTicketBuilder>();
            serviceCollection.AddScoped<ISessionFacade, SessionFacade>();
        }
    }
}
