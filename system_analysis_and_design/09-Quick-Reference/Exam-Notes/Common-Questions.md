# Common Questions - System Analysis and Design

## 1. Fundamental Concepts

### Q: What is the difference between system analysis and system design?
**A:** System analysis focuses on understanding the current system, identifying problems, and determining requirements. System design focuses on creating the blueprint for the new system that meets those requirements.

**Key Differences:**
- **Analysis:** What the system should do (requirements gathering)
- **Design:** How the system will do it (architecture, components, interfaces)

### Q: Explain the difference between functional and non-functional requirements.
**A:** Functional requirements describe what the system must do (features, capabilities), while non-functional requirements describe how well the system performs (quality attributes).

**Examples:**
- **Functional:** "User can search products by category"
- **Non-Functional:** "Search results return in < 2 seconds"

### Q: What are the main phases of the SDLC?
**A:** Planning → Analysis → Design → Implementation → Testing → Deployment → Maintenance

**Alternative View (IEEE):**
- **Requirements:** Gathering and analysis
- **Design:** System and detailed design
- **Implementation:** Coding and unit testing
- **Testing:** Integration and system testing
- **Deployment:** Installation and user training
- **Maintenance:** Bug fixes and enhancements

## 2. Requirements Engineering

### Q: What are the quality criteria for good requirements? (IEEE 830)
**A:** Complete, Consistent, Unambiguous, Testable, Feasible, Traceable, Prioritized, Modifiable

**Explanation:**
- **Complete:** Nothing missing
- **Consistent:** No conflicts
- **Unambiguous:** One interpretation only
- **Testable:** Can be verified
- **Feasible:** Achievable
- **Traceable:** Linked to source
- **Prioritized:** Clear importance
- **Modifiable:** Easy to change

### Q: What is the difference between a use case and a user story?
**A:**
- **Use Case:** Formal documentation of system functionality from actor's perspective
- **User Story:** Simple, informal description following "As a [user], I want [goal] so that [benefit]"

**When to Use:**
- **Use Case:** Complex business processes, formal documentation
- **User Story:** Agile development, simple features

### Q: How do you handle changing requirements?
**A:** Use change control process: impact analysis → approval → implementation → testing → documentation update

**Best Practices:**
- Establish baseline requirements
- Use change request forms
- Assess impact on schedule, cost, quality
- Get stakeholder approval
- Update traceability matrix

## 3. System Design

### Q: What is coupling and cohesion? Why are they important?
**A:**
- **Coupling:** Degree of interdependence between modules (lower is better)
- **Cohesion:** Degree of relatedness within a module (higher is better)

**Importance:**
- **Low Coupling:** Easier maintenance, testing, reusability
- **High Cohesion:** Better understandability, reliability, reusability

### Q: Explain the differences between various SDLC models.
**A:**
- **Waterfall:** Sequential, inflexible, good for stable requirements
- **V-Model:** Testing-focused, maps testing to development phases
- **Incremental:** Iterative delivery, flexible to changes
- **Spiral:** Risk-driven, good for complex projects
- **Agile:** Adaptive, customer collaboration, working software priority

### Q: What is normalization in database design?
**A:** Process of organizing data to minimize redundancy and improve data integrity.

**Normal Forms:**
- **1NF:** Eliminate repeating groups
- **2NF:** Remove partial dependencies
- **3NF:** Remove transitive dependencies
- **BCNF:** Every determinant is a candidate key

## 4. Data Modeling and DFDs

### Q: What are the components of a Data Flow Diagram (DFD)?
**A:**
- **Processes:** Transform data (circles)
- **Data Stores:** Permanent data storage (rectangles with open ends)
- **Data Flows:** Movement of data (arrows)
- **External Entities:** Sources/sinks of data (squares)
- **Trust Boundaries:** Security boundaries (dashed lines)

### Q: What is the difference between a context diagram and detailed DFD?
**A:**
- **Context Diagram (Level 0):** Shows system boundary and external entities
- **Detailed DFD (Level 1+):** Shows internal processes, data stores, and flows

**Purpose:**
- **Context:** System scope and interfaces
- **Detailed:** Process decomposition and data flow

### Q: How do you identify entities in data modeling?
**A:** Look for nouns in requirements that represent people, places, things, or concepts that need to be stored.

**Entity Identification Techniques:**
- **Requirements Analysis:** Extract nouns from use cases/stories
- **Business Rules:** Identify objects governed by rules
- **Existing Systems:** Review current data structures
- **Stakeholder Input:** Business experts identify key objects

