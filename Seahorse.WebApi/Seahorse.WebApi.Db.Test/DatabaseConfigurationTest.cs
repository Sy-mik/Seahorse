using FluentAssertions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Seahorse.WebApi.Db.Service;
using System.Collections.Generic;
using Xunit;

namespace Seahorse.WebApi.Db.Test
{
    public class DatabaseConfigurationTest
    {
        [Fact]
        public void Configure_AsInMemory_ResultDbContextProviderNameIsInMemory()
        {
            //Arrange
            var serviceCollection = new ServiceCollection();
            var configuration = GetInMemoryDatabaseConfiguration();
            serviceCollection.UseSeahorseDatabase(configuration);
            using ServiceProvider serviceProvider = serviceCollection.BuildServiceProvider();

            //Act
            using SeahorseDbContext dbContext = serviceProvider.GetRequiredService<SeahorseDbContext>();

            //Assert
            string expectedProviderName = nameof(Microsoft) +
                $".{nameof(Microsoft.EntityFrameworkCore)}" +
                $".{nameof(Microsoft.EntityFrameworkCore.InMemory)}";

            dbContext.Database.ProviderName.Should().Be(expectedProviderName);
        }

        private IConfiguration GetInMemoryDatabaseConfiguration()
        {
            var config = new Dictionary<string, string>
                {
                {"Database:DatabaseType", "InMemory"},
                {"Database:SeahorseDbName", "SeahorseDb"}
            };

            return new ConfigurationBuilder()
                .AddInMemoryCollection(config)
                .Build();
        }
    }
}
