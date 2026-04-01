# 03 - Object-Oriented Analysis

## Overview

Object-oriented analysis (OOA) is a methodology that models systems using objects, classes, and their relationships. It focuses on identifying real-world objects, their properties, and behaviors to create systems that mirror the problem domain structure.

## Object-Oriented Fundamentals

### Core Concepts
- **Objects:** Real-world entities with identity, state, and behavior
- **Classes:** Templates defining common object characteristics
- **Encapsulation:** Data and behavior bundling within objects
- **Inheritance:** Class hierarchy with shared characteristics
- **Polymorphism:** Same interface, different implementations
- **Abstraction:** Focus on essential characteristics, ignore details

### OOA Principles
- **Problem Domain Focus:** Model real-world concepts directly
- **Modularity:** Independent, cohesive system components
- **Reusability:** Class and object reuse across systems
- **Maintainability:** Clear structure for system evolution
- **Natural Mapping:** Direct problem-to-solution correspondence

## Object Identification

### Object Identification Techniques

#### 1. Noun Analysis
**Process:** Identify nouns and noun phrases from requirements
**Guidelines:**
- **Concrete Objects:** Physical entities (Customer, Product, Order)
- **Abstract Concepts:** Business concepts (Account, Transaction, Policy)
- **Events:** Occurrences (Payment, Shipment, Notification)
- **Roles:** People positions (Manager, Clerk, Administrator)

**Steps:**
1. List all nouns from requirements documents
2. Eliminate duplicates and synonyms
3. Classify nouns by type
4. Validate with domain experts

#### 2. Use Case Analysis
**Process:** Derive objects from use case scenarios
**Guidelines:**
- **Actors:** External entities interacting with system
- **Boundary Objects:** System interface representations
- **Entity Objects:** Persistent information objects
- **Control Objects:** Coordination and sequencing objects

**Object Types:**
- **Boundary Objects:** User interface and external system interfaces
- **Entity Objects:** Core business data and concepts
- **Control Objects:** Business logic and workflow coordination

#### 3. CRC Card Analysis
**Technique:** Class-Responsibility-Collaboration cards
**Process:**
1. Write class name on card
2. List class responsibilities
3. Identify collaborating classes
4. Refine through role-playing scenarios

**Card Structure:**
```
Class Name: Customer
Responsibilities:
- Maintain customer information
- Validate customer data
- Process customer orders
Collaborations:
- Order (places)
- Payment (provides)
- Address (has)
```

### Object Selection Criteria
- **Relevance:** Important to system functionality
- **Persistence:** Needs to be stored or remembered
- **Attributes:** Has properties requiring management
- **Operations:** Performs actions or undergoes changes
- **Relationships:** Interacts with other objects

## Class Definition

### Class Components

#### 1. Class Name
**Guidelines:**
- **Descriptive:** Clear, meaningful names
- **Singular:** Use singular nouns
- **Capitalized:** Start with capital letter
- **Consistent:** Follow naming conventions

**Examples:**
- Customer (good)
- CustomerData (too technical)
- Customers (plural, avoid)

#### 2. Attributes
**Definition:** Data properties of the class
**Guidelines:**
- **Descriptive Names:** Clear attribute meanings
- **Appropriate Types:** Correct data types
- **Encapsulation:** Private visibility by default
- **Validation:** Include business rules

**Examples:**
- `customerId: Integer` (unique identifier)
- `customerName: String` (customer full name)
- `creditLimit: Money` (spending limit)
- `isActive: Boolean` (account status)

#### 3. Operations (Methods)
**Definition:** Behaviors or actions of the class
**Guidelines:**
- **Action-Oriented:** Verb-based names
- **Single Responsibility:** One clear purpose
- **Appropriate Visibility:** Public, private, or protected
- **Parameter Types:** Well-defined inputs and outputs

**Examples:**
- `placeOrder(order: Order): Boolean` (create new order)
- `updateAddress(newAddress: Address): void` (change address)
- `calculateBalance(): Money` (compute current balance)
- `validateCreditLimit(amount: Money): Boolean` (check credit)

### Class Stereotypes
- **<<Entity>>:** Core business data classes
- **<<Boundary>>:** User interface and system interface classes
- **<<Control>>:** Business logic and coordination classes
- **<<Utility>>:** Helper and utility classes

## Relationships

