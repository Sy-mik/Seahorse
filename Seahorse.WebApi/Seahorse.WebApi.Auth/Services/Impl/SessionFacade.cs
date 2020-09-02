using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Seahorse.WebApi.Auth.Configuration;
using Seahorse.WebApi.Contract.Auth;
using Seahorse.WebApi.Db.Service;
using System;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Services
{
    public class SessionFacade : ISessionFacade
    {
        private readonly AuthDbContext dbContext;
        private readonly ISystemClock systemClock;
        private readonly SessionOptions options;

        public SessionFacade(
            AuthDbContext dbContext,
            ISystemClock systemClock,
            IOptions<SessionOptions> options)
        {
            this.dbContext = dbContext;
            this.systemClock = systemClock;
            this.options = options.Value;
        }

        public async Task<Session> FindSessionAsync(string sessionId)
        {
            return await dbContext.Sessions
                .Include(session => session.User)
                .FirstOrDefaultAsync(session => session.Id == sessionId)
                .ConfigureAwait(false);
        }

        public bool IsSessionExpired(Session session)
        {
            if (session is null)
                return true;

            var sessionLastAccess = DateTimeOffset.FromUnixTimeMilliseconds(session.LastAccessUnixMilliseconds);
            var sessionEnd = sessionLastAccess.Add(options.SessionLifeSpan);
            return sessionEnd < systemClock.UtcNow;
        }

        public async Task ProlongSessionAsync(Session session)
        {
            if (session is null)
                throw new ArgumentNullException(nameof(session));

            session.LastAccessUnixMilliseconds = systemClock.UtcNow.ToUnixTimeMilliseconds();
            dbContext.Sessions.Update(session);
            await dbContext.SaveChangesAsync().ConfigureAwait(false);
        }

        public async Task<Session> StartSessionAsync(User user)
        {
            var session = new Session
            {
                Id = Guid.NewGuid().ToString(),
                User = user,
                LastAccessUnixMilliseconds = systemClock.UtcNow.ToUnixTimeMilliseconds()
            };

            await dbContext.Sessions.AddAsync(session).ConfigureAwait(false);
            await dbContext.SaveChangesAsync().ConfigureAwait(false);
            return session;
        }
    }
}
