# 07 - Requirements Management & Change Control

## Overview

Requirements management is the process of documenting, analyzing, tracing, prioritizing, and controlling changes to requirements throughout the system development lifecycle. Effective requirements management ensures that requirements remain aligned with business needs and project objectives.

## Requirements Management Fundamentals

### Purpose and Importance
- **Change Control:** Manage requirements modifications
- **Traceability:** Track requirements relationships and impacts
- **Prioritization:** Rank requirements by importance and urgency
- **Communication:** Keep stakeholders informed and aligned
- **Quality Assurance:** Maintain requirements quality and consistency

### Key Activities
- **Requirements Identification:** Unique requirement identification
- **Requirements Documentation:** Clear, complete requirement records
- **Requirements Analysis:** Requirement relationships and dependencies
- **Requirements Prioritization:** Importance and implementation sequencing
- **Requirements Change Management:** Controlled requirement modifications

## Requirements Identification and Documentation

### Requirements Identification
**Techniques:**
- **Unique Identifiers:** REQ-001, FR-001, NFR-001 format
- **Version Control:** Requirement version tracking
- **Status Tracking:** Draft, Approved, Implemented, Verified
- **Attribute Assignment:** Priority, source, complexity, stability

**Benefits:**
- **Traceability:** Easy requirement tracking and referencing
- **Change Management:** Clear change impact assessment
- **Communication:** Precise requirement discussion
- **Quality Control:** Systematic requirement review

### Requirements Documentation
**Essential Elements:**
- **Requirement ID:** Unique identifier
- **Description:** Clear, concise requirement statement
- **Rationale:** Business justification
- **Priority:** Importance ranking
- **Source:** Originating stakeholder
- **Acceptance Criteria:** Verification conditions
- **Dependencies:** Related requirements
- **Status:** Current implementation state

## Requirements Traceability

### Traceability Concepts
**Definition:** Ability to track requirements from inception to delivery
**Purpose:** Ensure requirements are properly implemented and tested
**Benefits:** Impact analysis, coverage verification, change management

### Types of Traceability

#### 1. Forward Traceability
**Definition:** Tracking requirements from specification to implementation
**Links:**
- Requirements → Design specifications
- Requirements → Code modules
- Requirements → Test cases
- Requirements → Documentation

**Benefits:**
- **Implementation Verification:** Confirm all requirements implemented
- **Coverage Analysis:** Identify implemented vs. unimplemented requirements
- **Quality Assurance:** Ensure complete system delivery

#### 2. Backward Traceability
**Definition:** Tracking implementation back to requirements
**Links:**
- Code → Requirements
- Tests → Requirements
- Issues → Requirements
- Changes → Requirements

**Benefits:**
- **Change Impact:** Assess modification effects
- **Validation Support:** Verify requirements satisfaction
- **Maintenance Aid:** Understand system purpose

#### 3. Horizontal Traceability
**Definition:** Tracking relationships between requirements
**Links:**
- Functional → Non-functional requirements
- Business → System requirements
- High-level → Detailed requirements
- Related requirements and dependencies

**Benefits:**
- **Consistency Checking:** Identify conflicting requirements
- **Completeness Verification:** Ensure all aspects covered
- **Dependency Management:** Understand requirement relationships

### Traceability Matrix
**Structure:**
- Rows: Source requirements
- Columns: Target artifacts
- Cells: Relationship indicators
- Coverage: Implementation completeness

**Benefits:**
- **Visual Relationships:** Clear requirement connections
- **Gap Analysis:** Identify missing links
- **Impact Assessment:** Change effect visualization
- **Quality Metrics:** Traceability completeness measurement

## Requirements Prioritization

### Prioritization Frameworks

#### 1. MoSCoW Method
**Categories:**
- **Must Have:** Critical requirements, system won't work without them
- **Should Have:** Important but not critical requirements
- **Could Have:** Desirable but not necessary requirements
- **Won't Have:** Not required for current release

**Benefits:**
- **Clear Priorities:** Simple, understandable categorization
- **Stakeholder Agreement:** Easy consensus building
- **Scope Management:** Release content definition
- **Risk Management:** Critical requirement identification

#### 2. Kano Model
**Categories:**
- **Basic Requirements:** Expected features, dissatisfaction if missing
- **Performance Requirements:** More is better, satisfaction increases with quality
- **Delighters:** Unexpected features, high satisfaction if present

**Benefits:**
- **Customer Satisfaction:** Focus on satisfaction drivers
- **Requirement Classification:** Different satisfaction types
- **Strategic Planning:** Competitive advantage identification
- **Resource Allocation:** Investment priority setting

#### 3. Relative Weighting
**Method:** Assign numerical weights to requirements
**Factors:**
- Business value (1-10)
- Technical risk (1-10)
- Implementation cost (1-10)
- Time criticality (1-10)

**Benefits:**
- **Quantitative Ranking:** Objective comparison basis
- **Trade-off Analysis:** Cost-benefit evaluation
- **Resource Optimization:** Investment return maximization
- **Decision Support:** Data-driven prioritization

### Prioritization Process
1. **Criteria Definition:** Establish prioritization factors
2. **Requirement Assessment:** Evaluate each requirement
3. **Scoring and Ranking:** Apply prioritization method
4. **Stakeholder Validation:** Confirm priority assignments
5. **Regular Review:** Reassess priorities as project evolves

