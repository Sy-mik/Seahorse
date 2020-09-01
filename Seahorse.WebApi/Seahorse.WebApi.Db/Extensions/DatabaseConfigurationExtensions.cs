using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Seahorse.WebApi.Db.Configuration;
using Seahorse.WebApi.Db.Service;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class DatabaseConfigurationExtensions
    {
        public static void UseSeahorseDatabase(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            DatabaseOptions options = ResolveDatabaseOptions(configuration);
            ConfigureDatabase(serviceCollection, options);
        }

        private static DatabaseOptions ResolveDatabaseOptions(IConfiguration configuration)
        {
            var options = configuration.GetSection(DatabaseOptions.Database)?.Get<DatabaseOptions>();

            if (options is null)
                throw new ArgumentException("Configuration does not contain database options", nameof(configuration));

            return options.DatabaseType switch
            {
                DatabaseType.InMemory => configuration.GetSection(DatabaseOptions.Database).Get<InMemoryDatabaseOptions>(),
                _ => throw new ArgumentException("Database configuration does not have a proper database type", nameof(configuration)),
            };
        }

        private static void ConfigureDatabase(IServiceCollection serviceCollection, DatabaseOptions options)
        {
            if (options is InMemoryDatabaseOptions inMemoryDatabaseOptions)
                UseInMemoryDatabase(serviceCollection, inMemoryDatabaseOptions);
        }

        private static void UseInMemoryDatabase(IServiceCollection serviceCollection, InMemoryDatabaseOptions options)
        {
            serviceCollection.AddDbContext<SeahorseDbContext>(opts => opts.UseInMemoryDatabase(options.SeahorseDbName));
            serviceCollection.AddDbContext<AuthDbContext>(opts => opts.UseInMemoryDatabase(options.AuthDbName));
        }
    }
}
