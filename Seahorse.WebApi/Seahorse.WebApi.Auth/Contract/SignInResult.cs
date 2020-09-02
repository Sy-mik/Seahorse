using Seahorse.WebApi.Contract.Auth;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Seahorse.WebApi.Auth.Contract
{
    public class SignInResult
    {
        [JsonPropertyName("token")]
        public string Token { get; set; }

        [JsonPropertyName("roleNames")]
        public List<string> RoleNames { get; set; }

        [JsonPropertyName("permissions")]
        public List<StaticPermission> Permissions { get; set; }
    }
}
