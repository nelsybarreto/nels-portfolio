using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Portfolio.Api;
using Portfolio.Api.Stores;

var builder = FunctionsApplication.CreateBuilder(args);

builder.ConfigureFunctionsWebApplication();

// Telemetría (lo tuyo)
builder.Services
    .AddApplicationInsightsTelemetryWorkerService()
    .ConfigureFunctionsApplicationInsights();

// ✅ Tu DI (agregar esto)
builder.Services.AddSingleton<PortfolioStore>();          // datos en memoria (por ahora)
builder.Services.AddSingleton<ProjectsService>();         // opcional: capa de servicio
builder.Services.AddSingleton<ServicesService>();         // opcional

builder.Build().Run();