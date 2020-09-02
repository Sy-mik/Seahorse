using Microsoft.AspNetCore.Identity;
using Seahorse.WebApi.Auth.Configuration;
using Seahorse.WebApi.Auth.Repository;
using Seahorse.WebApi.Auth.Services;
using Seahorse.WebApi.Contract.Auth;
using Seahorse.WebApi.Db.Service;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AuthConfigurationExtensions
    {
        public static void UseSeahorseAuth(this IServiceCollection serviceCollection, IMvcCoreBuilder mvcCoreBuilder)
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

            mvcCoreBuilder
                .AddApplicationPart(typeof(AuthConfigurationExtensions).Assembly)
                .AddControllersAsServices();
        }

        private static void RegisterConfiguration(IServiceCollection serviceCollection)
        {
            serviceCollection.AddOptions<AuthOptions>(AuthOptions.Auth);
        }

        private static void RegisteredServices(IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<ISessionJwtParametersProvider, SessionJwtParametersProvider>();
            serviceCollection.AddSingleton<ISessionJwtReader, SessionJwtReader>();
            serviceCollection.AddSingleton<ISessionJwtWriter, SessionJwtWriter>();
            serviceCollection.AddSingleton<ISessionIdProvider, SessionIdProvider>();
            serviceCollection.AddSingleton<IStaticPermissionMapper, StaticPermissionMapper>();
            serviceCollection.AddScoped<IAuthenticationTicketBuilder, AuthenticationTicketBuilder>();
            serviceCollection.AddScoped<ISessionFacade, SessionFacade>();
            serviceCollection.AddScoped<IUsersRepository, UsersRepository>();
            serviceCollection.AddScoped<ISignInResultBuilder, SignInResultBuilder>();
        }
    }
}
