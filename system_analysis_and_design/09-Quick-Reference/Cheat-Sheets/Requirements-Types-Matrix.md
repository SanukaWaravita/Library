# Requirements Types Matrix Cheat Sheet

## Overview
Requirements engineering involves identifying, analyzing, and managing different types of requirements. This cheat sheet provides a comprehensive matrix of requirements types, their characteristics, sources, and validation methods.

## Requirements Classification Framework

### Primary Classification: Functional vs Non-Functional

| Aspect | Functional Requirements | Non-Functional Requirements |
|--------|-------------------------|------------------------------|
| **Definition** | What the system must do | How well the system must perform |
| **Focus** | Features and capabilities | Quality attributes |
| **Measurable** | Yes, through testing | Yes, through metrics |
| **Priority** | Must have core features | Quality constraints |
| **Examples** | User login, data processing | Performance, security, usability |
| **Testing** | Black-box testing | Performance/load testing |

### FURPS+ Model
**FURPS+** (Functional, Usability, Reliability, Performance, Supportability) provides a comprehensive requirements classification:

- **Functional:** Features and capabilities
- **Usability:** User experience and accessibility
- **Reliability:** System dependability and availability
- **Performance:** Speed, throughput, and efficiency
- **Supportability:** Maintainability and adaptability
- **+ (Plus):** Additional constraints (security, portability, etc.)

## Detailed Requirements Types Matrix

### Functional Requirements

| Type | Description | Sources | Examples | Validation Methods |
|------|-------------|---------|----------|-------------------|
| **Business Rules** | Rules governing business operations | Business analysts, domain experts | "Orders over $100 get free shipping" | Business rule testing, scenario testing |
| **User Tasks** | Specific user activities the system must support | User interviews, observation | "User can search products by category" | Task analysis, user acceptance testing |
| **Data Processing** | Data manipulation and transformation | Data analysts, existing systems | "Calculate order total with tax" | Data validation, calculation verification |
| **Integration** | Interaction with external systems | System architects, API documentation | "Sync inventory with supplier system" | Integration testing, API testing |
| **Reporting** | Information display and export | Business users, regulators | "Generate monthly sales report" | Report validation, data accuracy checks |
| **Workflow** | Business process automation | Process owners, workflow analysis | "Approve purchase order workflow" | Process simulation, workflow testing |

### Non-Functional Requirements

#### Quality Attributes (ISO 25010)

| Quality Attribute | Description | Key Metrics | Examples |
|------------------|-------------|-------------|----------|
| **Performance** | System response time and throughput | Response time < 2s, Throughput > 1000 req/s | "Search results return in < 1 second" |
| **Reliability** | System availability and fault tolerance | Uptime 99.9%, MTBF > 100 hours | "System available 24/7 except scheduled maintenance" |
| **Usability** | Ease of use and user experience | Task completion rate > 95%, Error rate < 5% | "New users complete registration in < 5 minutes" |
| **Security** | Protection against unauthorized access | Authentication success rate, Data breach incidents | "Multi-factor authentication required for admin access" |
| **Maintainability** | Ease of modification and enhancement | Code coverage > 80%, Mean time to repair < 4 hours | "New features can be added without system downtime" |
| **Portability** | Ability to run on different platforms | Platform compatibility matrix | "Application runs on Windows, macOS, and Linux" |
| **Scalability** | Ability to handle growth | Concurrent users > 10,000, Data volume > 1TB | "System supports 100x user growth without performance degradation" |
| **Compatibility** | Coexistence with other systems | API compatibility, Data format support | "Import data from Excel, CSV, and XML formats" |

#### System Constraints

| Constraint Type | Description | Examples | Impact on Design |
|----------------|-------------|----------|------------------|
| **Technical** | Hardware/software limitations | "Must run on existing infrastructure" | Architecture decisions, technology selection |
| **Business** | Organizational limitations | "Budget < $500K, Timeline < 6 months" | Scope management, resource allocation |
| **Regulatory** | Legal and compliance requirements | "GDPR compliance, HIPAA security" | Security design, data handling |
| **Operational** | Deployment and maintenance constraints | "Zero downtime deployment required" | Release strategy, maintenance procedures |
| **Environmental** | Physical and organizational environment | "Must work in low-bandwidth areas" | Offline capabilities, data synchronization |

### Requirements by Development Phase

