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

_TODO: Summarize service-layer classes, core rules, and patterns used._

## Cross-Cutting Concerns

_TODO: Describe exception handling, logging, and any security concerns specific to this service._

## Configuration & Environment

_TODO: Capture important properties, profiles, ports, and environment variables._

## Testing & Quality

_TODO: Summarize existing unit/integration tests and utilities._
