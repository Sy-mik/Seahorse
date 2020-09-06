using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Seahorse.WebApi.Auth.Configuration;
using Seahorse.WebApi.Auth.Repository;
using Seahorse.WebApi.Auth.Services;
using Seahorse.WebApi.Contract.Auth;
using Seahorse.WebApi.Db.Service;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AuthConfigurationExtensions
    {
        public static void UseSeahorseAuth(this IServiceCollection serviceCollection, IMvcCoreBuilder mvcCoreBuilder, IConfiguration configuration)
        {
            serviceCollection.AddIdentity<User, Role>(opts => opts.User.RequireUniqueEmail = true)
                .AddEntityFrameworkStores<AuthDbContext>()
                .AddDefaultTokenProviders();

            RegisterConfiguration(serviceCollection, configuration);
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

        private static void RegisterConfiguration(IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection.AddOptions<AuthOptions>().Bind(configuration.GetSection(AuthOptions.Auth));
            serviceCollection.AddOptions<JwtSessionTokenOptions>().Configure<IOptions<AuthOptions>>((jwtOptions, authOptions) =>
            {
                jwtOptions.Issuer = authOptions.Value.JwtSessionToken.Issuer;
                jwtOptions.Secret = authOptions.Value.JwtSessionToken.Secret;
            });
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