## 5. UML and Use Cases

### Q: What are the main UML diagram types?
**A:**
- **Structural:** Class, Object, Component, Deployment
- **Behavioral:** Use Case, Activity, State Machine, Sequence, Communication

**Common Usage:**
- **Use Case:** Requirements capture
- **Class:** System structure
- **Sequence:** Object interactions
- **Activity:** Business processes

### Q: Explain use case relationships.
**A:**
- **Include:** Breaking complex use case into smaller parts (always executed)
- **Extend:** Optional behavior under specific conditions
- **Generalize:** Inheritance between actors or use cases

**Example:**
- **Include:** "Validate user" included in "Login"
- **Extend:** "Forgot password" extends "Login" when needed

### Q: What is the difference between aggregation and composition?
**A:**
- **Aggregation:** "Has-a" relationship, parts can exist independently (weak relationship)
- **Composition:** "Part-of" relationship, parts cannot exist without whole (strong relationship)

**Notation:** Diamond (aggregation) vs. filled diamond (composition)

## 6. Testing and Quality

### Q: What are the different levels of testing?
**A:**
- **Unit Testing:** Individual components
- **Integration Testing:** Component interactions
- **System Testing:** Complete system
- **User Acceptance Testing:** Business requirements

**Purpose:**
- **Unit:** Verify component functionality
- **Integration:** Verify interfaces work
- **System:** Verify end-to-end functionality
- **UAT:** Verify business value

### Q: What is the difference between black-box and white-box testing?
**A:**
- **Black-Box:** Testing functionality without knowing internal code
- **White-Box:** Testing internal logic and code paths

**Techniques:**
- **Black-Box:** Equivalence partitioning, boundary value analysis
- **White-Box:** Statement coverage, branch coverage, path testing

### Q: How do you ensure software quality?
**A:** Use quality assurance processes: reviews, testing, standards compliance, metrics tracking.

**Key Practices:**
- **Code Reviews:** Peer review of code changes
- **Automated Testing:** Unit tests, integration tests
- **Static Analysis:** Code quality tools
- **Standards Compliance:** Industry standards and best practices
- **Metrics Tracking:** Defect rates, code coverage, performance

## 7. Project Management

### Q: What is the Critical Path Method (CPM)?
**A:** Technique to identify project tasks that cannot be delayed without delaying the project.

**Calculation:**
- **Forward Pass:** ES + Duration = EF
- **Backward Pass:** LF - Duration = LS
- **Float/Slack:** LS - ES (or LF - EF)
- **Critical Path:** Tasks with zero float

### Q: How do you handle project risks?
**A:** Risk management process: identify → analyze → plan response → monitor → control

**Response Strategies:**
- **Avoid:** Change plan to eliminate risk
- **Mitigate:** Reduce probability or impact
- **Transfer:** Shift risk to third party
- **Accept:** Monitor but take no action

### Q: What is earned value management?
**A:** Technique to measure project performance by comparing planned value to actual value.

**Key Metrics:**
- **PV (Planned Value):** Budgeted cost of work planned
- **EV (Earned Value):** Budgeted cost of work performed
- **AC (Actual Cost):** Actual cost of work performed
- **SV (Schedule Variance):** EV - PV
- **CV (Cost Variance):** EV - AC
- **SPI (Schedule Performance Index):** EV/PV
- **CPI (Cost Performance Index):** EV/AC

## 8. Feasibility Analysis

### Q: What are the types of feasibility?
**A:**
- **Technical:** Can it be built with available technology?
- **Economic:** Is it cost-effective?
- **Operational:** Will it work in the organization?
- **Schedule:** Can it be completed on time?
- **Legal:** Does it comply with laws?

### Q: How do you calculate Return on Investment (ROI)?
**A:** ROI = (Total Benefits - Total Costs) / Total Costs × 100%

**Components:**
- **Benefits:** Tangible (cost savings, revenue increase) + Intangible (improved customer satisfaction)
- **Costs:** Development, implementation, training, maintenance
- **Time Period:** Usually calculated over project lifespan

### Q: What is Net Present Value (NPV)?
**A:** NPV = Σ (Benefits_t - Costs_t) / (1 + r)^t for t = 1 to n

**Purpose:** Accounts for time value of money
**Decision Rule:** Positive NPV = good investment
**Discount Rate:** Usually cost of capital or required rate of return

