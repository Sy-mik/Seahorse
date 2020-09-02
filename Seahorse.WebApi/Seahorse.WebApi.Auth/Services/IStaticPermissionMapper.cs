using Seahorse.WebApi.Contract.Auth;
using System.Collections.Generic;

namespace Seahorse.WebApi.Auth.Services
{
    public interface IStaticPermissionMapper
    {
        List<StaticPermission> MapToSubPermissions(StaticPermission permissionsFlag);
    }
}