## Requirements Change Management

### Change Control Process

#### 1. Change Request Initiation
**Activities:**
- Change request submission
- Initial impact assessment
- Change categorization (enhancement, defect, requirement change)
- Priority assignment

**Required Information:**
- Change description and rationale
- Impact assessment request
- Urgency and priority level
- Submitting stakeholder information

#### 2. Change Evaluation
**Activities:**
- Detailed impact analysis
- Cost and effort estimation
- Risk assessment
- Alternative solution evaluation

**Analysis Areas:**
- **Scope Impact:** Project scope changes
- **Schedule Impact:** Timeline modifications
- **Cost Impact:** Budget implications
- **Quality Impact:** System quality effects
- **Resource Impact:** Team and tool requirements

#### 3. Change Approval
**Activities:**
- Change review board meeting
- Stakeholder consultation
- Decision making and approval
- Implementation planning

**Decision Criteria:**
- Business value justification
- Technical feasibility
- Resource availability
- Risk acceptability
- Stakeholder consensus

#### 4. Change Implementation
**Activities:**
- Requirements update
- Design and code modification
- Testing and validation
- Documentation update

**Control Measures:**
- Version control implementation
- Regression testing execution
- Stakeholder communication
- Progress monitoring

### Change Control Board (CCB)
**Purpose:** Govern requirements and system changes
**Composition:** Project manager, business analyst, technical lead, key stakeholders
**Responsibilities:**
- Change request review and approval
- Impact assessment oversight
- Priority conflict resolution
- Change implementation monitoring

## Requirements Baselines and Versions

### Requirements Baseline
**Definition:** Approved requirements snapshot at specific point
**Purpose:** Stable reference point for development and changes
**Types:**
- **Functional Baseline:** Approved functional requirements
- **Allocated Baseline:** Requirements allocated to system components
- **Product Baseline:** Complete system requirements

**Benefits:**
- **Stability Reference:** Consistent development foundation
- **Change Control:** Modification approval basis
- **Progress Measurement:** Implementation progress tracking
- **Quality Assurance:** Requirements compliance verification

### Version Control
**Practices:**
- **Version Numbering:** Major.minor.patch format
- **Change Documentation:** Modification reason and impact
- **Approval Tracking:** Who approved each version
- **Audit Trail:** Complete change history

**Tools:**
- **Requirements Management Tools:** Specialized RM tools
- **Version Control Systems:** Git, SVN for requirements
- **Document Management:** SharePoint, Confluence
- **Collaboration Platforms:** Jira, Azure DevOps

## Requirements Metrics and Reporting

### Key Metrics
- **Requirements Stability:** Percentage of unchanged requirements
- **Requirements Volatility:** Rate of requirement changes
- **Traceability Coverage:** Percentage of traceable requirements
- **Change Request Volume:** Number of change requests over time

### Reporting
**Types:**
- **Status Reports:** Current requirements state
- **Change Reports:** Approved and pending changes
- **Quality Reports:** Requirements quality metrics
- **Traceability Reports:** Coverage and gap analysis

**Frequency:**
- **Weekly:** Status updates and progress
- **Monthly:** Quality metrics and trends
- **Milestone:** Comprehensive assessments
- **Ad-hoc:** Issue-specific reports

## Common Challenges

### Process Challenges
- **Scope Creep:** Uncontrolled requirements expansion
- **Gold Plating:** Adding unnecessary features
- **Requirements Drift:** Requirements changing without control
- **Poor Communication:** Stakeholder misalignment

### Technical Challenges
- **Traceability Maintenance:** Keeping traceability current
- **Version Control Complexity:** Managing multiple requirement versions
- **Impact Analysis Difficulty:** Assessing change effects
- **Automation Limitations:** Tool integration issues

### Organizational Challenges
- **Stakeholder Conflicts:** Different requirement priorities
- **Resource Constraints:** Limited time and personnel
- **Cultural Resistance:** Change management resistance
- **Process Maturity:** Inconsistent requirement practices

## Tools and Techniques

### Requirements Management Tools
- **IBM DOORS Next:** Enterprise requirements management
- **Jama Software:** Requirements and test management
- **Azure DevOps:** Integrated requirements and development
- **Jira with RM Plugins:** Flexible requirements tracking

### Traceability Tools
- **Traceability Matrix Generators:** Automated relationship mapping
- **Impact Analysis Tools:** Change effect assessment
- **Coverage Analysis Tools:** Implementation completeness checking
- **Visualization Tools:** Requirements relationship diagrams

### Change Management Tools
- **Change Request Systems:** Formal change request tracking
- **Workflow Tools:** Automated approval processes
- **Notification Systems:** Stakeholder communication
- **Audit Trail Tools:** Change history tracking

### Reporting and Analytics Tools
- **Dashboard Tools:** Real-time requirements metrics
- **Reporting Tools:** Automated report generation
- **Analytics Platforms:** Trend analysis and insights
- **Visualization Tools:** Requirements data presentation

---

**Key Takeaway:** Effective requirements management ensures requirements remain aligned with business needs throughout the development lifecycle. Through proper identification, traceability, prioritization, and change control, requirements management reduces project risk and ensures successful system delivery.