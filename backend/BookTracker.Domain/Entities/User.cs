using BookTracker.Domain.Common;

namespace BookTracker.Domain.Entities;

public class User : AuditableEntity
{
    public string FullName {get; set; } = string.Empty;
    public string Email {get; set; } = string.Empty;
    public string PasswordHash {get; set; } = string.Empty;
    public bool IsActive {get; set; } = true;
    public ICollection<Book> Books {get; set; } = new List<Book>();
    public ICollection<ReadingGoal> ReadingGoals {get; set; } = new List<ReadingGoal>();
}