# Key Concepts Summary - System Analysis and Design

## 1. System Analysis Fundamentals

### What is System Analysis?
**Definition:** Systematic process of investigating a system, identifying problems, and determining solutions to improve or replace the system.

**Key Objectives:**
- Understand current system (As-Is analysis)
- Define desired system (To-Be analysis)
- Identify gaps and improvement opportunities
- Design feasible solutions

### System Types
**Manual Systems:** Human-performed processes
**Automated Systems:** Computer-assisted processes
**Socio-Technical Systems:** Combination of people, processes, and technology

### System Characteristics
- **Boundary:** Defines system scope and interfaces
- **Environment:** External factors affecting the system
- **Components:** Subsystems, modules, and elements
- **Interfaces:** Points of interaction with other systems
- **Constraints:** Limitations and requirements

## 2. Requirements Engineering

### Requirements Hierarchy
```
Business Requirements (What business needs)
    ↓
User Requirements (What users need to do)
    ↓
Functional Requirements (What system must do)
    ↓
Non-Functional Requirements (How well system performs)
```

### Requirements Types

#### Functional Requirements
- **Business Rules:** Constraints on business operations
- **User Tasks:** Specific activities users perform
- **Data Processing:** Information manipulation and storage
- **Integration:** Interaction with other systems
- **Reporting:** Information display and analysis

#### Non-Functional Requirements (FURPS+)
- **Functional:** Features and capabilities
- **Usability:** Ease of use and accessibility
- **Reliability:** Dependability and availability
- **Performance:** Speed, throughput, efficiency
- **Supportability:** Maintainability and adaptability
- **+ (Security, Portability, etc.)**

### Requirements Quality Criteria (IEEE 830)
- **Complete:** All requirements specified
- **Consistent:** No conflicts between requirements
- **Unambiguous:** Single interpretation possible
- **Testable:** Verifiable through testing
- **Feasible:** Achievable within constraints
- **Traceable:** Linked to business needs

## 3. System Development Life Cycle (SDLC) Models

### Waterfall Model
**Phases:** Requirements → Design → Implementation → Testing → Deployment → Maintenance
**Characteristics:** Sequential, documentation-heavy, inflexible
**Best For:** Stable requirements, small projects, regulatory compliance

### V-Model
**Focus:** Verification and validation with testing
**Mapping:** Requirements ↔ Acceptance Testing, Design ↔ System Testing
**Best For:** Safety-critical systems, quality-focused projects

### Incremental Model
**Approach:** System built in increments with working software
**Benefits:** Early delivery, flexible to changes, lower risk
**Best For:** Large systems, evolving requirements

### Spiral Model
**Focus:** Risk-driven iterative development
**Quadrants:** Determine objectives, evaluate risks, develop, plan next iteration
**Best For:** High-risk projects, complex systems

### Agile (Scrum)
**Framework:** Product Backlog → Sprint Planning → Sprint → Sprint Review → Retrospective
**Roles:** Product Owner, Scrum Master, Development Team
**Best For:** Dynamic requirements, customer collaboration

### DevOps
**Focus:** Continuous integration and deployment
**Pipeline:** Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
**Best For:** Cloud-native applications, frequent deployments

## 4. System Design Principles

### Design Quality Attributes
- **Modularity:** Independent, interchangeable components
- **Coupling:** Minimize dependencies between modules
- **Cohesion:** Maximize relatedness within modules
- **Abstraction:** Hide complexity, show essentials
- **Encapsulation:** Bundle data and operations

### Architecture Patterns
- **Layered Architecture:** Presentation → Business → Data layers
- **Client-Server:** Separation of user interface and business logic
- **Microservices:** Independently deployable services
- **Event-Driven:** Loose coupling through events
- **Model-View-Controller (MVC):** Separation of concerns

### Database Design
**Normalization Forms:**
- **1NF:** Eliminate repeating groups
- **2NF:** Remove partial dependencies
- **3NF:** Remove transitive dependencies
- **BCNF:** Every determinant is a candidate key

