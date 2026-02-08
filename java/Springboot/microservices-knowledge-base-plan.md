# Java Microservices Knowledge Base Plan

This document outlines a phased, incremental plan for documenting the `java-spring-microservices-main` project.

---

## 1. Microservice Summaries

### 1.1 patient-service

**Main responsibilities**
- Manage patient-domain CRUD and core business rules.
- Expose REST APIs for patient operations.
- Communicate with billing-service via gRPC.
- Publish/consume Kafka events for analytics.

**Tech stack**
- Java 21
- Spring Boot (Web, Data JPA, Validation)
- PostgreSQL (primary DB), H2 (dev/test)
- Springdoc OpenAPI
- gRPC (`grpc-spring-boot-starter`, protobuf)
- Spring Kafka

**Key dependencies & communications**
- Databases: PostgreSQL, H2
- Messaging: Kafka topics for patient events
- RPC: gRPC (interaction with billing-service and possibly others)

---

### 1.2 billing-service

**Main responsibilities**
- Handle billing-related logic and operations.
- Provide and/or consume gRPC endpoints for billing workflows.

**Tech stack**
- Java 21
- Spring Boot Web
- gRPC core libraries (netty, protobuf, stub)
- Protobuf Maven plugin (code generation)

**Key dependencies & communications**
- RPC: gRPC (billing services and methods)
- No explicit persistence layer visible in `pom.xml` (may be in-memory or external).

---

### 1.3 analytics-service

**Main responsibilities**
- Consume Kafka events (e.g., patient events) and perform analytics/aggregation.
- Optionally expose REST endpoints for analytics results.

**Tech stack**
- Java 21
- Spring Boot Web
- Spring Kafka
- Protobuf + protoc/protobuf Maven plugin

**Key dependencies & communications**
- Messaging: Kafka (consumer/producer of analytics-related topics)
- Shared protobuf schemas with other services.

---

### 1.4 auth-service

**Main responsibilities**
- Authentication and authorization.
- User management.
- Issue and validate JWTs.
- Integrate with api-gateway for secured routing.

**Tech stack**
- Java 21
- Spring Boot (Security, Web, Data JPA, Validation)
- PostgreSQL, H2
- Springdoc OpenAPI
- JJWT (API, impl, jackson)

**Key dependencies & communications**
- Databases: PostgreSQL, H2
- Security: Spring Security, JWT
- Accessed via HTTP (directly or through api-gateway).

---

### 1.5 api-gateway

**Main responsibilities**
- Single entry point for clients.
- Route requests to downstream microservices.
- Apply gateway-level filters (auth, logging, error handling, etc.).

**Tech stack**
- Java 21
- Spring Boot
- Spring Cloud Gateway
- Spring Cloud BOM (`spring-cloud-dependencies`)

**Key dependencies & communications**
- Downstream: auth-service, patient-service, billing-service, analytics-service, etc.
- Cross-cutting: custom filters, global exception handling.

---

## 2. Per-Microservice Documentation Checklist

Use this checklist for **each** microservice:
- patient-service
- billing-service
- analytics-service
- auth-service
- api-gateway

Treat each bullet as a small, atomic task.

### 2.1 Service Overview & Responsibilities
- [ ] Write a 2–3 sentence description of what the service does.
- [ ] List its primary consumers (other services, frontend, external systems).
- [ ] Enumerate its main features/use-cases (3–7 bullet points).

### 2.2 Tech Stack & Dependencies
- [ ] Record Java version and Spring Boot version from `pom.xml`.
- [ ] List Spring starters used (Web, JPA, Security, Validation, etc.).
- [ ] List external infra dependencies: databases, Kafka, gRPC, external APIs.
- [ ] Note code-generation tools/plugins (e.g., `protobuf-maven-plugin`, gRPC plugins).

### 2.3 API Surface (REST / gRPC / Messaging)
- [ ] List REST controllers and their base paths.
- [ ] For each controller, list key endpoints (HTTP method + URL + brief purpose).
- [ ] List gRPC services and methods (from `proto/` and `grpc/` packages).
- [ ] List Kafka topics the service **produces to** and **consumes from**, with a short description of each message type.

### 2.4 Domain Model & Database Interactions
- [ ] List all JPA entities / models and one-line descriptions.
- [ ] For each entity, capture the table name and key relationships (OneToMany, ManyToOne, etc.).
- [ ] List all repositories and summarize their responsibilities (simple CRUD vs complex queries).
- [ ] Note any important `@Transactional` boundaries and methods.

### 2.5 DTOs, Mappers, and Data Flow
- [ ] List all DTO classes and what they represent (request, response, event payload, etc.).
- [ ] Identify mapping mechanisms (manual mappers, MapStruct, converter methods, etc.).
- [ ] Sketch the typical data flow: incoming request → DTO → domain model → persistence → response DTO.

