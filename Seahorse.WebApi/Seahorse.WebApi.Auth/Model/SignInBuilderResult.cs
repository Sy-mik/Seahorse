using Seahorse.WebApi.Auth.Contract;

namespace Seahorse.WebApi.Auth.Model
{
    public class SignInBuilderResult
    {
        public SignInResult SignInResult { get; set; }
        public SignInBuilderResultStatus Status { get; set; }
    }

    public enum SignInBuilderResultStatus
    {
        Ok,
        InvalidLoginOrPassword,
        UserNotFound
    }
}
