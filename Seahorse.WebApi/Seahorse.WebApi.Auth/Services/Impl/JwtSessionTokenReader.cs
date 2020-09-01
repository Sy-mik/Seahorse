using Microsoft.Extensions.Logging;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Seahorse.WebApi.Auth.Services
{
    public class JwtSessionTokenReader : IJwtSessionTokenReader
    {
        private readonly IJwtSessionTokenParametersProvider jwtSessionTokenParametersProvider;
        private readonly ILogger<JwtSessionTokenReader> logger;

        public JwtSessionTokenReader(
            IJwtSessionTokenParametersProvider jwtSessionTokenParametersProvider,
            ILogger<JwtSessionTokenReader> logger)
        {
            this.jwtSessionTokenParametersProvider = jwtSessionTokenParametersProvider;
            this.logger = logger;
        }

        public string ReadSessionId(string token)
        {
            ClaimsPrincipal tokenClaims = ReadTokenClaims(token);
            if (tokenClaims is null)
                return null;

            var subjectClaim = tokenClaims.FindFirst(JwtRegisteredClaimNames.Sub);

            if(subjectClaim is null)
            {
                logger.LogWarning("Could not read session key from JWT, because it does not contain subject");
                return null;
            }

            return subjectClaim.Value;
        }

        private ClaimsPrincipal ReadTokenClaims(string token)
        {
            if (string.IsNullOrEmpty(token))
            {
                logger.LogWarning("Could not read JWT, because the token is null or empty");
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var validationParameters = jwtSessionTokenParametersProvider.GetParameters();

            try
            {
                return tokenHandler.ValidateToken(token, validationParameters, out _);
            }
            catch(Exception e)
            {
                logger.LogError(e, $"Exception occured when validating JWT token: {token}");
                return null;
            }
        }
    }
}
