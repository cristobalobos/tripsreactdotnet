using System.Collections.Generic;
using System.Linq;
using System;

namespace Trips.Data
{
    public class TripService : ITripService
    {

        private readonly TripsDbContext _context;

        public TripService(TripsDbContext context)
        {
            _context = context;
        }

        public void AddTrip(Trip trip)
        {
           // Data.Trips.Add(trip);
            _context.Trips.Add(trip);
            _context.SaveChanges();
        }

        public List<Trip> GetAllTrips() {
           var trips = _context.Trips.ToList();
           Console.WriteLine($"[TripService] Se recuperaron {trips.Count} viajes desde la BD.");
           return trips;
           //return Data.Trips.ToList();
        }

        public Trip GetTripById(int tripId) => _context.Trips.FirstOrDefault(t => t.Id == tripId);
        public void UpdateTrip(int tripId, Trip trip)
        {
            var oldTrip = Data.Trips.FirstOrDefault(n => n.Id == tripId);

            if(oldTrip != null)
            {
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
            }
        }
          public void DeleteTrip(int tripId)
        {
            var trip = Data.Trips.FirstOrDefault(n => n.Id == tripId);
            if(trip != null)
            {
                Data.Trips.Remove(trip);
            }
        }

    }
}