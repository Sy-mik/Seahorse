using Seahorse.WebApi.Auth.Contract;
using Seahorse.WebApi.Auth.Model;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Services
{
    public interface ISignInResultBuilder
    {
        Task<SignInBuilderResult> BuildSignInResultAsync(SignInRequest signInRequest);
    }
}
