using Seahorse.WebApi.Contract.Auth;
using System.Collections.Generic;

namespace Seahorse.WebApi.Auth.Model
{
    public class UserInfo
    {
        public User User { get; set; }
        public List<Role> Roles { get; set; }
        public List<string> RoleNames { get; set; }
        public StaticPermission Permissions { get; set; }
    }
}
