using BookTracker.Domain.Common;
using BookTracker.Domain.Enums;

namespace BookTracker.Domain.Entities;

public class Review : AuditableEntity
{
    public int BookId {get; set; }
    public string Content {get; set; } = string.Empty;
    public BookRating Rating {get; set; }
    public Book Book {get; set; } = null!;
}