using Microsoft.AspNetCore.Http;

namespace Seahorse.WebApi.Auth.Services
{
    public interface ISessionIdProvider
    {
        string GetSessionId(HttpContext httpContext);
    }
}
