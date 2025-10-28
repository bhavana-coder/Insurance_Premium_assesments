var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options=>
{
  options.AddDefaultPolicy(policy =>

  {
    policy.WithOrigins("http://localhost:4200")
    .AllowAnyMethod()
    .AllowAnyMethod();
  });

});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
