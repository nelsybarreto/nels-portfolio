using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Portfolio.Api.Stores;

namespace Portfolio.Api;

public class GetServices
{
    private readonly PortfolioStore _store;
    public GetServices(PortfolioStore store) => _store = store;

    [Function("GetServices")]
    public async Task<HttpResponseData> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "services")] HttpRequestData req)
    {
        var res = req.CreateResponse(HttpStatusCode.OK);
        await res.WriteAsJsonAsync(_store.Services);
        return res;
    }
}
