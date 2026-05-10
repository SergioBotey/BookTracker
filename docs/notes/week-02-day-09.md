# Week 02 — Day 09

## Goal

Implement password hashing and JWT token generation services.

## Completed

- Installed BCrypt.Net-Next.
- Installed System.IdentityModel.Tokens.Jwt.
- Created PasswordHasher.
- Created JwtSettings.
- Created JwtTokenGenerator.
- Configured Jwt section in appsettings.
- Registered password hasher in Infrastructure.
- Registered JWT token generator in Infrastructure.
- Verified backend build.
- Verified API still runs.

## Result

The backend now has security services ready for authentication use cases.

## Next step

Implement AuthService and the user registration endpoint.