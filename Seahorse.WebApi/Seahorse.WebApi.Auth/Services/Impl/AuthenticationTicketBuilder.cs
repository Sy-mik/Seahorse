using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Logging;
using Seahorse.WebApi.Auth.Model;
using Seahorse.WebApi.Contract.Auth;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Services
{
    public class AuthenticationTicketBuilder : IAuthenticationTicketBuilder
    {
        private const string authenticationScheme = SeahorseAuthenticationHandler.AuthenticationScheme;
        private readonly UserManager<User> userManager;
        private readonly ILogger<AuthenticationTicketBuilder> logger;

        public AuthenticationTicketBuilder(
            UserManager<User> userManager,
            ILogger<AuthenticationTicketBuilder> logger)
        {
            this.userManager = userManager;
            this.logger = logger;
        }

        public async Task<AuthenticationTicket> BuildTicketAsync(Session session)
        {
            if(session is null)
            {
                logger.LogWarning("Authentication ticket could not be build, because session is null");
                return null;
            }

            var claimsPrincipal = await BuildUserClaimsPrincipal(session).ConfigureAwait(false);
            if (claimsPrincipal is null)
                return null;

            return new AuthenticationTicket(
                claimsPrincipal,
                new AuthenticationProperties(),
                authenticationScheme);
        }

        private async Task<ClaimsPrincipal> BuildUserClaimsPrincipal(Session session)
        {
            var user = session.User;
            if(user is null)
            {
                logger.LogWarning($"Authentication ticket could not be build, because user assigned to session {session.Id} is null");
                return null;
            }

            var claims = await userManager.GetClaimsAsync(user).ConfigureAwait(false);
            if(claims is null)
            {
                logger.LogWarning($"Authentication ticket could not be build, because claims for user {session.UserId} are null");
                return null;
            }

            claims.Add(new Claim(CustomClaimTypes.SessionId, session.Id));

            AddClaimIfNotExist(claims, ClaimTypes.Name, user.UserName);
            AddClaimIfNotExist(claims, ClaimTypes.Email, user.Email);

            var claimsIdentity = new ClaimsIdentity(claims);
            return new ClaimsPrincipal(claimsIdentity);
        }

        private void AddClaimIfNotExist(IList<Claim> claims, string claimType, string value)
        {
            if (claims is null)
                return;

            if (!claims.Any(claim => claim.Type == claimType))
                return;

            claims.Add(new Claim(claimType, value));
        }
    }
}
