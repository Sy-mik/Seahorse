using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Seahorse.WebApi.Contract.Auth;

namespace Seahorse.WebApi.Db.Service
{
    public class AuthDbContext : IdentityDbContext<User, Role, string>
    {
        public AuthDbContext() { }

        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options) { }

        public DbSet<Session> Sessions { get; set; }
    }
}
