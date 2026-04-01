# 02 - Structured Analysis

## Overview

Structured analysis is a systematic approach to system analysis that uses graphical tools and techniques to understand, model, and document system requirements. It focuses on data flow, data structures, and process logic to create clear, maintainable system specifications.

## Structured Analysis Fundamentals

### Core Principles
- **Top-Down Decomposition:** Break down complex systems into manageable components
- **Data Flow Focus:** Emphasize information movement through the system
- **Functional Modularity:** Divide system into independent, cohesive functions
- **Graphical Representation:** Use diagrams to communicate system structure
- **Iterative Refinement:** Progressive system understanding and specification

### Key Characteristics
- **Process-Centered:** Focus on system processes and data transformations
- **Hierarchical Organization:** Multi-level system decomposition
- **Data Independence:** Separate data structure from processing logic
- **Modular Design:** Independent, reusable system components
- **Documentation Emphasis:** Comprehensive system documentation

## Data Flow Diagrams (DFD) in Detail

### DFD Context and Purpose
**Definition:** A graphical representation showing how data moves through a system
**Purpose:** 
- Visualize data flow between system components
- Identify system processes and data stores
- Show system boundaries and interfaces
- Document system functionality at different levels

### DFD Symbol Set

#### 1. External Entities (Sources/Sinks)
**Symbol:** Rectangle or square
**Purpose:** Represent external producers or consumers of data
**Examples:**
- Customer (provides order data)
- Supplier (receives purchase orders)
- Bank (processes payments)
- Government agency (provides regulatory data)

**Guidelines:**
- Place outside system boundary
- Name clearly and descriptively
- Show only data flows to/from system
- Avoid showing internal system details

#### 2. Processes
**Symbol:** Circle or rounded rectangle with number
**Purpose:** Transform input data into output data
**Examples:**
- "Process Order" (P1)
- "Validate Payment" (P2)
- "Generate Invoice" (P3)

**Guidelines:**
- Number uniquely within diagram level
- Use verb phrases for names
- Show data transformation logic
- Ensure balanced inputs and outputs

#### 3. Data Stores
**Symbol:** Open-ended rectangle
**Purpose:** Represent persistent data storage
**Examples:**
- Customer Database (D1)
- Product Inventory (D2)
- Transaction Log (D3)

**Guidelines:**
- Number uniquely within diagram
- Name for data content, not technology
- Show data at rest between processes
- Indicate data access patterns

#### 4. Data Flows
**Symbol:** Directed arrows with labels
**Purpose:** Show data movement between components
**Examples:**
- "Customer Order" → Process Order
- "Validated Payment" → Update Account
- "Invoice Data" → Print Invoice

**Guidelines:**
- Label with data content description
- Show direction of data movement
- Avoid crossing lines unnecessarily
- Use meaningful, specific names

### DFD Development Levels

#### Level 0: Context Diagram
**Purpose:** Show system in its environment
**Contents:**
- Single process representing entire system
- All external entities interacting with system
- Major data flows across system boundary
- High-level system scope and interfaces

**Creation Steps:**
1. Identify system name and boundary
2. List all external entities
3. Identify major data inputs and outputs
4. Draw single process in center
5. Connect entities with data flows

#### Level 1: Overview Diagram
**Purpose:** Show major system functions
**Contents:**
- 3-7 major processes
- Key data stores shared between processes
- Data flows between processes
- Subsystem boundaries

**Creation Steps:**
1. Decompose context process into major functions
2. Identify shared data stores
3. Define data flows between processes
4. Ensure input/output balance
5. Validate with stakeholders

#### Level 2+: Detailed Diagrams
**Purpose:** Show process internal logic
**Contents:**
- Detailed subprocess decomposition
- Local data stores
- Specific data transformations
- Primitive process specifications

**Creation Steps:**
1. Select Level 1 process for decomposition
2. Identify subprocesses (3-7 per process)
3. Define local data stores if needed
4. Specify detailed data flows
5. Create mini-specifications for primitive processes

### DFD Quality Guidelines

