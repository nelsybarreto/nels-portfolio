using Portfolio.Api;
using Portfolio.Api.Models;
using Portfolio.Api.Repositories;
using Portfolio.Api.Stores;

public class ServicesService
{
    private readonly ServicesRepository _repo;

    public ServicesService(ServicesRepository repo)
    {
        _repo = repo;
    }

    public Task<IReadOnlyList<ServiceItem>> GetAllAsync()
        => _repo.GetAllAsync();
}