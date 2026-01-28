using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Portfolio.Api.Stores;

namespace Portfolio.Api;

public class GetProjects
{
    private readonly PortfolioStore _store;
    public GetProjects(PortfolioStore store) => _store = store;

    [Function("GetProjects")]
    public async Task<HttpResponseData> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "projects")] HttpRequestData req)
    {
        var res = req.CreateResponse(HttpStatusCode.OK);
        await res.WriteAsJsonAsync(_store.Projects);
        return res;
    }
}