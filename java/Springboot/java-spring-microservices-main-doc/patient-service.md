# patient-service Documentation

## Overview & Responsibilities

- Manages patient-domain CRUD and core business rules.
- Exposes REST APIs for patient-related operations.
- Communicates with billing-service via gRPC for billing workflows.
- Publishes/consumes Kafka events for analytics.

## Tech Stack & Dependencies

**Languages & Frameworks**
- Java 21
- Spring Boot
- Spring Boot starters: Web, Data JPA, Validation

**Databases**
- PostgreSQL (primary database)
- H2 (development/testing)

**Messaging & RPC**
- Spring Kafka (produces and consumes patient-related events)
- gRPC with `grpc-spring-boot-starter`
- Protobuf for message schemas

**API Documentation**
- Springdoc OpenAPI (for REST API documentation)

---

## APIs

_TODO: List REST controllers, endpoints, gRPC services, and Kafka topics for patient-service._

## Domain Model & Database

_TODO: List entities, relationships, and repositories for patient-service._

## DTOs, Mappers, and Data Flow

_TODO: List DTOs, mapping strategies, and typical data flows._

## Business Logic & Architectural Patterns

### Package Structure

- `controller` – REST controllers exposing patient-related endpoints.
- `service` – Service-layer classes implementing patient business logic.
- `repository` – Spring Data JPA repositories for persistence.
- `model` – JPA entities representing patient-domain data.
- `dto` – Data Transfer Objects used for requests, responses, and events.
- `mapper` – Classes responsible for mapping between entities and DTOs.
- `kafka` – Kafka producers/consumers for patient-related events.
- `grpc` – gRPC clients/servers and related integration classes.
- `exception` – Custom exceptions and global error-handling support.
- `PatientServiceApplication` – Spring Boot application entry point.

### High-Level Request Flow

1. A client sends an HTTP request (via the API gateway) to a patient-service REST endpoint.
2. The corresponding controller method validates input and delegates to the service layer.
3. The service layer applies business rules and interacts with repositories to read/write data.
4. Entities are mapped to/from DTOs using the mapper components.
5. The controller returns a response DTO, which is serialized as JSON back to the client.
6. As part of certain operations, the service may publish or consume Kafka events and/or call gRPC endpoints.

### Patterns Used

- Standard layered architecture: **controller → service → repository → database**.
- Dedicated mapper layer separating domain models from external DTO representations.
- Integration endpoints via Kafka (event-driven interactions) and gRPC (service-to-service calls).

## Cross-Cutting Concerns

_TODO: Describe exception handling, logging, and any security concerns specific to this service._

## Configuration & Environment

_TODO: Capture important properties, profiles, ports, and environment variables._

## Testing & Quality

_TODO: Summarize existing unit/integration tests and utilities._
