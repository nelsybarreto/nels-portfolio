using Portfolio.Api;
using Portfolio.Api.Models;
using Portfolio.Api.Stores;

public class ServicesService
{
    private readonly PortfolioStore _store;
    public ServicesService(PortfolioStore store) => _store = store;
    public IReadOnlyList<ServiceItem> GetAll() => _store.Services;
}