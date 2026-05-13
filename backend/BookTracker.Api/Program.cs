using BookTracker.Api.Extensions;
using BookTracker.Application;
using BookTracker.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddApplication();

builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddCorsConfiguration(builder.Configuration);

builder.Services.AddApiBehaviorConfiguration();

builder.Services.AddSwaggerDocumentation();

builder.Services.AddJwtAuthentication(builder.Configuration);

var app = builder.Build();

app.UseGlobalExceptionHandling();

if (app.Environment.IsDevelopment())
{
    app.UseSwaggerDocumentation();
}

app.UseHttpsRedirection();

app.UseCorsConfiguration();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();