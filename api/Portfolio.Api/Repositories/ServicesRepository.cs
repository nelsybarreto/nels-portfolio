using Microsoft.Azure.Cosmos;
using Portfolio.Api.Models;

namespace Portfolio.Api.Repositories;

public class ServicesRepository
{
    private readonly Container _container;

    public ServicesRepository(CosmosClient client)
    {
        var databaseName = Environment.GetEnvironmentVariable("COSMOS_DATABASE")!;
        var containerName = Environment.GetEnvironmentVariable("COSMOS_SERVICES_CONTAINER")!;

        _container = client
            .GetDatabase(databaseName)
            .GetContainer(containerName);
    }

    public async Task<IReadOnlyList<ServiceItem>> GetAllAsync()
    {
        var query = _container.GetItemQueryIterator<ServiceItem>(
            new QueryDefinition("SELECT * FROM c")
        );

        var results = new List<ServiceItem>();

        while (query.HasMoreResults)
        {
            var response = await query.ReadNextAsync();
            results.AddRange(response);
        }

        return results;
    }
}