#### Requirements Engineering Phase
| Requirement Type | When Identified | Techniques | Deliverables |
|------------------|----------------|------------|--------------|
| **Stakeholder Needs** | Requirements gathering | Interviews, workshops | Stakeholder analysis document |
| **Business Requirements** | Business analysis | Business process modeling | Business requirements document |
| **User Requirements** | User analysis | Use cases, user stories | User requirements specification |
| **System Requirements** | System analysis | Functional decomposition | System requirements specification |
| **Acceptance Criteria** | Requirements validation | Acceptance test planning | Requirements traceability matrix |

#### Design and Development Phase
| Requirement Type | When Used | Application | Validation |
|------------------|-----------|-------------|------------|
| **Functional Specs** | System design | Component specification | Unit testing |
| **Interface Specs** | Integration design | API contracts | Integration testing |
| **Data Specs** | Database design | Schema definition | Data validation |
| **UI/UX Specs** | Interface design | Wireframes, prototypes | User testing |
| **Performance Specs** | Architecture design | Capacity planning | Load testing |

#### Testing and Deployment Phase
| Requirement Type | When Validated | Test Types | Acceptance Criteria |
|------------------|----------------|------------|-------------------|
| **Functional Req.** | System testing | Functional testing | All features work as specified |
| **Non-Functional Req.** | Performance testing | Load, stress, security testing | Performance metrics met |
| **Business Req.** | User acceptance testing | UAT, beta testing | Business objectives achieved |
| **Compliance Req.** | Audit and certification | Security audits, compliance testing | Regulatory requirements met |

## Requirements Sources and Elicitation Techniques

### Primary Sources

| Source | Types of Requirements | Elicitation Techniques | Best Practices |
|--------|----------------------|----------------------|---------------|
| **Users** | Functional, usability | Interviews, observation, surveys | Shadow users, create personas |
| **Business Stakeholders** | Business rules, processes | Workshops, document analysis | Include all levels of organization |
| **Domain Experts** | Business rules, constraints | Expert interviews, focus groups | Validate with multiple experts |
| **Existing Systems** | Integration, data requirements | System analysis, reverse engineering | Document current capabilities |
| **Regulations** | Compliance, security | Legal review, compliance analysis | Consult legal experts |
| **Technical Team** | Technical constraints, feasibility | Technical assessment, prototyping | Early involvement in requirements |

### Elicitation Techniques Matrix

| Technique | Best For | Participants | Time Required | Output |
|-----------|----------|--------------|---------------|--------|
| **Interviews** | Detailed requirements, complex domains | 1-5 people | 1-2 hours each | Meeting notes, requirements list |
| **Workshops** | Group consensus, conflicting requirements | 5-15 people | 2-4 hours | Group decisions, prioritized requirements |
| **Observation** | Actual workflow understanding | 1-2 observers | Hours to days | Process flows, pain points |
| **Prototyping** | UI/UX requirements, unclear requirements | Users and designers | Iterative process | Working prototype, feedback |
| **Document Analysis** | Existing system understanding | 1-2 analysts | Hours to days | Requirements from legacy systems |
| **Surveys** | Large user base, quantitative data | Many respondents | 1-2 weeks | Statistical requirements data |
| **Use Cases** | Functional requirements, user scenarios | Product owners, users | 1-4 hours each | Use case specifications |
| **User Stories** | Agile requirements, user value | Product owners, users | 15-30 minutes each | Story cards, acceptance criteria |

## Requirements Validation and Verification

### Validation Techniques

| Technique | Purpose | When Used | Participants |
|-----------|---------|-----------|--------------|
| **Reviews** | Check completeness, consistency | After requirements gathering | Requirements team, stakeholders |
| **Prototyping** | Validate understanding, gather feedback | When requirements unclear | Users, designers, developers |
| **Modeling** | Verify logical consistency | During requirements analysis | Business analysts, architects |
| **Acceptance Criteria** | Define success metrics | Before development | Product owners, QA team |
| **Traceability** | Ensure coverage and consistency | Throughout project | Requirements managers |

### Quality Criteria (IEEE 830)

| Quality Criterion | Description | Validation Method | Common Issues |
|------------------|-------------|------------------|---------------|
| **Complete** | All requirements specified | Requirements review, traceability | Missing error conditions |
| **Consistent** | No conflicts between requirements | Cross-reference checking | Contradictory requirements |
| **Unambiguous** | Single interpretation possible | Peer reviews, user validation | Vague terms, undefined acronyms |
| **Testable** | Can be verified through testing | Test case development | Subjective requirements |
| **Feasible** | Achievable within constraints | Technical assessment | Overly ambitious requirements |
| **Traceable** | Linked to business needs | Traceability matrix | Orphaned requirements |
| **Prioritized** | Clear importance ranking | MoSCoW method | All requirements equal priority |
| **Modifiable** | Easy to change and maintain | Version control, change management | Hard to modify document |

