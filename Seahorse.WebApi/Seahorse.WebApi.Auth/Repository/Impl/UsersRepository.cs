using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Seahorse.WebApi.Auth.Model;
using Seahorse.WebApi.Contract.Auth;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Repository
{
    public class UsersRepository : IUsersRepository
    {
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;

        public UsersRepository(
            UserManager<User> userManager,
            RoleManager<Role> roleManager)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        public Task<User> GetUserAsync(HttpContext httpContext)
        {
            return GetUserAsync(httpContext?.User);
        }

        public Task<User> GetUserAsync(ClaimsPrincipal claimsPrincipal)
        {
            return GetUserAsync(claimsPrincipal?.Identity?.Name);
        }

        public Task<User> GetUserAsync(string userName)
        {
            if (string.IsNullOrEmpty(userName))
            {
                return Task.FromResult<User>(null);
            }

            return userManager.FindByNameAsync(userName);
        }

        public Task<UserInfo> GetUserInfoAsync(HttpContext httpContext)
        {
            return GetUserInfoAsync(httpContext?.User);
        }

        public Task<UserInfo> GetUserInfoAsync(ClaimsPrincipal claimsPrincipal)
        {
            return GetUserInfoAsync(claimsPrincipal?.Identity?.Name);
        }

        public async Task<UserInfo> GetUserInfoAsync(string userName)
        {
            var user = await GetUserAsync(userName).ConfigureAwait(false);

            if (user is null)
                return null;

            var roleNames = await userManager
                .GetRolesAsync(user)
                .ConfigureAwait(false);

            var userInfo = new UserInfo
            {
                User = user,
                RoleNames = roleNames?.ToList() ?? new List<string>(),
                Permissions = StaticPermission.None,
                Roles = new List<Role>()
            };

            foreach (var roleName in roleNames)
            {
                var role = await roleManager.FindByNameAsync(roleName).ConfigureAwait(false);
                userInfo.Roles.Add(role);
                userInfo.Permissions |= role.StaticPermissions;
            }

            return userInfo;
        }
    }
}