### Association Relationships
**Definition:** Structural relationships between classes
**Notation:** Solid line between classes
**Types:**
- **One-to-One:** Each instance relates to one other instance
- **One-to-Many:** One instance relates to many other instances
- **Many-to-Many:** Many instances relate to many other instances

**Examples:**
- Customer **places** Order (one-to-many)
- Employee **works for** Department (many-to-one)
- Student **enrolls in** Course (many-to-many)

### Aggregation Relationships
**Definition:** "Whole-part" relationships
**Notation:** Diamond at whole end
**Characteristics:**
- **Weak Coupling:** Parts can exist independently
- **Shared Ownership:** Parts can belong to multiple wholes
- **Transitive:** If A contains B, and B contains C, then A contains C

**Examples:**
- Department **contains** Employees (employees can transfer)
- Order **contains** OrderItems (items belong to one order)

### Composition Relationships
**Definition:** Strong "whole-part" relationships
**Notation:** Filled diamond at whole end
**Characteristics:**
- **Strong Coupling:** Parts cannot exist without whole
- **Exclusive Ownership:** Parts belong to only one whole
- **Lifetime Dependency:** Parts created/destroyed with whole

**Examples:**
- Order **contains** OrderHeader (header is part of order)
- Car **has** Engine (engine belongs to specific car)

### Inheritance Relationships
**Definition:** "Is-a" relationships between classes
**Notation:** Triangle pointing to superclass
**Characteristics:**
- **Specialization:** Subclass is specific type of superclass
- **Inheritance:** Subclass inherits superclass attributes and operations
- **Polymorphism:** Subclass can override inherited behavior
- **Extensibility:** Easy addition of new subclasses

**Examples:**
- CheckingAccount **is a** BankAccount
- Manager **is an** Employee
- PremiumCustomer **is a** Customer

### Dependency Relationships
**Definition:** Usage relationships between classes
**Notation:** Dashed arrow from dependent to independent
**Characteristics:**
- **Weak Relationship:** One class uses another
- **Parameter Passing:** Method parameter or local variable
- **Method Call:** Calling methods of another class
- **Instantiation:** Creating instances of another class

**Examples:**
- OrderProcessor **depends on** PaymentValidator
- ReportGenerator **depends on** DatabaseConnection

## Class Diagrams

### Diagram Purpose
- **Static Structure:** Show system static organization
- **Class Relationships:** Display class interconnections
- **System Architecture:** High-level system design
- **Implementation Guide:** Code structure foundation

### Diagram Components
- **Classes:** Rectangles with name, attributes, operations
- **Relationships:** Lines showing class connections
- **Multiplicity:** Relationship participation numbers
- **Role Names:** Relationship context clarification
- **Constraints:** Relationship rule specifications

### Diagram Development
1. **Identify Classes:** From object identification
2. **Define Class Details:** Attributes and operations
3. **Establish Relationships:** Connect related classes
4. **Add Multiplicity:** Specify relationship cardinalities
5. **Include Constraints:** Add business rules
6. **Validate Diagram:** Review with stakeholders

## Use Case Realization

### Purpose
**Definition:** Connect use cases to object model
**Purpose:**
- **Design Foundation:** Use case implementation through objects
- **Object Validation:** Verify object model completeness
- **Interaction Design:** Define object collaborations
- **System Behavior:** Specify dynamic system interactions

### Realization Process

#### 1. Use Case Analysis
**Activities:**
- **Scenario Identification:** Main and alternative scenarios
- **Object Participation:** Objects involved in use case
- **Interaction Sequence:** Object interaction order
- **Responsibility Assignment:** Object responsibility allocation

#### 2. Sequence Diagrams
**Purpose:** Show object interactions over time
**Components:**
- **Objects:** Rectangles at top
- **Lifelines:** Vertical dashed lines
- **Messages:** Horizontal arrows between lifelines
- **Activation:** Rectangles showing object activity

**Example Sequence:**
1. Customer selects products
2. System validates selection
3. System calculates total
4. Customer provides payment
5. System processes payment
6. System confirms order

#### 3. Collaboration Diagrams
**Purpose:** Show object relationships and message flow
**Components:**
- **Objects:** Rectangles with object names
- **Links:** Lines showing relationships
- **Messages:** Numbered message sequences
- **Message Flow:** Collaboration sequence