### 2.6 Business Logic & Architectural Patterns
- [ ] List service-layer classes and their core responsibilities.
- [ ] Identify the architectural style (e.g., layered: controller → service → repository; hexagonal; CQRS, etc.).
- [ ] Document key business rules and invariants (e.g., billing rules, validation rules, token lifetimes).

### 2.7 Cross-Cutting Concerns
- [ ] Document security configuration (filters, method security, roles/authorities), especially for auth-service and api-gateway.
- [ ] Describe global exception handling and standard error response shapes.
- [ ] Note logging, auditing, metrics, and tracing (if present).

### 2.8 Configuration & Environment
- [ ] List important application properties (profiles, ports, DB URLs, Kafka brokers, etc.).
- [ ] Note required environment variables and secrets per service.

### 2.9 Testing & Quality
- [ ] List existing test types (unit, integration, contract tests).
- [ ] Identify shared test utilities/fixtures and what they reveal about intended usage.

---

## 3. Phased, Incremental Action Plan

Each phase is intentionally small. You can repeat phases per service.

### Phase 1 – Tech Stack & High-Level View

Goal: Capture "what is this service and what does it depend on" for all services.

1. [x] Create a **documentation template** with headings:
   - Overview & Responsibilities
   - Tech Stack & Dependencies
   - APIs
   - Domain Model
   - DTOs
   - Business Logic
   - Cross-Cutting Concerns
   - Configuration & Environment
   - Testing & Quality
2. [x] For **patient-service**, fill in only:
   - Overview & Responsibilities (2–3 sentences + feature bullets).
   - Tech Stack & Dependencies (Java/Spring versions, DBs, Kafka, gRPC, key libraries).
3. [x] For **auth-service**, fill in only Overview & Tech Stack & Dependencies.
4. [x] For **billing-service**, fill in only Overview & Tech Stack & Dependencies.
5. [x] For **analytics-service**, fill in only Overview & Tech Stack & Dependencies.
6. [x] For **api-gateway**, fill in only Overview & Tech Stack & Dependencies.

You can consider Phase 1 done once every service has a short **Overview** and **Tech Stack & Dependencies** section.

---

### Phase 2 – Code Structure & Architectural Patterns

Goal: Capture how code is organized and the main flows, without documenting every method.

1. [x] For **patient-service**:
   - [x] Document the package structure (controller, service, repository, dto, model, kafka, grpc, mapper, exception).
   - [x] Describe the high-level request flow (HTTP request → controller → service → repository → response).
   - [x] Note any patterns used (e.g., dedicated mapper layer).
2. [x] For **auth-service**:
   - [x] Document package structure (config, controller, service, repository, model, dto, util).
   - [x] Describe the high-level security flow (how requests are authenticated and authorized).
3. [ ] For **billing-service**:
   - [ ] Document gRPC-related packages and whether it acts as server, client, or both.
   - [ ] Summarize how billing logic is grouped (single service vs multiple components).
4. [ ] For **analytics-service**:
   - [ ] Document how Kafka consumers are organized (kafka package, listener classes).
   - [ ] Note where analytics results go (DB, another service, logs, etc.).
5. [ ] For **api-gateway**:
   - [ ] Document filters and exception-handling mechanisms.
   - [ ] Document how routes are configured (YAML/properties vs Java config).

Stop after code-structure-level notes; detailed method documentation can come later.

---

### Phase 3 – Data, Messaging & Deployment Architecture

Goal: Describe how data and messages flow between services and how everything is deployed.

1. [ ] For **patient-service** and **auth-service**:
   - [ ] List all entities and their key relationships.
   - [ ] Map each entity to its DB table and main repository.
2. [ ] For **patient-service**, **analytics-service**, and others using Kafka:
   - [ ] List Kafka topics and which service publishes/consumes each.
   - [ ] For each topic, link to or name the DTO/protobuf message used.
3. [ ] For **patient-service** and **billing-service**:
   - [ ] List gRPC services/methods they expose or call.
   - [ ] Note which service initiates calls and for which use cases.
4. [ ] Draft a **high-level deployment diagram or description**:
   - [ ] Show api-gateway, auth-service, patient-service, billing-service, analytics-service, DBs, Kafka, and any external systems.
   - [ ] Indicate protocols between them (HTTP, gRPC, Kafka).

> If needed, you can later split Phase 3 into:
> - **3A – Data & Database**
> - **3B – Messaging & Deployment**
> to keep work chunks even smaller.

---

## 4. Flexibility Notes

- You can reorder phases per service (e.g., do security for auth-service earlier).
- Within a phase, focus on **one microservice at a time**.
- If any checklist feels too big, split tasks further (for example, "list DTO names" today, "detail 1–2 important flows" tomorrow).
