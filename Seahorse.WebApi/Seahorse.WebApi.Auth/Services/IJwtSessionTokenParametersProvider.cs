using Microsoft.IdentityModel.Tokens;

namespace Seahorse.WebApi.Auth.Services
{
    public interface IJwtSessionTokenParametersProvider
    {
        TokenValidationParameters GetParameters();
    }
}
