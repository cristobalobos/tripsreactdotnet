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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Trip>(entity =>
            {
                entity.Property(e => e.DateStarted).HasColumnType("datetime");
                entity.Property(e => e.DateCompleted).HasColumnType("datetime");
            });
        }
    }
}