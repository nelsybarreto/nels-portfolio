namespace Portfolio.Api.Models;

public record ServiceItem(
    string id,
    string name,
    string description,
    string[] highlights
);