#### Completeness Checks
- **All functions represented:** Every system function appears in DFD
- **All data flows shown:** Data movement between all components
- **All data stores identified:** Persistent data storage locations
- **All external interfaces:** System boundary crossings

#### Consistency Checks
- **Balanced diagrams:** Inputs/outputs balance between levels
- **Consistent naming:** Same names for same data flows
- **Compatible data:** Data flows match between levels
- **Logical flows:** Data flows make business sense

#### Correctness Checks
- **Accurate representation:** DFD matches actual system behavior
- **Current information:** Reflects latest requirements
- **Business rule compliance:** Follows organizational rules
- **Technical feasibility:** Technically implementable

## Data Dictionary

### Purpose and Importance
**Definition:** Centralized repository of data elements and their definitions
**Purpose:**
- Define all data flows, stores, and elements
- Ensure consistent data usage across system
- Support system maintenance and modification
- Provide implementation guidance

### Data Dictionary Components

#### 1. Data Elements
**Definition:** Smallest unit of data
**Specification:**
- **Name:** Unique, descriptive identifier
- **Type:** Data type (string, number, date, etc.)
- **Length:** Maximum size or precision
- **Format:** Specific format requirements
- **Validation Rules:** Acceptable value constraints

**Example:**
```
Name: customer_id
Type: integer
Length: 6 digits
Format: 100000-999999
Validation: Must be unique, auto-generated
```

#### 2. Data Flows
**Definition:** Data in motion between processes
**Specification:**
- **Name:** Flow identifier
- **Description:** Data content explanation
- **Source:** Origin component
- **Destination:** Target component
- **Composition:** Data elements included
- **Volume:** Expected data volume
- **Frequency:** Flow occurrence frequency

#### 3. Data Stores
**Definition:** Data at rest
**Specification:**
- **Name:** Store identifier
- **Description:** Data content and purpose
- **Structure:** Organization (file, database, etc.)
- **Composition:** Data elements stored
- **Access Methods:** How data is retrieved/updated
- **Volume:** Expected storage size
- **Retention:** Data retention policies

#### 4. Processes
**Definition:** Data transformation logic
**Specification:**
- **Name:** Process identifier
- **Description:** Process purpose and function
- **Inputs:** Data flows entering process
- **Outputs:** Data flows leaving process
- **Logic:** Process transformation rules
- **Error Handling:** Exception processing

### Data Dictionary Notation

#### Sequence/Iteration
- **{ }** for iteration (repeating elements)
- **[ ]** for optional elements
- **( )** for grouping
- **+** for selection (one of several)

**Examples:**
- `customer = customer_id + customer_name + {address_line} + phone`
- `order = order_header + [order_items]`
- `payment = (cash | credit_card | check)`

#### Data Element Types
- **Primitive:** Basic data types (integer, string, date)
- **Composite:** Combination of primitives
- **Derived:** Calculated from other data
- **Reference:** Pointers to other data structures

## Process Specifications

### Purpose
**Definition:** Detailed description of process logic
**Purpose:**
- Specify exactly what each process does
- Provide implementation guidance
- Support testing and validation
- Enable process maintenance

### Specification Types

#### 1. Structured English
**Definition:** English-like description of process logic
**Advantages:**
- Easy to understand
- Natural language format
- Good for complex logic
- Readable by non-technical stakeholders

**Example:**
```
IF customer_status = "active" THEN
    IF order_total > credit_limit THEN
        reject_order("Credit limit exceeded")
    ELSE
        approve_order()
        update_customer_balance(order_total)
    END IF
ELSE
    reject_order("Inactive customer")
END IF
```

#### 2. Decision Tables
**Definition:** Tabular representation of complex logic
**Advantages:**
- Clear condition-action relationships
- Complete logic coverage
- Easy to validate
- Good for business rule specification

**Structure:**
- **Conditions:** Input conditions
- **Actions:** Output actions
- **Rules:** Condition combinations and resulting actions

