using Seahorse.WebApi.Contract.Model;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seahorse.WebApi.Contract.Auth
{
    public class CreateFormPermission
    {
        [Key]
        public long Id { get; set; }

        [ForeignKey(nameof(FormTemplate))]
        public long FormTemplateId { get; set; }

        public FormTemplate FormTemplate { get; set; }
    }
}
