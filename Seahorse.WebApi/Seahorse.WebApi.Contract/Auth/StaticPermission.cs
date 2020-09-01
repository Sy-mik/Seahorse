using System;

namespace Seahorse.WebApi.Contract.Auth
{
    [Flags]
    public enum StaticPermission
    {
        None = 0,
        CanAddTemplate = 1 << 0,
        CanCreateForm = 1 << 1,
        Admin = CanAddTemplate | CanCreateForm
    }
}
