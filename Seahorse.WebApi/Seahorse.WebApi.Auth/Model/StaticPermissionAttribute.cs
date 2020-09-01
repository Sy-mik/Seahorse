using Microsoft.AspNetCore.Authorization;
using Seahorse.WebApi.Contract.Auth;

namespace Seahorse.WebApi.Auth.Model
{
    public class StaticPermissionAttribute : AuthorizeAttribute
    {
        private StaticPermission permission;

        private void SetPolicy()
        {
            Policy = $"Policy.Permission.{(int)Permission}";
        }

        public StaticPermission Permission
        {
            get => permission;
            set
            {
                if (value == permission)
                    return;

                permission = value;
                SetPolicy();
            }
        }
    }
}
