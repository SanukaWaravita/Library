# 05 - Non-Functional Requirements

## Overview

Non-functional requirements (NFRs) define how well the system performs its functions. They specify the quality attributes, constraints, and characteristics that determine the system's overall quality and effectiveness. While functional requirements define what the system does, NFRs define how well it does it.

## Non-Functional Requirements Fundamentals

### Definition and Purpose
- **Quality Attributes:** System performance characteristics
- **Constraints and Limitations:** System boundaries and restrictions
- **User Experience:** Usability and accessibility aspects
- **System Characteristics:** Reliability, security, and maintainability

### Key Characteristics
- **Cross-Cutting:** Apply to entire system or multiple functions
- **Qualitative Measures:** Often subjective quality assessments
- **Implementation Impact:** Affect design and architecture decisions
- **Trade-off Considerations:** May conflict with other requirements

## Categories of Non-Functional Requirements

### 1. Performance Requirements
**Definition:** System speed, capacity, and resource utilization
**Key Aspects:**
- **Response Time:** Time for system to respond to user actions
- **Throughput:** Number of transactions processed per unit time
- **Capacity:** Maximum load the system can handle
- **Resource Utilization:** CPU, memory, and storage usage

**Examples:**
- "System shall process 1000 transactions per minute"
- "Page load time shall not exceed 2 seconds"
- "System shall support 500 concurrent users"

### 2. Reliability Requirements
**Definition:** System dependability and fault tolerance
**Key Aspects:**
- **Availability:** System uptime percentage
- **Mean Time Between Failures (MTBF):** Average time between failures
- **Mean Time To Repair (MTTR):** Average repair time
- **Fault Tolerance:** Ability to continue operating during failures

**Examples:**
- "System shall be available 99.9% of the time"
- "System shall recover from failures within 5 minutes"
- "System shall maintain data integrity during power failures"

### 3. Security Requirements
**Definition:** System protection against unauthorized access and threats
**Key Aspects:**
- **Authentication:** User identity verification
- **Authorization:** Access control and permissions
- **Confidentiality:** Data protection from unauthorized disclosure
- **Integrity:** Data protection from unauthorized modification

**Examples:**
- "User passwords shall be encrypted using AES-256"
- "System shall log all security-related events"
- "Data transmission shall use SSL/TLS encryption"

### 4. Usability Requirements
**Definition:** Ease of use and user experience quality
**Key Aspects:**
- **Learnability:** How easily users can learn the system
- **Efficiency:** Speed and productivity of user tasks
- **Memorability:** How easily users remember how to use the system
- **Error Prevention:** System's ability to prevent user errors

**Examples:**
- "Users shall complete common tasks within 3 steps"
- "Error messages shall be clear and actionable"
- "System shall provide context-sensitive help"

### 5. Scalability Requirements
**Definition:** System's ability to handle growth
**Key Aspects:**
- **Horizontal Scaling:** Adding more servers or instances
- **Vertical Scaling:** Increasing server capacity
- **Elasticity:** Automatic scaling based on demand
- **Performance Maintenance:** Consistent performance during scaling

**Examples:**
- "System shall support 10x increase in user load"
- "Database shall handle 1TB of data growth"
- "System shall automatically scale during peak hours"

### 6. Maintainability Requirements
**Definition:** Ease of system modification and enhancement
**Key Aspects:**
- **Modularity:** System component independence
- **Readability:** Code and documentation clarity
- **Testability:** Ease of testing system components
- **Extensibility:** Ability to add new features

**Examples:**
- "Code shall follow established coding standards"
- "System shall support plug-in architecture"
- "Documentation shall be updated within 1 week of changes"

### 7. Portability Requirements
**Definition:** System's ability to operate in different environments
**Key Aspects:**
- **Platform Independence:** Operating system compatibility
- **Browser Compatibility:** Web browser support
- **Device Compatibility:** Mobile and desktop support
- **Data Migration:** Ability to move data between systems

**Examples:**
- "System shall run on Windows, Linux, and macOS"
- "Application shall work on Chrome, Firefox, and Safari"
- "Data shall be exportable in CSV and XML formats"

### 8. Compatibility Requirements
**Definition:** System's ability to work with other systems
**Key Aspects:**
- **Backward Compatibility:** Support for older versions
- **Forward Compatibility:** Future version support
- **Interoperability:** Communication with external systems
- **Standards Compliance:** Industry standard adherence

**Examples:**
- "System shall import data from legacy systems"
- "API shall follow REST standards"
- "System shall integrate with existing authentication systems"

## Writing Effective Non-Functional Requirements

