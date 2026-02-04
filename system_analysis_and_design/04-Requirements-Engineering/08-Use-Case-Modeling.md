# 08 - Use Case Modeling

## Overview

Use case modeling is a technique for capturing functional requirements by describing how users interact with the system to achieve their goals. Use cases provide a user-centric view of system functionality, focusing on what the system does rather than how it does it.

## Use Case Fundamentals

### Definition and Purpose
- **User-Centric:** Focus on user goals and interactions
- **Scenario-Based:** Describe specific usage situations
- **Black-Box View:** External system behavior without internal details
- **Requirements Capture:** Functional requirement specification tool

### Key Concepts
- **Actor:** User or system that interacts with the system
- **Use Case:** Specific way the system is used to achieve a goal
- **Scenario:** Specific sequence of interactions within a use case
- **Association:** Relationship between actors and use cases

### Benefits
- **User Understanding:** Clear view of user needs and goals
- **Requirements Validation:** Stakeholder agreement on functionality
- **System Scope Definition:** Clear system boundaries
- **Test Case Development:** Basis for functional testing

## Actors

### Actor Types

#### 1. Primary Actors
**Definition:** Users who initiate use cases to achieve goals
**Characteristics:**
- **Active Role:** Drive system interactions
- **Goal-Oriented:** Have specific objectives
- **System Users:** Direct system beneficiaries

**Examples:**
- Customer placing an order
- Administrator managing users
- Doctor accessing patient records

#### 2. Secondary Actors
**Definition:** Users who support primary actors' goals
**Characteristics:**
- **Supporting Role:** Assist primary actors
- **Reactive:** Respond to system requests
- **External Systems:** May be other systems or users

**Examples:**
- Payment gateway processing payment
- Email system sending notifications
- Help desk providing support

#### 3. System Actors
**Definition:** External systems that interact with the system
**Characteristics:**
- **Automated:** No human intervention
- **Interface-Based:** API or protocol interactions
- **Reliability:** Consistent behavior expected

**Examples:**
- Database management system
- Third-party authentication service
- External data providers

### Actor Identification
**Techniques:**
- **Stakeholder Analysis:** Identify system users and external systems
- **User Role Analysis:** Determine different user types and responsibilities
- **System Boundary Analysis:** Identify external system interfaces
- **Business Process Analysis:** Map business roles to system actors

**Questions to Ask:**
- Who will use the system?
- Who will maintain the system?
- What external systems will interact?
- Who will receive system outputs?

## Use Cases

### Use Case Characteristics
- **Goal-Oriented:** Describe complete user goals
- **Complete:** From initiation to successful completion
- **Atomic:** Single, well-defined functionality
- **Independent:** Can be understood without other use cases

### Use Case Granularity
**Levels:**
- **Summary Level:** High-level business goals
- **User Goal Level:** Complete user tasks
- **Subfunction Level:** Detailed steps within goals

**Guidelines:**
- **User Goal Focus:** Most use cases should be user-goal level
- **Summary for Overview:** High-level use cases for scope
- **Subfunctions for Detail:** Break down complex interactions

### Use Case Naming
**Conventions:**
- **Verb-Noun Format:** "Create Order", "Process Payment"
- **Goal-Oriented:** Reflect user objectives
- **Consistent:** Use similar naming patterns
- **Unique:** Avoid duplicate or confusing names

## Use Case Descriptions

### Basic Use Case Format
```
Use Case Name: [Descriptive name]
Actors: [Primary and secondary actors]
Preconditions: [Required system state]
Postconditions: [System state after completion]
Main Success Scenario:
1. [Step 1]
2. [Step 2]
3. [Step 3]
...
Extensions:
1a. [Alternative flow]
2b. [Exception handling]
...
```

### Main Success Scenario
**Purpose:** Describe the most common, successful path
**Structure:**
- **Sequential Steps:** Numbered sequence of interactions
- **Actor-System Alternation:** Clear who performs each step
- **Complete Goal:** From start to successful completion
- **Concrete Actions:** Specific, measurable steps

### Extensions (Alternative Flows)
**Purpose:** Describe variations and error conditions
**Structure:**
- **Condition-Action Format:** "1a. Condition: Action steps"
- **Exception Handling:** Error conditions and responses
- **Alternative Paths:** Different ways to achieve goals
- **Resume Points:** Where to return to main flow

### Preconditions and Postconditions
**Preconditions:** What must be true before use case execution
**Postconditions:** What is true after successful completion
**Examples:**
- **Precondition:** "User must be logged in"
- **Postcondition:** "Order is saved and confirmation sent"

## Use Case Relationships

### Include Relationship
**Definition:** One use case includes behavior from another
**Purpose:** Extract common functionality for reuse
**Notation:** Dashed arrow with "include" stereotype
**Example:** "Validate User" included in multiple authentication use cases

