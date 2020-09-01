namespace Seahorse.WebApi.Auth.Configuration
{
    public class AuthOptions
    {
        public const string Auth = nameof(Auth);

        public JwtSessionTokenOptions JwtSessionToken { get; set; }
        public SessionOptions Session { get; set; }
    }
}
