using Microsoft.AspNetCore.Authentication;
using Seahorse.WebApi.Contract.Auth;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Services
{
    public interface IAuthenticationTicketBuilder
    {
        Task<AuthenticationTicket> BuildTicketAsync(Session session);
    }
}
