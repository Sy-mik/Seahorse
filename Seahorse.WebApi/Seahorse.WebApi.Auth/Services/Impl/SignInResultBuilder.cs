using Microsoft.AspNetCore.Identity;
using Seahorse.WebApi.Auth.Contract;
using Seahorse.WebApi.Auth.Model;
using Seahorse.WebApi.Auth.Repository;
using Seahorse.WebApi.Contract.Auth;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Services
{
    public class SignInResultBuilder : ISignInResultBuilder
    {
        private readonly SignInManager<User> signInManager;
        private readonly ISessionFacade sessionFacade;
        private readonly IUsersRepository usersRepository;
        private readonly ISessionJwtWriter sessionJwtWriter;
        private readonly IStaticPermissionMapper permissionMapper;

        public SignInResultBuilder(
            SignInManager<User> signInManager,
            ISessionFacade sessionFacade,
            IUsersRepository usersRepository,
            ISessionJwtWriter sessionJwtWriter,
            IStaticPermissionMapper permissionMapper)
        {
            this.signInManager = signInManager;
            this.sessionFacade = sessionFacade;
            this.usersRepository = usersRepository;
            this.sessionJwtWriter = sessionJwtWriter;
            this.permissionMapper = permissionMapper;
        }

        public async Task<SignInBuilderResult> BuildSignInResultAsync(SignInRequest signInRequest)
        {
            var signInResult = await signInManager
                    .PasswordSignInAsync(signInRequest.Login, signInRequest.Password, false, false)
                    .ConfigureAwait(false);

            if (!signInResult.Succeeded)
                return new SignInBuilderResult { Status = SignInBuilderResultStatus.InvalidLoginOrPassword };

            var userInfo = await usersRepository.GetUserInfoAsync(signInRequest.Login).ConfigureAwait(false);
            if (userInfo?.User is null)
                return new SignInBuilderResult { Status = SignInBuilderResultStatus.UserNotFound };

            var session = await sessionFacade.StartSessionAsync(userInfo.User).ConfigureAwait(false);
            var sessionToken = sessionJwtWriter.WriteSessionJwt(session);

            var result = new Contract.SignInResult
            {
                Token = sessionToken,
                RoleNames = userInfo.RoleNames,
                Permissions = permissionMapper.MapToSubPermissions(userInfo.Permissions)
            };

            return new SignInBuilderResult
            {
                SignInResult = result,
                Status = SignInBuilderResultStatus.Ok
            };
        }
    }
}
