# 05 - Data Modeling

## Overview

Data modeling is the process of creating a visual representation of data structures, relationships, and constraints within an organization or system. It provides a blueprint for data organization, storage, and access that ensures data integrity, consistency, and efficient usage.

## Data Modeling Fundamentals

### Purpose and Importance
- **Data Structure Definition:** Clear data organization specification
- **Relationship Specification:** Data entity interconnections
- **Integrity Constraints:** Data validity and consistency rules
- **System Design Foundation:** Database and application design basis
- **Business Understanding:** Data requirement communication

### Key Concepts
- **Entity:** Real-world object or concept requiring data storage
- **Attribute:** Entity property or characteristic
- **Relationship:** Association between entities
- **Constraint:** Data integrity and business rule
- **Normalization:** Data redundancy elimination and organization

## Entity-Relationship Modeling (ERD)

### ERD Fundamentals
**Definition:** Visual representation of data entities and their relationships
**Purpose:** Show data structure and entity interconnections
**Components:** Entities, attributes, relationships, constraints
**Notation:** Crow's foot, Chen, or UML notation

### Entity Definition
**Characteristics:**
- **Real-World Representation:** Business concept or physical object
- **Data Persistence:** Requires long-term data storage
- **Unique Identity:** Distinguishable from other entities
- **Multiple Attributes:** Has properties requiring management

**Examples:**
- **Customer:** Person or organization purchasing products
- **Product:** Item available for sale
- **Order:** Customer purchase transaction
- **Employee:** Organization staff member

### Attribute Definition
**Types:**
- **Simple:** Single value (name, age, price)
- **Composite:** Multiple components (address with street, city, state)
- **Derived:** Calculated from other attributes (total = quantity × price)
- **Multi-valued:** Multiple values (phone numbers, skills)

**Properties:**
- **Name:** Descriptive, unique within entity
- **Data Type:** String, integer, date, etc.
- **Domain:** Acceptable value range
- **Default Value:** Standard value when not specified
- **Constraints:** Validation rules

### Relationship Definition
**Components:**
- **Degree:** Number of participating entities
- **Cardinality:** Number of entity instances in relationship
- **Modality:** Relationship optionality (mandatory/optional)
- **Role:** Entity function in relationship

**Relationship Types:**
- **One-to-One (1:1):** Each entity instance relates to one other instance
- **One-to-Many (1:M):** One instance relates to many other instances
- **Many-to-Many (M:M):** Many instances relate to many other instances

### ERD Notation Standards

#### Crow's Foot Notation
**Symbols:**
- **Entity:** Rectangle
- **Attribute:** Oval connected to entity
- **Relationship:** Diamond with connecting lines
- **Cardinality:**
  - **Zero or one:** |O
  - **Exactly one:** ||
  - **Zero or many:** |<
  - **One or many:** |<

#### Chen Notation
**Symbols:**
- **Entity:** Rectangle with entity name
- **Attribute:** Oval with attribute name
- **Relationship:** Diamond with relationship name
- **Cardinality:** Numbers on relationship lines (1, N, M)

#### UML Class Diagram Notation
**Symbols:**
- **Class:** Rectangle divided into sections
- **Attribute:** Listed in class rectangle
- **Association:** Line between classes
- **Multiplicity:** Numbers near association ends

## Normalization

### Purpose
**Definition:** Process of organizing data to minimize redundancy and improve integrity
**Benefits:**
- **Data Integrity:** Consistent data storage
- **Storage Efficiency:** Reduced data duplication
- **Update Anomalies:** Prevention of inconsistent updates
- **Query Performance:** Improved data access efficiency

### Normal Forms

#### First Normal Form (1NF)
**Requirements:**
- **Atomic Values:** No repeating groups or arrays
- **Primary Key:** Unique identifier for each row
- **No Duplicate Rows:** Each row uniquely identifiable

**Example:**
**Before (Not 1NF):**
```
Customer: John Doe, Phones: 555-1234, 555-5678
```

**After (1NF):**
```
Customer: John Doe, Phone: 555-1234
Customer: John Doe, Phone: 555-5678
```

