using BookTracker.Application.DTOs.Auth;

namespace BookTracker.Application.Interfaces;

public interface IAuthService
{
    Task<AuthResponse> RegisterAsync(RegisterRequest request);
    Task<AuthResponse> LoginAsync(LoginRequest request);
    Task<UserResponse> GetCurrentUserAsync(int userId);
}