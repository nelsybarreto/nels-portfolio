using Portfolio.Api.Models;

namespace Portfolio.Api.Stores;

public class PortfolioStore
{
    public List<Project> Projects { get; } =
    [
        new("p1", "Ecommerce Angular", "Tienda online con Angular + Tailwind", ["Angular", "Tailwind"], null, null),
        new("p2", "Backend Serverless", "Azure Functions + Cosmos", [".NET", "Azure", "Cosmos"], null, null)
    ];

    public List<ServiceItem> Services { get; } =
    [
        new("s1", "Web Apps", "SPAs modernas y mantenibles", ["Angular", "UI/UX", "Performance"]),
        new("s2", "Backend .NET", "APIs y serverless en Azure", [".NET", "Azure", "Cosmos DB"])
    ];
}