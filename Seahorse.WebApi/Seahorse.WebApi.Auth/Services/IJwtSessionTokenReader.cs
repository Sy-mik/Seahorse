namespace Seahorse.WebApi.Auth.Services
{
    public interface IJwtSessionTokenReader
    {
        string ReadSessionId(string token);
    }
}
