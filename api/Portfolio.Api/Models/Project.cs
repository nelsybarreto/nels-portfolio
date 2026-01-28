namespace Portfolio.Api.Models;

public record Project(
    string id,
    string name,
    string description,
    string[] tags,
    string? repoUrl,
    string? liveUrl
);