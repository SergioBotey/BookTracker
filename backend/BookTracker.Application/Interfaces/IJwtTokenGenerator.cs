using BookTracker.Domain.Entities;

namespace BookTracker.Application.Interfaces;

public interface IJwtTokenGenerator
{
    string GenerateToken(User user);
}