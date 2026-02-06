using Microsoft.Azure.Cosmos;
using Portfolio.Api.Models;

namespace Portfolio.Api.Repositories;

public class ProjectsRepository
{
    private readonly Container _container;

    public ProjectsRepository(CosmosClient client)
    {
        var databaseName = Environment.GetEnvironmentVariable("COSMOS_DATABASE")!;
        var containerName = Environment.GetEnvironmentVariable("COSMOS_PROJECTS_CONTAINER")!;

        _container = client
            .GetDatabase(databaseName)
            .GetContainer(containerName);
    }

    public async Task<IReadOnlyList<Project>> GetAllAsync()
    {
        var query = _container.GetItemQueryIterator<Project>(
            new QueryDefinition("SELECT * FROM c")
        );

        var results = new List<Project>();

        while (query.HasMoreResults)
        {
            var response = await query.ReadNextAsync();
            results.AddRange(response);
        }

        return results;
    }
}
