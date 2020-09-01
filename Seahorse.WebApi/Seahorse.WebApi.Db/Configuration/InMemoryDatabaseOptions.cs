namespace Seahorse.WebApi.Db.Configuration
{
    public class InMemoryDatabaseOptions: DatabaseOptions
    {
        public string SeahorseDbName { get; set; }
        public string AuthDbName { get; set; }
    }
}