#### Second Normal Form (2NF)
**Requirements:**
- **1NF Compliance:** Meets first normal form
- **No Partial Dependencies:** Non-key attributes depend on entire primary key
- **Full Functional Dependency:** All attributes depend on full key

**Example:**
**Before (Not 2NF):**
```
OrderDetail(OrderID, ProductID, OrderDate, ProductName, Quantity)
```
*OrderDate depends only on OrderID, not full key*

**After (2NF):**
```
Order(OrderID, OrderDate)
OrderDetail(OrderID, ProductID, ProductName, Quantity)
```

#### Third Normal Form (3NF)
**Requirements:**
- **2NF Compliance:** Meets second normal form
- **No Transitive Dependencies:** Non-key attributes don't depend on other non-key attributes
- **Direct Dependencies:** All dependencies are on primary key

**Example:**
**Before (Not 3NF):**
```
Employee(EmpID, Name, DeptID, DeptName, DeptLocation)
```
*DeptName and DeptLocation depend on DeptID, not EmpID*

**After (3NF):**
```
Employee(EmpID, Name, DeptID)
Department(DeptID, DeptName, DeptLocation)
```

#### Boyce-Codd Normal Form (BCNF)
**Requirements:**
- **3NF Compliance:** Meets third normal form
- **No Overlapping Keys:** Every determinant is a candidate key
- **Key Dependencies:** All dependencies are on candidate keys

#### Fourth Normal Form (4NF)
**Requirements:**
- **BCNF Compliance:** Meets BCNF
- **No Multi-valued Dependencies:** Independent multi-valued attributes separated
- **Single-Value Dependencies:** Each attribute depends on key independently

#### Fifth Normal Form (5NF)
**Requirements:**
- **4NF Compliance:** Meets fourth normal form
- **No Join Dependencies:** Relations not decomposable without loss
- **Lossless Decomposition:** Data preservation during decomposition

### Denormalization
**Purpose:** Intentionally introduce redundancy for performance
**When to Use:**
- **Query Performance:** Complex joins causing slow queries
- **Read-Heavy Systems:** More reads than writes
- **Acceptable Redundancy:** Controlled duplication acceptable
- **Hardware Limitations:** Performance outweighs normalization benefits

## Data Modeling Process

### 1. Conceptual Data Modeling
**Purpose:** High-level business data requirements
**Activities:**
- **Entity Identification:** Key business entities
- **Relationship Definition:** Entity interconnections
- **Attribute Specification:** High-level entity properties
- **Business Rule Capture:** Data constraints and rules

**Deliverables:**
- **Conceptual ERD:** High-level data structure
- **Entity Definitions:** Business entity descriptions
- **Relationship Specifications:** Business relationship definitions

### 2. Logical Data Modeling
**Purpose:** Technology-independent data structure
**Activities:**
- **Entity Refinement:** Detailed entity definitions
- **Attribute Definition:** Complete attribute specifications
- **Normalization:** Data structure optimization
- **Integrity Constraints:** Business rule implementation

**Deliverables:**
- **Logical ERD:** Detailed entity-relationship diagram
- **Attribute Dictionary:** Complete attribute definitions
- **Business Rules:** Data validation and constraint rules

### 3. Physical Data Modeling
**Purpose:** Database-specific implementation design
**Activities:**
- **Table Definition:** Database table creation
- **Index Specification:** Performance optimization
- **Storage Design:** Data placement and organization
- **Security Implementation:** Access control and permissions

**Deliverables:**
- **Physical Schema:** Database table definitions
- **Index Specifications:** Performance optimization design
- **Storage Parameters:** Data storage configuration

## Advanced Data Modeling Concepts

### 1. Subtype/Supertype Relationships
**Definition:** Specialization/generalization hierarchies
**Purpose:** Handle entity variations and inheritance
**Types:**
- **Exclusive:** Entity is one subtype only
- **Inclusive:** Entity can be multiple subtypes
- **Partitioning:** Complete subtype coverage

**Example:**
```
Person (supertype)
├── Employee (subtype)
├── Customer (subtype)
└── Contractor (subtype)
```

### 2. Recursive Relationships
**Definition:** Entity relationships with itself
**Purpose:** Handle hierarchical or network structures
**Examples:**
- **Employee-Manager:** Employee reports to another employee
- **Product-Component:** Product composed of other products
- **Category-Subcategory:** Hierarchical category structure

