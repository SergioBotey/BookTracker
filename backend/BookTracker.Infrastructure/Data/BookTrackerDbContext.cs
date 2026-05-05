using BookTracker.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookTracker.Infrastructure.Data;

public class BookTrackerDbContext : DbContext
{
    public BookTrackerDbContext(DbContextOptions<BookTrackerDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();
    public DbSet<Book> Books => Set<Book>();
    public DbSet<Review> Reviews => Set<Review>();
    public DbSet<ReadingGoal> ReadingGoals => Set<ReadingGoal>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        ConfigureUsers(modelBuilder);
        ConfigureBooks(modelBuilder);
        ConfigureReviews(modelBuilder);
        ConfigureReadingGoals(modelBuilder);
    }

    private static void ConfigureUsers(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("Users");

            entity.HasKey(u => u.Id);

            entity.Property(u => u.FullName)
                .IsRequired()
                .HasMaxLength(150);

            entity.Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(180);

            entity.HasIndex(u => u.Email)
                .IsUnique();

            entity.Property(u => u.PasswordHash)
                .IsRequired()
                .HasMaxLength(500);

            entity.Property(u => u.IsActive)
                .IsRequired();

            entity.Property(u => u.CreatedAt)
                .IsRequired();

            entity.Property(u => u.UpdatedAt);

            entity.HasMany(u => u.Books)
                .WithOne(b => b.User)
                .HasForeignKey(b => b.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            entity.HasMany(u => u.ReadingGoals)
                .WithOne(g => g.User)
                .HasForeignKey(g => g.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }

    private static void ConfigureBooks(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Book>(entity =>
        {
            entity.ToTable("Books");

            entity.HasKey(b => b.Id);

            entity.Property(b => b.UserId)
                .IsRequired();

            entity.Property(b => b.Title)
                .IsRequired()
                .HasMaxLength(250);

            entity.Property(b => b.Author)
                .IsRequired()
                .HasMaxLength(180);

            entity.Property(b => b.Genre)
                .HasMaxLength(100);

            entity.Property(b => b.Description)
                .HasMaxLength(2000);

            entity.Property(b => b.CoverUrl)
                .HasMaxLength(1000);

            entity.Property(b => b.Status)
                .IsRequired()
                .HasConversion<int>();

            entity.Property(b => b.Rating)
                .HasConversion<int?>();

            entity.Property(b => b.PageCount);

            entity.Property(b => b.StartDate);

            entity.Property(b => b.EndDate);

            entity.Property(b => b.Notes)
                .HasMaxLength(4000);

            entity.Property(b => b.CreatedAt)
                .IsRequired();

            entity.Property(b => b.UpdatedAt);

            entity.HasMany(b => b.Reviews)
                .WithOne(r => r.Book)
                .HasForeignKey(r => r.BookId)
                .OnDelete(DeleteBehavior.Cascade);

            entity.HasIndex(b => new { b.UserId, b.Title });
            entity.HasIndex(b => b.Status);
            entity.HasIndex(b => b.Genre);
        });
    }

    private static void ConfigureReviews(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Review>(entity =>
        {
            entity.ToTable("Reviews");

            entity.HasKey(r => r.Id);

            entity.Property(r => r.BookId)
                .IsRequired();

            entity.Property(r => r.Content)
                .IsRequired()
                .HasMaxLength(4000);

            entity.Property(r => r.Rating)
                .IsRequired()
                .HasConversion<int>();

            entity.Property(r => r.CreatedAt)
                .IsRequired();

            entity.Property(r => r.UpdatedAt);
        });
    }

    private static void ConfigureReadingGoals(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ReadingGoal>(entity =>
        {
            entity.ToTable("ReadingGoals");

            entity.HasKey(g => g.Id);

            entity.Property(g => g.UserId)
                .IsRequired();

            entity.Property(g => g.Year)
                .IsRequired();

            entity.Property(g => g.TargetBooks)
                .IsRequired();

            entity.Property(g => g.CreatedAt)
                .IsRequired();

            entity.Property(g => g.UpdatedAt);

            entity.HasIndex(g => new { g.UserId, g.Year })
                .IsUnique();
        });
    }
}