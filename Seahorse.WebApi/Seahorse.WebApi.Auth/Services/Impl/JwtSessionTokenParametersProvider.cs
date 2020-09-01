using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Seahorse.WebApi.Auth.Configuration;
using System;
using System.Text;

namespace Seahorse.WebApi.Auth.Services
{
    public class JwtSessionTokenParametersProvider : IJwtSessionTokenParametersProvider
    {
        private readonly IOptions<JwtSessionTokenOptions> configuration;
        private readonly Lazy<TokenValidationParameters> tokenValidationParameters;

        public JwtSessionTokenParametersProvider(IOptions<JwtSessionTokenOptions> configuration)
        {
            this.configuration = configuration;
            tokenValidationParameters = new Lazy<TokenValidationParameters>(BuildTokenValidationParameters);
        }

        public TokenValidationParameters GetParameters() => tokenValidationParameters.Value;

        private TokenValidationParameters BuildTokenValidationParameters()
        {
            return new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = GetTokenSigningKey(),
                ValidateIssuer = true,
                ValidateAudience = false,
                ValidIssuer = configuration.Value.Issuer,
                RequireExpirationTime = false
            };
        }

        private SymmetricSecurityKey GetTokenSigningKey()
        {
            string secret = configuration.Value.Secret;
            var secretBytes = Encoding.UTF8.GetBytes(secret);
            return new SymmetricSecurityKey(secretBytes);
        }
    }
}
