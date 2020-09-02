using Microsoft.IdentityModel.Tokens;

namespace Seahorse.WebApi.Auth.Services
{
    public interface ISessionJwtParametersProvider
    {
        TokenValidationParameters GetParameters();
        SymmetricSecurityKey GetSecurityKey();
    }
}
