using Microsoft.AspNetCore.Mvc;
using Trips.Data;
using System;

namespace Trips.Controllers
{
    [Route("api/[controller]")]
    public class TripsController : Controller
    {
        private ITripService _service;
        public TripsController(ITripService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetTrips()
        {
            var allTrips = _service.GetAllTrips();
            return Ok(allTrips);
        }

        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _service.GetTripById(id);
            return Ok(trip);
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trip trip)
        {
            Console.WriteLine($"🧪 Recibido trip: {System.Text.Json.JsonSerializer.Serialize(trip)}");

            _service.AddTrip(trip);
            return Ok("Registro agregado con exito");
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody] Trip trip)
        {
            _service.UpdateTrip(id, trip);
            return Ok(trip);
        }


        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _service.DeleteTrip(id);
            return Ok();
        }
    }
}