**Relationships:**
- **One-to-One:** Single record links to single record
- **One-to-Many:** Single record links to multiple records
- **Many-to-Many:** Multiple records link to multiple records (requires junction table)

## 5. Data Flow and Process Modeling

### Data Flow Diagram (DFD) Components
- **Processes:** Transform data (circles/rounded rectangles)
- **Data Stores:** Permanent data storage (open-ended rectangles)
- **Data Flows:** Movement of data (arrows)
- **External Entities:** Sources/sinks of data (squares)
- **Trust Boundaries:** Security boundaries (dashed lines)

### DFD Levels
- **Context Diagram (Level 0):** System boundary and external entities
- **Level 1 DFD:** Major processes and data stores
- **Level 2+ DFD:** Detailed process decomposition

### Process Modeling Techniques
- **Flowcharts:** Sequential logic and decision points
- **Activity Diagrams:** UML notation for workflows
- **State Diagrams:** Object state transitions
- **Sequence Diagrams:** Object interactions over time

## 6. UML Diagrams

### Structural Diagrams
- **Class Diagram:** Classes, attributes, methods, relationships
- **Object Diagram:** Instances of classes at runtime
- **Component Diagram:** System components and dependencies
- **Deployment Diagram:** Physical system deployment

### Behavioral Diagrams
- **Use Case Diagram:** Actors and system functionality
- **Activity Diagram:** Workflow and business processes
- **State Machine Diagram:** Object state changes
- **Sequence Diagram:** Object interactions chronologically
- **Communication Diagram:** Object interactions with focus on links

### Use Case Elements
- **Actor:** External entity interacting with system
- **Use Case:** System functionality provided to actors
- **Include:** Breaking complex use cases into smaller parts
- **Extend:** Optional behavior under specific conditions
- **Generalize:** Inheritance between actors or use cases

## 7. Testing and Quality Assurance

### Testing Levels
- **Unit Testing:** Individual components/modules
- **Integration Testing:** Component interactions
- **System Testing:** Complete system functionality
- **User Acceptance Testing:** Business requirement validation

### Testing Types
- **Black-Box Testing:** Functionality without internal knowledge
- **White-Box Testing:** Internal logic and code paths
- **Gray-Box Testing:** Combination of black and white box

### Quality Assurance
**Standards:**
- **ISO 9001:** Quality management systems
- **CMMI:** Capability maturity model integration
- **Six Sigma:** Statistical quality control

**Metrics:**
- **Defect Density:** Defects per size unit
- **Mean Time Between Failures (MTBF):** Reliability measure
- **Mean Time To Repair (MTTR):** Maintainability measure

## 8. Project Management

### Project Management Knowledge Areas (PMBOK)
- **Integration:** Project charter, scope, schedule, cost integration
- **Scope:** Requirements collection, WBS creation, scope control
- **Time:** Activity sequencing, duration estimating, schedule development
- **Cost:** Cost estimating, budgeting, earned value management
- **Quality:** Quality planning, assurance, control
- **Human Resources:** Team acquisition, development, management
- **Communications:** Communication planning, information distribution
- **Risk:** Risk identification, analysis, response planning
- **Procurement:** Procurement planning, contract administration
- **Stakeholder:** Stakeholder identification, engagement, management

### Critical Path Method (CPM)
**Purpose:** Identify project duration and critical activities
**Formula:** Earliest Start + Duration = Earliest Finish
**Latest Finish - Duration = Latest Start**
**Float/Slack:** Difference between earliest and latest start times

### Risk Management
**Process:** Identify → Analyze → Plan Response → Monitor → Control
**Risk Types:** Technical, Business, External, Internal
**Response Strategies:** Avoid, Mitigate, Transfer, Accept

## 9. Feasibility Analysis

### Feasibility Types
- **Technical Feasibility:** Can it be built with available technology?
- **Economic Feasibility:** Is it cost-effective? (ROI, NPV, Payback Period)
- **Operational Feasibility:** Will it work in the organization?
- **Schedule Feasibility:** Can it be completed on time?
- **Legal Feasibility:** Does it comply with laws and regulations?

