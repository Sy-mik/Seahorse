using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Seahorse.WebApi.Auth.Contract;
using Seahorse.WebApi.Auth.Model;
using Seahorse.WebApi.Auth.Services;
using System;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Auth.Controller
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AuthController: ControllerBase
    {
        private readonly ILogger<AuthController> logger;
        private readonly ISignInResultBuilder signInResultBuilder;

        public AuthController(
            ILogger<AuthController> logger,
            ISignInResultBuilder signInResultBuilder)
        {
            this.logger = logger;
            this.signInResultBuilder = signInResultBuilder;
        }

        [HttpPost]
        [ActionName("signin")]
        [AllowAnonymous]
        public async Task<ActionResult<Contract.SignInResult>> SignIn(SignInRequest signInRequest)
        {
            if (IsSignInRequestValid(signInRequest))
                return BadRequest();

            try
            {
                var result = await signInResultBuilder.BuildSignInResultAsync(signInRequest).ConfigureAwait(false);
                return result.Status switch
                {
                    SignInBuilderResultStatus.Ok => Ok(result.SignInResult),
                    SignInBuilderResultStatus.InvalidLoginOrPassword => Unauthorized(),
                    SignInBuilderResultStatus.UserNotFound => NotFound(),
                    _ => StatusCode(StatusCodes.Status500InternalServerError),
                };
            }
            catch(Exception e)
            {
                logger.LogError(e, "Exception occured during signing in");
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        private bool IsSignInRequestValid(SignInRequest signInRequest)
        {
            return !string.IsNullOrEmpty(signInRequest?.Login)
                && !string.IsNullOrEmpty(signInRequest?.Password);
        }
    }
}
