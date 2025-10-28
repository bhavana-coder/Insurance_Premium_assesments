using calculate_Premium.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace calculate_Premium.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class Premium_calculationController : ControllerBase
  {
    private readonly ILogger<Premium_calculationController> _logger;

    public Premium_calculationController(ILogger<Premium_calculationController> logger)
    {
      _logger = logger;
    }
    [HttpGet("GetPremium")]
    public async Task<IActionResult> Get([FromQuery] Premium premium)
    {
      try
      {
        double monthlyAmount = (premium.sumInsured * premium.rating * premium.age) / 1000;
        return Ok(monthlyAmount);
      }
      catch (Exception ex)
      {
        _logger.Log(LogLevel.Error, ex.Message);
        return BadRequest(ex);
      }
    }
  }

}
