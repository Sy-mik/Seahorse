using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Services
{
    public class SeahorseAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        public const string AuthenticationScheme = "Bearer";

        private readonly ISessionFacade sessionFacade;
        private readonly ISessionIdProvider sessionIdProvider;
        private readonly IAuthenticationTicketBuilder authenticationTicketBuilder;

        protected SeahorseAuthenticationHandler(
            IOptionsMonitor<AuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock,
            ISessionFacade sessionFacade,
            ISessionIdProvider sessionIdProvider,
            IAuthenticationTicketBuilder authenticationTicketBuilder) : base(options, logger, encoder, clock)
        {
            this.sessionFacade = sessionFacade;
            this.sessionIdProvider = sessionIdProvider;
            this.authenticationTicketBuilder = authenticationTicketBuilder;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            if (IsAnonymousAllowed())
                return AuthenticateResult.NoResult();

            var sessionId = sessionIdProvider.GetSessionId(Context);
            if (string.IsNullOrEmpty(sessionId))
                return AuthenticateResult.Fail($"Session ID could not be read from HTTP Context {Context.TraceIdentifier}.");

            var session = await sessionFacade.FindSessionAsync(sessionId).ConfigureAwait(false);
            if (session is null)
                return AuthenticateResult.Fail($"Session with ID {sessionId} could not be found");

            if (sessionFacade.IsSessionExpired(session))
                return AuthenticateResult.Fail($"Session with ID {sessionId} has expired");

            await sessionFacade.ProlongSessionAsync(session).ConfigureAwait(false);
            var authenticationTicket = await authenticationTicketBuilder.BuildTicketAsync(session).ConfigureAwait(false);
            if (authenticationTicket is null)
                return AuthenticateResult.Fail($"Authentication ticket could not be build for session {sessionId}");

            return AuthenticateResult.Success(authenticationTicket);
        }

        private bool IsAnonymousAllowed()
        {
            return Context?.GetEndpoint()?.Metadata?.GetMetadata<IAllowAnonymous>() != null;
        }
    }
}