### Cost-Benefit Analysis
**Tangible Benefits:** Measurable financial gains
**Intangible Benefits:** Qualitative improvements
**Tangible Costs:** Hardware, software, personnel
**Intangible Costs:** Training, disruption, morale impact

### Break-Even Analysis
**Formula:** Fixed Costs / (Selling Price - Variable Cost per Unit)
**Purpose:** Determine when project becomes profitable

## 10. Implementation and Deployment

### Implementation Strategies
- **Direct Cutover:** Immediate switch to new system
- **Parallel Implementation:** Old and new systems run simultaneously
- **Phased Implementation:** Gradual rollout by modules/functions
- **Pilot Implementation:** Test in limited area before full deployment

### Change Management
**Kotter's 8 Steps:**
1. Create urgency
2. Form powerful coalition
3. Create vision
4. Communicate vision
5. Remove obstacles
6. Create short-term wins
7. Build on change
8. Anchor change

### Post-Implementation Review
**Success Metrics:** User satisfaction, performance improvement, ROI achievement
**Lessons Learned:** What worked well, what could be improved
**Maintenance Planning:** Ongoing support and enhancement strategy

## 11. Ethics and Professional Responsibility

### Ethical Principles
- **Honesty:** Truthful representation of capabilities and limitations
- **Competence:** Work within areas of expertise
- **Confidentiality:** Protect sensitive information
- **Impartiality:** Avoid conflicts of interest
- **Professional Development:** Maintain and improve skills

### Legal Considerations
- **Intellectual Property:** Respect copyrights and patents
- **Data Privacy:** Comply with privacy laws (GDPR, CCPA)
- **Contractual Obligations:** Honor agreements and SLAs
- **Professional Liability:** Understand responsibility for work quality

## 12. Emerging Trends and Technologies

### Current Trends
- **Cloud Computing:** SaaS, PaaS, IaaS adoption
- **Microservices:** Service-oriented architecture evolution
- **DevOps:** Development and operations integration
- **Agile Scaling:** SAFe, LeSS, Scrum@Scale frameworks
- **Low-Code/No-Code:** Citizen development platforms

### Emerging Technologies
- **Artificial Intelligence:** Intelligent automation and decision support
- **Blockchain:** Secure, decentralized transaction processing
- **Internet of Things (IoT):** Connected devices and sensor data
- **Edge Computing:** Distributed processing and reduced latency
- **Quantum Computing:** Complex problem-solving capabilities

### Future Considerations
- **Digital Transformation:** Business process reinvention
- **Sustainability:** Green computing and energy efficiency
- **Security by Design:** Proactive security integration
- **Human-Centric Design:** User experience and accessibility focus
- **Continuous Evolution:** Systems that learn and adapt

---

## Quick Reference Formulas

### Financial Metrics
- **ROI = (Benefits - Costs) / Costs × 100%**
- **NPV = Σ (Benefits_t - Costs_t) / (1 + r)^t**
- **Payback Period = Initial Investment / Annual Cash Flow**
- **Break-Even Point = Fixed Costs / (Price - Variable Cost)**

### Project Management
- **PERT Estimate = (O + 4M + P) / 6** (O=Optimistic, M=Most Likely, P=Pessimistic)
- **Float/Slack = LS - ES** or **LF - EF**
- **Earned Value = % Complete × Budget at Completion**

### Quality Metrics
- **Defect Density = Total Defects / Size**
- **Reliability = MTBF / (MTBF + MTTR)**
- **Efficiency = Actual Output / Standard Output**

### System Performance
- **Throughput = Transactions / Time Unit**
- **Response Time = Processing Time + Wait Time + Transmission Time**
- **Utilization = Busy Time / Total Time**

**Remember:** System Analysis and Design is about understanding business needs, designing effective solutions, and managing successful implementation. Focus on stakeholder value, quality requirements, and practical feasibility.