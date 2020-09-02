using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Seahorse.WebApi.Auth.Configuration;
using System;
using System.Text;

namespace Seahorse.WebApi.Auth.Services
{
    public class SessionJwtParametersProvider : ISessionJwtParametersProvider
    {
        private readonly IOptions<JwtSessionTokenOptions> configuration;
        private readonly Lazy<TokenValidationParameters> tokenValidationParameters;
        private readonly Lazy<SymmetricSecurityKey> securityKey;

        public SessionJwtParametersProvider(IOptions<JwtSessionTokenOptions> configuration)
        {
            this.configuration = configuration;
            tokenValidationParameters = new Lazy<TokenValidationParameters>(BuildTokenValidationParameters);
            securityKey = new Lazy<SymmetricSecurityKey>(GetTokenSigningKey);
        }

        public TokenValidationParameters GetParameters() => tokenValidationParameters.Value;

        public SymmetricSecurityKey GetSecurityKey() => securityKey.Value;

        private TokenValidationParameters BuildTokenValidationParameters()
        {
            return new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = GetSecurityKey(),
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
