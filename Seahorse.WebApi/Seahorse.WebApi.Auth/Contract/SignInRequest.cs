using System.Text.Json.Serialization;

namespace Seahorse.WebApi.Auth.Contract
{
    public class SignInRequest
    {
        [JsonPropertyName("login")]
        public string Login { get; set; }

        [JsonPropertyName("password")]
        public string Password { get; set; }
    }
}
