using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Seahorse.WebApi.Contract.Auth
{
    public class Role : IdentityRole<string>
    {
        public StaticPermission StaticPermissions { get; set; }

        public List<CreateFormPermission> TemplatePermissions { get; set; }
    }
}
