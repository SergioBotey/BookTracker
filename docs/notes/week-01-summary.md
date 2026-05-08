# Week 01 Summary

## Goal

Build the technical foundation for BookTracker as a professional full-stack portfolio project.

## Completed

### Repository

- Created base repository structure.
- Added README.
- Added CONTRIBUTING guide.
- Added GitHub issue templates.
- Added initial roadmap and architecture notes.

### Backend

- Created .NET 8 solution.
- Created layered architecture:
  - BookTracker.Api
  - BookTracker.Application
  - BookTracker.Domain
  - BookTracker.Infrastructure
- Added domain entities:
  - User
  - Book
  - Review
  - ReadingGoal
- Added enums:
  - ReadingStatus
  - BookRating
- Configured Entity Framework Core.
- Configured PostgreSQL.
- Created initial migration.
- Added Swagger.
- Added health endpoint.
- Added CORS.
- Added global exception handling.

### Frontend

- Created React + TypeScript project with Vite.
- Configured Tailwind CSS.
- Configured React Router.
- Added base layouts.
- Added placeholder pages:
  - Login
  - Register
  - Dashboard
  - Books
- Added Axios base client.

## Result

BookTracker now has a working backend foundation, database persistence, and frontend base ready for authentication development.

## Next Week

Implement authentication with JWT:

- Register endpoint.
- Login endpoint.
- Password hashing.
- JWT generation.
- Auth service.
- Protected routes.
- Login and register forms.