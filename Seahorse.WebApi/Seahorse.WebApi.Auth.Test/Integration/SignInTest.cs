using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Seahorse.WebApi.Auth.Contract;
using Seahorse.WebApi.Auth.Test.Mock;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Xunit;

namespace Seahorse.WebApi.Auth.Test.Integration
{
    public class SignInTest: IClassFixture<WebApplicationMockFactory>
    {
        private readonly WebApplicationMockFactory webApplicationFactory;

        public SignInTest(WebApplicationMockFactory webApplicationFactory)
        {
            this.webApplicationFactory = webApplicationFactory;
        }

        [Fact]
        public async Task SignIn_WithValidCredentials_Returns200()
        {
            using var response = await SignInAsync(webApplicationFactory.TestUsers[0]).ConfigureAwait(false);
            response.StatusCode.Should().Be(StatusCodes.Status200OK);
        }

        [Fact]
        public async Task SignIn_WithInvalidCredentials_Returns401()
        {
            var invalidUser = new ServiceUser("qwerty", "qwerty");
            using var response = await SignInAsync(invalidUser).ConfigureAwait(false);
            response.StatusCode.Should().Be(StatusCodes.Status401Unauthorized);
        }

        [Fact]
        public async Task SignIn_WithValidCredentials_ReturnsSessionToken()
        {
            var signInResult = await GetSignInResultAsync(webApplicationFactory.TestUsers[0]).ConfigureAwait(false);
            signInResult.Token.Should().NotBeNullOrEmpty();
        }

        private async Task<HttpResponseMessage> SignInAsync(ServiceUser user)
        {
            using var client = webApplicationFactory.CreateClient();
            var signInRequest = new SignInRequest
            {
                Login = user.UserName,
                Password = user.Password
            };

            var signInJson = JsonSerializer.Serialize(signInRequest);
            var jsonContent = new StringContent(signInJson, Encoding.UTF8, "application/json");
            return await client.PostAsync("/auth/signin", jsonContent).ConfigureAwait(false);
        }

        private async Task<SignInResult> GetSignInResultAsync(ServiceUser user)
        {
            using var response = await SignInAsync(user).ConfigureAwait(false);
            var responseBody = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
            return JsonSerializer.Deserialize<SignInResult>(responseBody);
        }
    }
}
