using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Seahorse.WebApi.Maintenance
{
    public class ApplicationPartsLogger : IHostedService
    {
        private readonly ILogger<ApplicationPartsLogger> logger;
        private readonly ApplicationPartManager partManager;
        private readonly IActionDescriptorCollectionProvider actionDescriptorCollectionProvider;

        public ApplicationPartsLogger(
            ILogger<ApplicationPartsLogger> logger,
            ApplicationPartManager partManager,
            IActionDescriptorCollectionProvider actionDescriptorCollectionProvider)
        {
            this.logger = logger;
            this.partManager = partManager;
            this.actionDescriptorCollectionProvider = actionDescriptorCollectionProvider;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            var controllersInfo = GetControllersInfo();
            logger.LogDebug(controllersInfo);
            var applicationsPartsInfo = GetApplicationPartsInfo();
            logger.LogDebug(applicationsPartsInfo);
            var endpointsInfo = GetEndpointsInfo();
            logger.LogDebug(endpointsInfo);
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;

        private string GetControllersInfo()
        {
            StringBuilder builder = new StringBuilder("Available controllers:").AppendLine();
            foreach (var controllerInfo in GetControllersNames())
                builder.AppendLine(controllerInfo);

            return builder.ToString();
        }

        private string GetApplicationPartsInfo()
        {
            StringBuilder builder = new StringBuilder("Available application parts:").AppendLine();
            var applicationParts = partManager.ApplicationParts
                .Select(part => part.Name);

            foreach (var applicationPart in applicationParts)
                builder.AppendLine(applicationPart);

            return builder.ToString();
        }

        private List<string> GetControllersNames()
        {
            var controllerFeature = new ControllerFeature();
            partManager.PopulateFeature(controllerFeature);
            return controllerFeature.Controllers
                .Select(controller => $"{controller.FullName} from assembly {controller.Assembly}")
                .ToList();
        }

        private string GetEndpointsInfo()
        {
            StringBuilder builder = new StringBuilder("Available endpoints:");

            var routes = actionDescriptorCollectionProvider.ActionDescriptors.Items
                .Where(ad => ad.AttributeRouteInfo != null)
                .Select(ad => $"{ad.AttributeRouteInfo.Name} {ad.AttributeRouteInfo.Template}")
                .ToList();

            foreach (var route in routes)
                builder.AppendLine(route);

            return builder.ToString();
        }
    }
}
