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
            if (trip == null)
            {
                Console.WriteLine("❌ El trip vino como null (usaremos uno hardcodeado)");

                var hardcodedTrip = new Trip
                {
                    Name = "Puerto Varas, Chile",
                    Description = "Ciudad del sur de Chile muy alemana",
                    DateStarted = new DateTime(2025, 4, 10),
                    DateCompleted = new DateTime(2025, 4, 15)
                };

                _service.AddTrip(hardcodedTrip);
                Console.WriteLine("✅ Trip hardcodeado guardado");
                return Ok("Trip hardcodeado guardado");
            }

            Console.WriteLine($"🛬 Recibido: {trip.Name}");
            _service.AddTrip(trip);
            return Ok();
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