### 1. Use Measurable Criteria
**Guidelines:**
- Include specific metrics and thresholds
- Define measurement methods
- Specify acceptable ranges
- Include time frames and conditions

**Examples:**
- **Poor:** "System shall be fast"
- **Good:** "System response time shall not exceed 2 seconds for 95% of requests under normal load"

### 2. Consider Context and Conditions
**Guidelines:**
- Specify applicable conditions
- Define normal vs. peak scenarios
- Include environmental factors
- Consider user and system contexts

**Examples:**
- "System shall maintain 99.9% availability during business hours"
- "Performance shall not degrade more than 10% when user load doubles"

### 3. Make Requirements Testable
**Guidelines:**
- Define verification methods
- Specify test conditions
- Include success criteria
- Enable objective measurement

**Examples:**
- **Testable:** "System shall encrypt data using AES-256 algorithm"
- **Non-Testable:** "System shall be secure"

### 4. Prioritize and Rank Requirements
**Guidelines:**
- Identify critical requirements
- Rank by business importance
- Consider implementation cost
- Enable trade-off decisions

**Categories:**
- **Must Have:** Critical for system success
- **Should Have:** Important but not critical
- **Could Have:** Desirable but not necessary
- **Won't Have:** Not required for current release

## Non-Functional Requirements Validation

### 1. Feasibility Analysis
**Assessment Areas:**
- Technical feasibility
- Cost implications
- Time constraints
- Resource requirements

**Techniques:**
- Proof-of-concept development
- Technology evaluation
- Cost-benefit analysis
- Expert consultation

### 2. Consistency Checking
**Assessment Areas:**
- Internal consistency
- Compatibility with functional requirements
- Alignment with business objectives
- Stakeholder agreement

**Techniques:**
- Requirements cross-referencing
- Stakeholder reviews
- Conflict resolution
- Trade-off analysis

### 3. Testability Verification
**Assessment Areas:**
- Measurement capability
- Test environment availability
- Verification method feasibility
- Success criteria clarity

**Techniques:**
- Test case development
- Measurement tool evaluation
- Pilot testing
- Quality assurance review

## FURPS+ Model for NFRs

### FURPS Categories
- **Functionality:** Feature set and capabilities (functional requirements)
- **Usability:** Ease of use and user experience
- **Reliability:** System dependability and fault tolerance
- **Performance:** Speed, capacity, and resource utilization
- **Supportability:** Maintainability and adaptability

### Plus (+) Categories
- **Design Constraints:** Implementation limitations
- **Implementation Requirements:** Development constraints
- **Interface Requirements:** System interaction specifications
- **Physical Requirements:** Hardware and environmental constraints

## Common Challenges

### Requirements Quality Issues
- **Vagueness:** Subjective or unmeasurable requirements
- **Incompleteness:** Missing important quality attributes
- **Over-Constraint:** Unnecessarily restrictive requirements
- **Conflict:** Incompatible requirements

### Process Issues
- **Late Identification:** NFRs identified after design phase
- **Poor Prioritization:** All NFRs treated equally
- **Implementation Difficulty:** Technically challenging requirements
- **Testing Complexity:** Difficult to verify NFRs

### Management Issues
- **Stakeholder Disagreement:** Different quality priorities
- **Cost Implications:** Expensive NFR implementation
- **Trade-off Decisions:** Balancing conflicting requirements
- **Scope Management:** NFR scope creep

## Tools and Techniques

### Requirements Elicitation Tools
- **Quality Attribute Workshops:** Stakeholder quality discussions
- **Quality Attribute Scenarios:** Concrete quality examples
- **Utility Trees:** Quality attribute prioritization
- **Requirements Templates:** Standardized NFR formats

### Analysis and Specification Tools
- **Quality Models:** ISO 9126, FURPS+ frameworks
- **Requirements Management Tools:** DOORS, Jira, Azure DevOps
- **Modeling Tools:** UML quality diagrams
- **Prototyping Tools:** Quality validation through demonstration

### Validation and Testing Tools
- **Performance Testing Tools:** LoadRunner, JMeter
- **Security Testing Tools:** Vulnerability scanners, penetration testing
- **Usability Testing Tools:** User testing platforms, analytics
- **Monitoring Tools:** System performance and quality tracking

### Measurement and Metrics Tools
- **Metrics Collection:** Performance monitoring systems
- **Quality Dashboards:** Real-time quality metrics display
- **Benchmarking Tools:** Industry standard comparisons
- **Reporting Tools:** Quality assessment reports

---

**Key Takeaway:** Non-functional requirements define system quality and effectiveness. They are cross-cutting concerns that significantly impact system design, implementation, and user satisfaction. Effective NFRs are measurable, testable, and properly prioritized to ensure system success.