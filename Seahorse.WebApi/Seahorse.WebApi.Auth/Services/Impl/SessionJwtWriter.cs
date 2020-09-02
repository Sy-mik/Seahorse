using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Seahorse.WebApi.Contract.Auth;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Seahorse.WebApi.Auth.Services
{
    public class SessionJwtWriter : ISessionJwtWriter
    {
        private readonly ISessionJwtParametersProvider sessionJwtParameters;

        public SessionJwtWriter(
            ISessionJwtParametersProvider sessionJwtParameters)
        {
            this.sessionJwtParameters = sessionJwtParameters;
        }

        public string WriteSessionJwt(Session session)
        {
            if (session is null)
                throw new ArgumentNullException(nameof(session));

            var tokenHandler = new JwtSecurityTokenHandler();

            var signingKey = new SigningCredentials(
                sessionJwtParameters.GetSecurityKey(),
                SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = CreateSessionClaims(session),
                SigningCredentials = signingKey
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private ClaimsIdentity CreateSessionClaims(Session session)
        {
            var sessionIdClaim = new Claim(JwtRegisteredClaimNames.Sub, session.Id);
            var claims = new Claim[] { sessionIdClaim };
            return new ClaimsIdentity(claims);
        }
    }
}
