using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;

namespace Portfolio.Api.Functions;

public class GetServices
{
    private readonly ServicesService _service;

    public GetServices(ServicesService service)
    {
        _service = service;
    }

    [Function("GetServices")]
    public async Task<HttpResponseData> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "services")]
        HttpRequestData req)
    {
        var res = req.CreateResponse(HttpStatusCode.OK);
        await res.WriteAsJsonAsync(await _service.GetAllAsync());
        return res;
    }
}
