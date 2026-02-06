using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Portfolio.Api.Services;

namespace Portfolio.Api.Functions;

public class GetProjects
{
    private readonly ProjectsService _service;

    public GetProjects(ProjectsService service)
    {
        _service = service;
    }

    [Function("GetProjects")]
    public async Task<HttpResponseData> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "projects")] HttpRequestData req)
    {
        var res = req.CreateResponse(HttpStatusCode.OK);
        await res.WriteAsJsonAsync(await _service.GetAllAsync());
        return res;
    }
}
