using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Seahorse.WebApi.Db.Service
{
    public class SeahorseDbContext : DbContext
    {
        public SeahorseDbContext(DbContextOptions<SeahorseDbContext> options) : base(options) { }

        public DbSet<TestModel> TestModels { get; set; }
    }

    public class TestModel
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
    }
}
