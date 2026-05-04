using BookTracker.Domain.Common;
using BookTracker.Domain.Enums;

namespace BookTracker.Domain.Entities;

public class Book : AuditableEntity
{
    public int UserId {get; set; }
    public string Title {get; set; } = string.Empty;
    public string Author {get; set; } = string.Empty;
    public string? Genre {get; set; }
    public string? Description {get; set; }
    public string? CoverUrl {get; set; }
    public ReadingStatus Status {get; set; } = ReadingStatus.Pending;
    public BookRating? Rating {get; set;}
    public int? PageCount {get; set; }
    public DateTime? StartDate {get; set; }
    public DateTime? EndDate {get; set; }
    public string? Notes {get; set; }
    public User User {get; set;} = null!;
    public ICollection<Review> Reviews {get; set; } = new List<Review>();
}