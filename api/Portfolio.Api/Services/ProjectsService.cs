using Portfolio.Api;
using Portfolio.Api.Models;
using Portfolio.Api.Stores;

public class ProjectsService
{
    private readonly PortfolioStore _store;
    public ProjectsService(PortfolioStore store) => _store = store;
    public IReadOnlyList<Project> GetAll() => _store.Projects;
}