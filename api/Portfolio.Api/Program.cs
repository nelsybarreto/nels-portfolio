using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Portfolio.Api;
using Portfolio.Api.Repositories;
using Portfolio.Api.Services;
using Portfolio.Api.Stores;

var builder = FunctionsApplication.CreateBuilder(args);

builder.ConfigureFunctionsWebApplication();

builder.Services
    .AddApplicationInsightsTelemetryWorkerService()
    .ConfigureFunctionsApplicationInsights();

builder.Services.AddSingleton(_ =>
{
    var connection = Environment.GetEnvironmentVariable("COSMOS_CONNECTION");
    return new CosmosClient(connection);
});

builder.Services.AddSingleton<ProjectsRepository>();
builder.Services.AddSingleton<ServicesRepository>();

builder.Services.AddSingleton<ServicesService>();
builder.Services.AddSingleton<ProjectsService>();

//builder.Services.AddSingleton<PortfolioStore>();

builder.Build().Run();