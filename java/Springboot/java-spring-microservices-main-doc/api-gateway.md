# api-gateway Documentation

## Overview & Responsibilities

- Acts as the single entry point for client requests.
- Routes requests to downstream microservices (auth-service, patient-service, billing-service, analytics-service, etc.).
- Applies cross-cutting concerns at the edge (authentication, logging, error handling, rate limiting, etc.).

## Tech Stack & Dependencies

**Languages & Frameworks**
- Java 21
- Spring Boot
- Spring Cloud Gateway
- Spring Cloud BOM (`spring-cloud-dependencies`)

**Downstream Services**
- auth-service
- patient-service
- billing-service
- analytics-service
- (and any other microservices configured in routes)

---

## APIs

_TODO: Document public paths exposed by the gateway and how they map to downstream services._

## Domain Model & Database

_TODO: Note if the gateway maintains any state or persistence (likely stateless)._ 

## DTOs, Mappers, and Data Flow

_TODO: Describe how requests/responses are transformed (if at all) at the gateway._

## Business Logic & Architectural Patterns

### Package Structure

- `filter` – Custom gateway filters for cross-cutting concerns (e.g., JWT validation).
- `exception` – Custom exception classes and error handling.
- `ApiGatewayApplication` – Spring Boot application entry point.

### Filter Mechanism

**Custom Filters Implemented:**

- **JwtValidationGatewayFilterFactory**: A custom gateway filter that validates JWT tokens for protected routes.
  - Applied to routes requiring authentication (e.g., `/api/patients/**`).
  - Validates token structure, signature, and expiration.
  - Throws `JwtValidationException` on validation failures.

**Built-in Filters Used:**

- `StripPrefix`: Removes path prefixes before forwarding to downstream services.
- `RewritePath`: Rewrites request paths for API documentation endpoints.

### Exception Handling

- `JwtValidationException`: Custom exception for JWT validation failures.
- Gateway-level error handling intercepts exceptions and returns standardized error responses.
- Prevents invalid requests from reaching downstream services.

### Route Configuration

**Routes are configured via YAML** (`application.yml`):

- **auth-service-route**: Routes `/auth/**` to auth-service (port 4005).
- **patient-service-route**: Routes `/api/patients/**` to patient-service (port 4000) with JWT validation.
- **api-docs routes**: Expose OpenAPI documentation from downstream services.

**Configuration approach:**
- Declarative YAML-based routing (not programmatic Java config).
- Uses predicates (Path matching) and filters (transformation, validation) per route.
- Service discovery via direct HTTP URIs (hardcoded service names and ports).

### Patterns Used

- **API Gateway pattern**: Single entry point routing to multiple microservices.
- **Filter chain pattern**: Request/response processing through sequential filters.
- **Declarative configuration**: YAML-based route and filter definitions.

## Cross-Cutting Concerns

_TODO: Detail authentication, authorization, logging, tracing, and error handling at the gateway._

## Configuration & Environment

_TODO: Capture gateway configuration (YAML/properties), ports, and environment variables._

## Testing & Quality

_TODO: Summarize tests that verify routing and gateway behavior._
