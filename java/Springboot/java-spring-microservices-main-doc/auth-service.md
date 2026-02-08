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

_TODO: Summarize auth-related services, token lifecycle rules, and role/authority handling._

## Cross-Cutting Concerns

_TODO: Detail security filters, method security, and global exception handling._

## Configuration & Environment

_TODO: Capture important properties (e.g., JWT secret, token expiry, DB config)._ 

## Testing & Quality

_TODO: Summarize auth-related unit and integration tests._
