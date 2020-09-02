using Microsoft.AspNetCore.Http;
using Seahorse.WebApi.Auth.Model;
using Seahorse.WebApi.Contract.Auth;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Repository
{
    public interface IUsersRepository
    {
        Task<User> GetUserAsync(HttpContext httpContext);
        Task<User> GetUserAsync(ClaimsPrincipal claimsPrincipal);
        Task<User> GetUserAsync(string userName);
        Task<UserInfo> GetUserInfoAsync(HttpContext httpContext);
        Task<UserInfo> GetUserInfoAsync(ClaimsPrincipal claimsPrincipal);
        Task<UserInfo> GetUserInfoAsync(string userName);
    }
}