## Requirements Management

### Requirements Attributes

| Attribute | Purpose | Values | Example |
|-----------|---------|--------|---------|
| **ID** | Unique identification | REQ-001, FR-101 | FR-001: User login |
| **Name** | Brief description | Short phrase | "Password reset functionality" |
| **Description** | Detailed explanation | 1-2 paragraphs | "Users can reset password via email link..." |
| **Priority** | Business importance | Must Have, Should Have, Could Have | Must Have |
| **Source** | Origin of requirement | Stakeholder name, document reference | "User interview - John Doe" |
| **Status** | Current state | Draft, Approved, Implemented | Approved |
| **Acceptance Criteria** | Success definition | Measurable conditions | "Password reset within 5 minutes" |

### Change Management

| Change Type | Trigger | Process | Approval Required |
|-------------|---------|---------|------------------|
| **Addition** | New business needs | Impact analysis, prioritization | Product owner |
| **Modification** | Clarification needed | Requirements review | Requirements team |
| **Deletion** | No longer needed | Impact analysis | Product owner + stakeholders |
| **Deferral** | Scope reduction | Reprioritization | Project manager |

### Traceability Relationships

| Relationship Type | Description | Example |
|------------------|-------------|---------|
| **Satisfies** | Requirement fulfills business need | Login requirement satisfies security need |
| **Depends On** | Requirement requires another | Payment processing depends on user authentication |
| **Conflicts With** | Requirements contradict each other | "Free shipping" conflicts with "minimum order" |
| **Refines** | More detailed version of requirement | Use case refines high-level requirement |
| **Tests** | Test case validates requirement | Unit test verifies calculation requirement |

## Common Requirements Anti-Patterns

### Functional Requirements Issues
- **Too Vague:** "System should be user-friendly" → "Users complete tasks in < 3 clicks"
- **Implementation Focused:** "Use SQL database" → "Data must be searchable and reportable"
- **Missing Context:** "System must be fast" → "Search results return in < 2 seconds"
- **Over-Specification:** Detailed UI layout → High-level user interaction requirements

### Non-Functional Requirements Issues
- **Not Measurable:** "System should be reliable" → "99.9% uptime, MTTR < 4 hours"
- **Conflicting Requirements:** "Fast and cheap" → Balanced performance-cost requirements
- **Missing Constraints:** No budget or timeline limits → Unachievable requirements
- **Technology Assumptions:** "Use latest framework" → Technology-agnostic requirements

### Process Issues
- **No Prioritization:** All requirements equal → Clear must-have/should-have distinction
- **No Traceability:** Requirements disconnected from business needs → Full traceability matrix
- **No Validation:** Requirements not reviewed by stakeholders → Formal review process
- **Scope Creep:** Uncontrolled additions → Change control process

## Requirements Engineering Best Practices

### Planning Phase
1. **Define Scope:** Clear project boundaries and objectives
2. **Identify Stakeholders:** Complete stakeholder analysis
3. **Select Techniques:** Appropriate elicitation methods
4. **Plan Resources:** Team members, tools, and timeline
5. **Establish Process:** Requirements management workflow

### Elicitation Phase
1. **Prepare Materials:** Interview guides, workshop agendas
2. **Conduct Sessions:** Multiple techniques for comprehensive coverage
3. **Document Findings:** Immediate note-taking and organization
4. **Validate Understanding:** Feedback loops with stakeholders
5. **Manage Expectations:** Clear communication about process

### Analysis and Specification Phase
1. **Organize Requirements:** Logical grouping and categorization
2. **Resolve Conflicts:** Stakeholder negotiation and prioritization
3. **Model Requirements:** Use cases, data flow diagrams
4. **Define Acceptance Criteria:** Measurable success conditions
5. **Create Traceability:** Link to business objectives

### Validation and Management Phase
1. **Review Requirements:** Formal inspection and walkthrough
2. **Validate with Users:** Prototypes and demonstrations
3. **Baseline Requirements:** Formal approval and version control
4. **Manage Changes:** Controlled modification process
5. **Track Status:** Requirements implementation monitoring

---

**Key Takeaway:** Effective requirements engineering requires understanding different requirement types, using appropriate elicitation techniques, and maintaining rigorous validation and management processes. Well-defined requirements are the foundation of successful system development.