using Microsoft.EntityFrameworkCore;


namespace Trips.Data
{
    public class TripsDbContext : DbContext
    {
        public TripsDbContext(DbContextOptions<TripsDbContext> options)
            : base(options)
        {
        }

        public DbSet<Trip> Trips { get; set; }
    }
}