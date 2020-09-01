namespace Seahorse.WebApi.Auth.Configuration
{
    public class JwtSessionTokenOptions
    {
        public string Secret { get; set; }
        public string Issuer { get; set; }
    }
}
