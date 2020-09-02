namespace Seahorse.WebApi.Auth.Services
{
    public interface ISessionJwtReader
    {
        string ReadSessionId(string token);
    }
}