**Example:**
```
Conditions:     Rule 1    Rule 2    Rule 3    Rule 4
Order Total > 1000    Y         N         Y         N
Customer VIP Status   Y         Y         N         N
Actions:
Apply 10% Discount    X         X
Apply 5% Discount                           X
No Discount                                     X
```

#### 3. Decision Trees
**Definition:** Tree structure showing decision logic
**Advantages:**
- Visual logic representation
- Easy to follow decision paths
- Good for complex branching logic
- Intuitive for business users

**Structure:**
- **Decision Points:** Condition evaluation nodes
- **Branches:** Possible condition outcomes
- **Actions:** Terminal nodes with actions

#### 4. Flowcharts
**Definition:** Graphical representation of process flow
**Advantages:**
- Visual process representation
- Good for sequential logic
- Easy to understand flow
- Standard notation

**Symbols:**
- Rectangle: Process step
- Diamond: Decision point
- Arrow: Flow direction
- Circle: Connector/continuation

## Structured Analysis Process

### 1. System Context Definition
**Activities:**
- Define system boundaries
- Identify external entities
- Determine system scope
- Establish system interfaces

### 2. Data Flow Modeling
**Activities:**
- Create context diagram
- Develop Level 1 DFD
- Create detailed DFDs
- Validate diagram consistency

### 3. Data Dictionary Development
**Activities:**
- Identify data elements
- Define data structures
- Specify data flows
- Document data stores

### 4. Process Specification
**Activities:**
- Select specification method
- Document process logic
- Define error handling
- Validate specifications

### 5. Model Validation
**Activities:**
- Review model completeness
- Validate model consistency
- Verify model correctness
- Confirm stakeholder understanding

## Structured Analysis Tools

### Manual Tools
- **Whiteboards:** Collaborative diagramming
- **Paper and Pencil:** Initial model development
- **Templates:** Standardized diagram formats
- **Checklists:** Quality assurance guides

### Software Tools
- **Diagramming Tools:** Visio, Lucidchart, Draw.io
- **CASE Tools:** Rational Rose, Enterprise Architect
- **Specialized SA Tools:** Structured Analysis tools
- **Documentation Tools:** Word processors, wikis

### Analysis Support Tools
- **Data Dictionary Generators:** Automated data definition
- **Consistency Checkers:** Diagram validation tools
- **Report Generators:** Model documentation tools
- **Version Control:** Model change management

## Structured Analysis Best Practices

### 1. Process Guidelines
- **Top-Down Approach:** Start with high-level models
- **Iterative Refinement:** Progressive model improvement
- **Stakeholder Involvement:** Regular validation sessions
- **Documentation Standards:** Consistent model formats

### 2. Quality Assurance
- **Completeness Checks:** All requirements covered
- **Consistency Validation:** Model alignment verification
- **Correctness Review:** Accuracy assessment
- **Clarity Evaluation:** Stakeholder understanding

### 3. Maintenance Practices
- **Version Control:** Model version management
- **Change Tracking:** Modification documentation
- **Impact Analysis:** Change effect assessment
- **Regular Updates:** Model currency maintenance

## Common Challenges and Solutions

### Modeling Challenges
- **Complex Systems:** Solution - hierarchical decomposition
- **Changing Requirements:** Solution - iterative modeling approach
- **Stakeholder Disagreement:** Solution - regular validation sessions
- **Technical Complexity:** Solution - abstraction and simplification

### Quality Challenges
- **Inconsistent Models:** Solution - standardization and reviews
- **Incomplete Coverage:** Solution - systematic checklist usage
- **Poor Communication:** Solution - visual model explanation
- **Maintenance Issues:** Solution - version control and documentation

### Process Challenges
- **Time Constraints:** Solution - phased approach with priorities
- **Resource Limitations:** Solution - tool automation and templates
- **Skill Gaps:** Solution - training and mentoring
- **Scale Issues:** Solution - modular analysis approach

---

**Key Takeaway:** Structured analysis provides a systematic, graphical approach to system understanding and specification. Through DFDs, data dictionaries, and process specifications, analysts can create clear, comprehensive system models that guide development and ensure quality.