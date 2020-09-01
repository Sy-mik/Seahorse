namespace Seahorse.WebApi.Db.Configuration
{
    public class DatabaseOptions
    {
        public const string Database = "Database";

        public DatabaseType DatabaseType { get; set; }
    }

    public enum DatabaseType
    {
        InMemory
    }
}
