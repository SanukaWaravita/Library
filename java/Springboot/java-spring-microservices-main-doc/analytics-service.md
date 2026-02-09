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

### Package Structure

- `kafka` – Kafka consumer classes for ingesting events from other services.
- `AnalyticsServiceApplication` – Spring Boot application entry point.

### Kafka Consumer Organization

**analytics-service acts as a Kafka consumer** that processes patient-related events.

- `KafkaConsumer` class uses `@KafkaListener` to subscribe to Kafka topics.
- Currently consumes from the `patient` topic with consumer group `analytics-service`.
- Deserializes protobuf-encoded `PatientEvent` messages.
- Processes events asynchronously as they arrive from Kafka.

### Analytics Results Destination

**Current implementation**: Analytics results are logged to the application logs.

- Each consumed patient event is logged with key details (patientId, name, email).
- Error handling logs deserialization failures.

**Future enhancements** could include:
- Storing aggregated metrics in a database (e.g., time-series DB, analytics warehouse).
- Publishing derived events back to Kafka for downstream consumers.
- Exposing REST endpoints to query analytics results.
- Integration with monitoring/metrics systems (Prometheus, Grafana).

### Patterns Used

- Event-driven architecture (consumes domain events via Kafka).
- Protobuf for message serialization (shared schemas with patient-service).
- Simple listener-based processing (single consumer class).

## Cross-Cutting Concerns

_TODO: Describe error handling, retries, and logging for message processing._

## Configuration & Environment

_TODO: Capture important properties such as Kafka topics, brokers, and consumer groups._

## Testing & Quality

_TODO: Summarize existing tests (including any Kafka-based integration tests)._
