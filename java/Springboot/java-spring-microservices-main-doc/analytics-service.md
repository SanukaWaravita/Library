# analytics-service Documentation

## Overview & Responsibilities

- Consumes Kafka events (e.g., patient events) for analytics and aggregation.
- Processes and possibly exposes analytics results (e.g., via REST endpoints).
- May produce derived events or metrics back to Kafka or other sinks.

## Tech Stack & Dependencies

**Languages & Frameworks**
- Java 21
- Spring Boot
- Spring Boot starter: Web

**Messaging & Schema**
- Spring Kafka
- Protobuf (`patient_event.proto`) for message definitions
- Protobuf Maven plugin and protoc configuration

**Persistence / Outputs**
- Destination of analytics results (DB, logs, or external service) to be confirmed from code.

---

## APIs

_TODO: List REST endpoints (if any) that expose analytics data._

## Domain Model & Database

_TODO: Identify any domain models/entities and how analytics results are stored._

## DTOs, Mappers, and Data Flow

_TODO: List DTOs/protobuf messages and describe ingestion/processing/output flows._

## Business Logic & Architectural Patterns

_TODO: Summarize processing pipelines and key analytics rules._

## Cross-Cutting Concerns

_TODO: Describe error handling, retries, and logging for message processing._

## Configuration & Environment

_TODO: Capture important properties such as Kafka topics, brokers, and consumer groups._

## Testing & Quality

_TODO: Summarize existing tests (including any Kafka-based integration tests)._