### Interaction Patterns
- **Controller Pattern:** Control objects coordinate interactions
- **Observer Pattern:** Objects notify other objects of changes
- **Factory Pattern:** Objects create other objects
- **Strategy Pattern:** Objects use different algorithms

## Object-Oriented Analysis Process

### 1. Domain Analysis
**Activities:**
- **Business Understanding:** Domain knowledge acquisition
- **Problem Definition:** Clear problem statement
- **Scope Definition:** System boundary establishment
- **Key Concept Identification:** Important domain concepts

### 2. Object Identification
**Activities:**
- **Source Analysis:** Requirements document review
- **Object Listing:** Potential object identification
- **Object Filtering:** Relevance and importance assessment
- **Object Classification:** Entity, boundary, control categorization

### 3. Class Definition
**Activities:**
- **Attribute Identification:** Class property determination
- **Operation Definition:** Class behavior specification
- **Encapsulation Design:** Visibility and access control
- **Class Refinement:** Iterative class improvement

### 4. Relationship Establishment
**Activities:**
- **Association Discovery:** Class relationship identification
- **Multiplicity Specification:** Relationship participation definition
- **Inheritance Design:** Class hierarchy development
- **Dependency Analysis:** Usage relationship identification

### 5. Use Case Realization
**Activities:**
- **Scenario Analysis:** Use case walkthrough
- **Interaction Design:** Object collaboration specification
- **Sequence Definition:** Interaction sequence creation
- **Pattern Application:** Design pattern utilization

### 6. Model Validation
**Activities:**
- **Completeness Check:** All requirement coverage verification
- **Consistency Validation:** Model internal consistency
- **Correctness Review:** Domain expert validation
- **Iterative Refinement:** Model improvement based on feedback

## OOA Best Practices

### 1. Object Identification
- **Domain Expert Involvement:** Include subject matter experts
- **Multiple Techniques:** Use various identification methods
- **Iterative Refinement:** Progressive object model improvement
- **Validation Sessions:** Regular stakeholder review

### 2. Class Design
- **Single Responsibility:** Each class has one clear purpose
- **High Cohesion:** Related attributes and operations together
- **Low Coupling:** Minimal class interdependencies
- **Appropriate Abstraction:** Right level of detail

### 3. Relationship Design
- **Necessary Relationships:** Only required connections
- **Clear Semantics:** Unambiguous relationship meanings
- **Proper Multiplicity:** Accurate participation numbers
- **Navigation Paths:** Clear relationship traversal

### 4. Model Quality
- **Understandability:** Clear to stakeholders and developers
- **Maintainability:** Easy modification and extension
- **Reusability:** Applicable to similar problems
- **Testability:** Verifiable through testing

## Tools and Techniques

### Modeling Tools
- **UML Tools:** Rational Rose, Enterprise Architect, Visual Paradigm
- **Diagramming Tools:** Lucidchart, Draw.io with UML support
- **IDE Integration:** Eclipse, IntelliJ with modeling plugins
- **Specialized Tools:** Object-oriented design tools

### Analysis Techniques
- **CRC Cards:** Class responsibility identification
- **Use Case Realization:** Dynamic model development
- **Domain Modeling:** Business concept modeling
- **Pattern Application:** Design pattern utilization

### Validation Techniques
- **Model Reviews:** Stakeholder model validation
- **Walkthroughs:** Team model review sessions
- **Prototyping:** Model validation through implementation
- **Testing:** Model verification through test cases

## Common Challenges

### Identification Challenges
- **Object Overload:** Too many or too few objects
- **Incorrect Granularity:** Wrong level of object detail
- **Domain Misunderstanding:** Incorrect domain concept understanding
- **Changing Requirements:** Object model instability

### Design Challenges
- **Poor Encapsulation:** Exposed internal class details
- **Tight Coupling:** Excessive class interdependencies
- **Inheritance Abuse:** Improper inheritance usage
- **Responsibility Confusion:** Unclear class responsibilities

### Process Challenges
- **Methodology Confusion:** Mixing paradigms inappropriately
- **Tool Complexity:** Difficult modeling tool usage
- **Stakeholder Communication:** Technical model explanation
- **Maintenance Difficulty:** Complex model updates

---

**Key Takeaway:** Object-oriented analysis provides a natural, maintainable approach to system modeling by focusing on real-world objects and their relationships. Through proper object identification, class design, and relationship establishment, OOA creates flexible, extensible system foundations.