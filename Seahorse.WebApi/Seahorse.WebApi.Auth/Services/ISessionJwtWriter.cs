using Seahorse.WebApi.Contract.Auth;

namespace Seahorse.WebApi.Auth.Services
{
    public interface ISessionJwtWriter
    {
        string WriteSessionJwt(Session session);
    }
}
