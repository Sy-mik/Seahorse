using Seahorse.WebApi.Contract.Auth;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Services
{
    public interface ISessionFacade
    {
        Task<Session> FindSessionAsync(string sessionId);
        bool IsSessionExpired(Session session);
        Task ProlongSessionAsync(Session session);
        Task<Session> StartSessionAsync(User user);
    }
}