### Extend Relationship
**Definition:** One use case extends another under certain conditions
**Purpose:** Add optional or conditional behavior
**Notation:** Dashed arrow with "extend" stereotype
**Example:** "Handle Payment Error" extends "Process Payment"

### Generalization Relationship
**Definition:** One use case is a specialization of another
**Purpose:** Show use case variations or inheritance
**Notation:** Solid line with hollow arrowhead
**Example:** "Guest Checkout" generalizes "Customer Checkout"

## Use Case Diagrams

### Diagram Elements
- **Actors:** Stick figures outside system boundary
- **Use Cases:** Ovals containing use case names
- **System Boundary:** Rectangle containing use cases
- **Relationships:** Lines connecting actors and use cases
- **Stereotypes:** <<include>>, <<extend>> labels

### Diagram Organization
**Guidelines:**
- **System Focus:** One system per diagram
- **Actor Placement:** Outside system boundary
- **Relationship Clarity:** Clear, non-crossing lines
- **Grouping:** Related use cases together
- **Levels:** Different diagrams for different abstraction levels

## Use Case Development Process

### 1. Identify Actors
**Activities:**
- Stakeholder identification
- Role and responsibility analysis
- External system identification
- Actor hierarchy development

### 2. Identify Use Cases
**Activities:**
- Actor goal analysis
- Business process mapping
- Functional requirement review
- Use case brainstorming

### 3. Develop Use Case Descriptions
**Activities:**
- Main scenario writing
- Extension identification
- Pre/postcondition definition
- Actor interaction specification

### 4. Refine Use Case Model
**Activities:**
- Relationship identification
- Use case consolidation
- Diagram creation
- Stakeholder validation

## Use Case Validation

### Quality Criteria
- **Complete:** All user goals covered
- **Correct:** Accurately reflect requirements
- **Consistent:** No conflicting use cases
- **Clear:** Understandable to stakeholders
- **Testable:** Can derive test cases

### Validation Techniques
- **Walkthroughs:** Team review of use cases
- **Prototyping:** User interface validation
- **User Feedback:** Stakeholder review sessions
- **Test Case Derivation:** Verify testability

## Use Cases vs User Stories

### Use Cases
- **Structured Format:** Detailed, formal descriptions
- **Complete Scenarios:** Full interaction sequences
- **System Boundaries:** Clear scope definition
- **Complex Systems:** Better for detailed requirements

### User Stories
- **Simple Format:** Brief, conversational statements
- **Goal Focus:** User objectives without details
- **Agile Development:** Iterative refinement
- **Simple Systems:** Better for basic requirements

### When to Use Each
- **Use Cases:** Complex systems, formal requirements, detailed specifications
- **User Stories:** Simple systems, agile development, iterative refinement
- **Hybrid Approach:** Use cases for complex areas, stories for simple features

## Common Challenges

### Use Case Quality Issues
- **Too Granular:** Use cases that are too detailed or small
- **Too Abstract:** Use cases lacking sufficient detail
- **Incomplete Coverage:** Missing important user goals
- **Inconsistent Level:** Mixing different abstraction levels

### Process Issues
- **Actor Identification:** Missing important actors
- **Scope Creep:** Use cases expanding beyond system boundaries
- **Relationship Complexity:** Over-complicated use case relationships
- **Maintenance Difficulty:** Hard to keep use cases current

### Communication Issues
- **Stakeholder Disagreement:** Different views of system usage
- **Technical Focus:** Too technically oriented descriptions
- **User Distance:** Lack of real user involvement
- **Documentation Overload:** Too much detail discouraging reading

## Tools and Techniques

### Modeling Tools
- **UML Tools:** Enterprise Architect, Visual Paradigm
- **Requirements Tools:** IBM DOORS, Jama Software
- **Diagramming Tools:** Lucidchart, Draw.io
- **Collaboration Tools:** Miro, Mural for workshops

### Development Techniques
- **CRC Cards:** Class-Responsibility-Collaboration for actor identification
- **User Journey Mapping:** Visual user experience mapping
- **Storyboard Creation:** Visual scenario development
- **Role-Playing:** Actor interaction simulation

### Validation Techniques
- **Use Case Walkthroughs:** Team review sessions
- **User Acceptance Testing:** Use case-based testing
- **Prototype Validation:** Interactive model testing
- **Peer Reviews:** Expert use case assessment

### Automation Tools
- **Use Case Generators:** Automated use case creation
- **Test Case Generators:** Use case to test case conversion
- **Traceability Tools:** Requirements to use case linking
- **Reporting Tools:** Use case metrics and analysis

---

**Key Takeaway:** Use case modeling provides a structured, user-centric approach to capturing functional requirements. By focusing on user goals and system interactions, use cases ensure comprehensive requirement coverage and clear system boundaries.