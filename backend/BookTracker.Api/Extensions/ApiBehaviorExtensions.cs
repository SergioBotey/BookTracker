using Microsoft.AspNetCore.Mvc;

namespace BookTracker.Api.Extensions;

public static class ApiBehaviorExtensions
{
    public static IServiceCollection AddApiBehaviorConfiguration(this IServiceCollection services)
    {
        services.Configure<ApiBehaviorOptions>(options =>
        {
            options.SuppressModelStateInvalidFilter = false;
        });

        return services;
    }
}