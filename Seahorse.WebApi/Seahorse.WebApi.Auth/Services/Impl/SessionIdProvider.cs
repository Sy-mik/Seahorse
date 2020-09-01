using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using Microsoft.Net.Http.Headers;
using System;
using System.Linq;

namespace Seahorse.WebApi.Auth.Services
{
    public class SessionIdProvider : ISessionIdProvider
    {
        private const string authenticationScheme = SeahorseAuthenticationHandler.AuthenticationScheme;
        private readonly ILogger<SessionIdProvider> logger;
        private readonly IJwtSessionTokenReader jwtReader;

        public SessionIdProvider(
            ILogger<SessionIdProvider> logger,
            IJwtSessionTokenReader jwtReader)
        {
            this.logger = logger;
            this.jwtReader = jwtReader;
        }

        public string GetSessionId(HttpContext httpContext)
        {
            if (!TryReadSessionJwt(httpContext, out string sessionJwt))
                return null;

            return jwtReader.ReadSessionId(sessionJwt);
        }

        private bool TryReadSessionJwt(HttpContext httpContext, out string sessionJwt)
        {
            if (httpContext is null)
            {
                logger.LogWarning("Session ID could not be retrieved from HTTP Context, because it's null");
                sessionJwt = null;
                return false;
            }

            if(!TryReadBearerHeader(httpContext, out string bearerHeader))
            {
                sessionJwt = null;
                return false;
            }

            sessionJwt = bearerHeader.Substring(authenticationScheme.Length + 1);
            return true;
        }

        private bool TryReadBearerHeader(HttpContext httpContext, out string bearerHeader)
        {
            string contextIdentifier = httpContext.TraceIdentifier;

            var headers = httpContext?.Request?.Headers;
            if (headers is null)
            {
                logger.LogWarning($"Session ID could not be retrieved from HTTP Context {contextIdentifier}, because headers are null.");
                bearerHeader = null;
                return false;
            }

            if (!headers.TryGetValue(HeaderNames.Authorization, out StringValues authorizationHeaders))
            {
                logger.LogWarning($"Session ID could not be retrieved from HTTP Context {contextIdentifier}, because authorization header was not found.");
                bearerHeader = null;
                return false;
            }

            return TryReadBearerHeader(authorizationHeaders, contextIdentifier, out bearerHeader);
        }

        private bool TryReadBearerHeader(
            StringValues authorizationHeaders,
            string contextIdentifier,
            out string bearerHeader)
        {
            var bearerHeaders = authorizationHeaders.Where(IsBearerHeader).ToList();
            if (bearerHeaders.Count != 1)
            {
                logger.LogWarning($"Session ID could not be retrieved from HTTP Context {contextIdentifier}, because there was invalid bearer's headers count: {bearerHeaders.Count}");
                bearerHeader = null;
                return false;
            }

            bearerHeader = bearerHeaders.Single();
            if (bearerHeader.Length <= authenticationScheme.Length + 1)
            {
                logger.LogWarning($"Session ID could not be retrieved from HTTP Context {contextIdentifier}, because bearer header was too short (length: {bearerHeader.Length})");
                bearerHeader = null;
                return false;
            }

            return true;
        }

        private bool IsBearerHeader(string header)
        {
            return header?.StartsWith(authenticationScheme, StringComparison.InvariantCultureIgnoreCase) == true;
        }
    }
}
