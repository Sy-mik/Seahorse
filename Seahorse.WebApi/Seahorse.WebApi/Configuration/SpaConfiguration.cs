namespace Seahorse.WebApi.Configuration
{
    public class SpaConfiguration
    {
        public const string Spa = nameof(Spa);
        public string StaticFilesRootPath { get; set; }
        public string SourcePath { get; set; }
    }
}
