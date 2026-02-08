# auth-service Documentation

## Overview & Responsibilities

- Provides authentication and authorization for the system.
- Manages user accounts and credentials.
- Issues and validates JWT tokens.
- Integrates with api-gateway to secure downstream service access.

## Tech Stack & Dependencies

**Languages & Frameworks**
- Java 21
- Spring Boot
- Spring Boot starters: Security, Web, Data JPA, Validation

**Databases**
- PostgreSQL (primary database)
- H2 (development/testing)

**Security & Tokens**
- Spring Security
- JJWT (API, impl, jackson) for JWT handling

**API Documentation**
- Springdoc OpenAPI (for REST API documentation)

---

## APIs

_TODO: List REST controllers, authentication/authorization endpoints, and their purposes._

## Domain Model & Database

_TODO: List user-related entities, relationships, and repositories._

## DTOs, Mappers, and Data Flow

_TODO: List login/registration DTOs and describe authentication flows._

## Business Logic & Architectural Patterns

### Package Structure

- `config` – Spring Security configuration (security filter chain, password encoding, CORS, etc.).
- `controller` – REST controllers exposing authentication and authorization endpoints.
- `service` – Services implementing user management, authentication, and token handling.
- `repository` – Spring Data JPA repositories for users, roles, and related entities.
- `model` – JPA entities representing users, roles/authorities, and other auth-domain objects.
- `dto` – Data Transfer Objects for login, registration, token responses, and user views.
- `util` – Utility classes (e.g., JWT helpers, token utilities).
- `AuthServiceApplication` – Spring Boot application entry point.

### High-Level Security & Request Flow

1. A client sends an authentication request (e.g., login or registration) to an auth-service endpoint (often via the API gateway).
2. The controller validates the incoming DTO and delegates to a service.
3. The service loads or creates user entities via repositories and applies security rules (password hashing, role assignment, etc.).
4. For login, the service authenticates credentials and, on success, issues a JWT using the JWT utilities.
5. The controller returns a response DTO containing the token and any user/role information needed by the client.
6. For protected resources, API gateway or downstream services validate incoming JWTs using the same signing key and token parsing utilities.

### Patterns Used

- Standard layered architecture: **controller → service → repository → database**.
- Centralized security configuration in the `config` package.
- JWT-based stateless authentication with Spring Security.

## Cross-Cutting Concerns

_TODO: Detail security filters, method security, and global exception handling._

## Configuration & Environment

_TODO: Capture important properties (e.g., JWT secret, token expiry, DB config)._ 

## Testing & Quality

_TODO: Summarize auth-related unit and integration tests._