### 3. Ternary Relationships
**Definition:** Relationships involving three entities
**Purpose:** Complex many-to-many-to-many relationships
**Example:** Supplier supplies Parts to Projects
- **Supplier** supplies **Part** for **Project**
- Cannot be decomposed without information loss

### 4. Time-Dependent Data
**Definition:** Data changing over time
**Purpose:** Track historical data changes
**Techniques:**
- **Effective Dating:** Valid-from/to date ranges
- **Versioning:** Complete data version history
- **Temporal Tables:** Built-in time support

## Data Quality and Integrity

### 1. Entity Integrity
**Rules:**
- **Primary Key:** Unique, non-null identifier
- **Entity Uniqueness:** No duplicate entities
- **Referential Integrity:** Valid foreign key references

### 2. Domain Integrity
**Rules:**
- **Data Type:** Correct data type specification
- **Value Range:** Acceptable value constraints
- **Format:** Proper data format requirements
- **Business Rules:** Organization-specific constraints

### 3. Referential Integrity
**Rules:**
- **Foreign Keys:** Valid references to primary keys
- **Cascade Actions:** Update/delete behavior specification
- **Orphan Prevention:** No invalid references

### 4. User-Defined Integrity
**Rules:**
- **Business Rules:** Organization-specific constraints
- **Validation Rules:** Data acceptance criteria
- **Derivation Rules:** Calculated value specifications

## Data Modeling Tools and Techniques

### Modeling Tools
- **ERD Tools:** ERwin, ER/Studio, Toad Data Modeler
- **Database Tools:** MySQL Workbench, SQL Server Management Studio
- **UML Tools:** Enterprise Architect, Visual Paradigm
- **General Tools:** Visio, Lucidchart

### Analysis Techniques
- **Data Profiling:** Existing data analysis
- **Gap Analysis:** Current vs. required data comparison
- **Impact Analysis:** Change effect assessment
- **Reverse Engineering:** Existing database analysis

### Quality Assurance
- **Model Reviews:** Stakeholder validation
- **Consistency Checks:** Model internal consistency
- **Completeness Verification:** All requirement coverage
- **Test Data Creation:** Model validation data

## Data Modeling Best Practices

### 1. Naming Conventions
- **Clear Names:** Descriptive, meaningful names
- **Consistent Case:** Uppercase, lowercase, or mixed case
- **Standard Abbreviations:** Consistent abbreviation usage
- **Singular Names:** Use singular entity names

### 2. Model Organization
- **Logical Grouping:** Related entities together
- **Progressive Disclosure:** Different detail levels
- **Documentation:** Clear model documentation
- **Version Control:** Model version management

### 3. Relationship Design
- **Necessary Relationships:** Only required connections
- **Correct Cardinality:** Accurate participation numbers
- **Clear Semantics:** Unambiguous relationship meanings
- **Constraint Specification:** Clear relationship rules

### 4. Performance Considerations
- **Access Patterns:** Expected data access patterns
- **Query Optimization:** Common query support
- **Indexing Strategy:** Performance optimization planning
- **Denormalization Decisions:** Performance vs. integrity trade-offs

## Common Challenges

### Modeling Challenges
- **Complex Relationships:** Many-to-many and ternary relationships
- **Changing Requirements:** Evolving data needs
- **Legacy Data:** Existing data structure integration
- **Performance Trade-offs:** Normalization vs. query performance

### Quality Challenges
- **Incomplete Models:** Missing entities or relationships
- **Inconsistent Models:** Conflicting model elements
- **Poor Documentation:** Unclear model meanings
- **Lack of Validation:** Unverified model accuracy

### Implementation Challenges
- **Technology Constraints:** Database platform limitations
- **Migration Complexity:** Existing data conversion
- **User Adoption:** Model acceptance and usage
- **Maintenance Requirements:** Model update and evolution

---

**Key Takeaway:** Data modeling provides the foundation for effective data management by creating clear, consistent data structures. Through proper entity-relationship design, normalization, and integrity constraints, data models ensure data quality, integrity, and efficient access for business and system needs.