using Seahorse.WebApi.Contract.Auth;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace Seahorse.WebApi.Auth.Services
{
    public class StaticPermissionMapper : IStaticPermissionMapper
    {
        private readonly Lazy<List<StaticPermission>> allPermissions;
        private readonly ConcurrentDictionary<StaticPermission, List<StaticPermission>> permissionsCache =
            new ConcurrentDictionary<StaticPermission, List<StaticPermission>>();

        public StaticPermissionMapper()
        {
            allPermissions = new Lazy<List<StaticPermission>>(GetAllStaticPermissions);
        }

        public List<StaticPermission> MapToSubPermissions(StaticPermission permissionsFlag)
        {
            return permissionsCache.GetOrAdd(permissionsFlag, ResolveSubRoles);
        }

        private List<StaticPermission> ResolveSubRoles(StaticPermission permissionsFlag)
        {
            return allPermissions.Value
                .Where(permission => (permission & permissionsFlag) == permission)
                .ToList();
        }

        private List<StaticPermission> GetAllStaticPermissions()
        {
            return Enum.GetValues(typeof(StaticPermission))
                .OfType<StaticPermission>()
                .ToList();
        }
    }
}
