using System.ComponentModel.DataAnnotations;

namespace Seahorse.WebApi.Contract.Model
{
    public class FormTemplate
    {
        [Key]
        public long Id { get; set; }
    }
}
