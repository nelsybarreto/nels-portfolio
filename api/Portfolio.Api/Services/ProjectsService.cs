using Portfolio.Api.Models;
using Portfolio.Api.Repositories;

namespace Portfolio.Api.Services;

public class ProjectsService
{
    private readonly ProjectsRepository _repo;

    public ProjectsService(ProjectsRepository repo)
    {
        _repo = repo;
    }

    public Task<IReadOnlyList<Project>> GetAllAsync()
        => _repo.GetAllAsync();
}