## 9. Implementation and Change Management

### Q: What are implementation strategies?
**A:**
- **Direct Cutover:** Immediate switch (high risk, low cost)
- **Parallel:** Run old and new systems together (low risk, high cost)
- **Phased:** Gradual rollout by modules (medium risk/cost)
- **Pilot:** Test in limited area first (lowest risk)

**Selection Factors:** System criticality, user training needs, rollback capability

### Q: How do you manage organizational change?
**A:** Use structured change management: communication → training → support → reinforcement

**Kotter's 8 Steps:**
1. Create urgency
2. Form coalition
3. Create vision
4. Communicate vision
5. Remove obstacles
6. Create wins
7. Build on change
8. Anchor change

### Q: What is post-implementation review?
**A:** Evaluation of system success after deployment: did it meet objectives? What worked? What needs improvement?

**Key Activities:**
- **Success Metrics Review:** Performance against KPIs
- **User Feedback Collection:** Surveys and interviews
- **Lessons Learned:** Document successes and failures
- **Maintenance Planning:** Ongoing support strategy

## 10. Ethics and Professional Issues

### Q: What are key ethical considerations in system analysis?
**A:**
- **Honesty:** Accurate representation of system capabilities
- **Competence:** Work within areas of expertise
- **Confidentiality:** Protect sensitive stakeholder information
- **Impartiality:** Avoid conflicts of interest
- **Professional Development:** Maintain current knowledge

### Q: How do you handle data privacy requirements?
**A:** Implement privacy by design: data minimization, purpose limitation, consent management, security controls.

**Key Regulations:**
- **GDPR (Europe):** Strict data protection requirements
- **CCPA (California):** Consumer privacy rights
- **HIPAA (Healthcare):** Protected health information
- **General Principles:** Lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, confidentiality, accountability

### Q: What is your responsibility when you discover a system flaw?
**A:** Report to appropriate authority, document findings, recommend corrective action, maintain confidentiality.

**Ethical Obligations:**
- **Duty to Warn:** Inform stakeholders of significant risks
- **Professional Responsibility:** Ensure system safety and reliability
- **Whistleblower Protection:** Use proper channels for reporting

## 11. Emerging Trends

### Q: What is DevOps and why is it important?
**A:** DevOps integrates development and operations for faster, more reliable software delivery.

**Key Practices:**
- **CI/CD:** Continuous integration and deployment
- **Infrastructure as Code:** Automated environment provisioning
- **Monitoring:** Continuous system monitoring and feedback
- **Collaboration:** Breaking down silos between dev and ops

### Q: What are microservices?
**A:** Architectural style where applications are built as collections of small, independent services.

**Benefits:**
- **Scalability:** Independent scaling of services
- **Technology Diversity:** Different services can use different technologies
- **Fault Isolation:** Failure in one service doesn't affect others
- **Team Autonomy:** Teams can work independently on different services

### Q: How does cloud computing affect system design?
**A:** Enables scalable, cost-effective, globally accessible systems with reduced infrastructure management.

**Design Implications:**
- **Elasticity:** Design for variable load
- **Security:** Shared responsibility model
- **Data Sovereignty:** Consider data location requirements
- **Cost Optimization:** Pay-for-use pricing model
- **Disaster Recovery:** Built-in redundancy and backup

---

## Quick Tips for Exam Success

### Study Strategies
1. **Understand Concepts:** Don't memorize, comprehend relationships
2. **Practice Diagrams:** Draw DFDs, ERDs, UML diagrams regularly
3. **Real-World Application:** Think about how concepts apply to actual projects
4. **Compare Models:** Understand when to use different SDLC models
5. **Requirements Focus:** Master requirements engineering thoroughly

### Common Pitfalls to Avoid
- **Confusing Terms:** Waterfall vs. V-Model, coupling vs. cohesion
- **Missing Context:** Requirements without business justification
- **Over-Engineering:** Complex solutions for simple problems
- **Ignoring Stakeholders:** Technical solutions without user needs
- **Poor Documentation:** Incomplete or unclear deliverables

### Key Formulas to Remember
- **ROI = (Benefits - Costs) / Costs × 100%**
- **NPV = Σ (Bt - Ct) / (1 + r)^t**
- **Critical Path:** Tasks with zero float
- **Earned Value:** % Complete × Budget**

**Final Advice:** Focus on understanding how analysis and design principles solve real business problems. Practice applying concepts to scenarios, and remember that successful system development balances technical excellence with business value.