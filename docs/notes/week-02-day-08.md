# Week 02 — Day 08

## Goal

Prepare the authentication foundation for BookTracker.

## Completed

- Installed JWT authentication package.
- Installed FluentValidation.
- Created Auth DTOs.
- Created Auth service contracts.
- Created password hashing contract.
- Created JWT token generator contract.
- Created register request validator.
- Created login request validator.
- Added Application dependency injection.
- Registered Application services in API.

## Created DTOs

- RegisterRequest
- LoginRequest
- AuthResponse
- UserResponse

## Created interfaces

- IAuthService
- IPasswordHasher
- IJwtTokenGenerator

## Next step

Implement password hashing and JWT token generation in Infrastructure.