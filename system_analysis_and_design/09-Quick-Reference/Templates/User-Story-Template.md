# User Story Template

## Template Overview
This template provides a standardized format for writing user stories in agile development projects. User stories capture requirements from the end-user perspective and follow the standard format: "As a [type of user], I want [some goal] so that [some reason]."

## User Story Format

### Basic Information
**Story ID:** US-[Project Code]-[Sequential Number]
**Title:** [Brief, descriptive title (50 characters max)]
**Priority:** [Must Have / Should Have / Could Have / Won't Have]
**Estimate:** [Story points or time estimate]
**Status:** [Backlog / Ready / In Progress / Done / Blocked]

### User Story Statement
**As a** [user role or persona]
**I want to** [goal or capability]
**So that** [benefit or reason]

### Acceptance Criteria
**Functional Requirements:**
- [ ] Criterion 1: [Specific, measurable acceptance criterion]
- [ ] Criterion 2: [Specific, measurable acceptance criterion]
- [ ] Criterion 3: [Specific, measurable acceptance criterion]

**Non-Functional Requirements:**
- [ ] Performance: [Response time, throughput, etc.]
- [ ] Security: [Authentication, authorization, data protection]
- [ ] Usability: [Accessibility, user experience requirements]
- [ ] Compatibility: [Browser, device, system requirements]

### Additional Information

#### Business Value
[Describe the business benefit and impact of implementing this story]

#### Assumptions
- [List any assumptions made in writing this story]
- [Include technical or business assumptions]
- [Note any dependencies or prerequisites]

#### Dependencies
- [List stories, features, or external systems this story depends on]
- [Include integration points or third-party services]

#### Definition of Done
- [ ] Code written and unit tests passing
- [ ] Code reviewed and approved
- [ ] Functional tests passing
- [ ] Non-functional requirements met
- [ ] Documentation updated
- [ ] Acceptance criteria verified
- [ ] Product owner acceptance obtained

### Testing Notes
**Test Scenarios:**
1. [Primary happy path test case]
2. [Edge case or error condition]
3. [Negative test case]

**Test Data Requirements:**
- [Specify any special test data needed]
- [Include sample data or data generation requirements]

### Notes and Attachments
[Additional context, wireframes, prototypes, or reference materials]

---

## Template Usage Guidelines

### Writing Effective User Stories
1. **Keep it Simple:** Focus on one specific capability or goal
2. **Use Active Voice:** Write from the user's perspective
3. **Include the "Why":** Always explain the benefit or reason
4. **Make it Testable:** Ensure acceptance criteria are measurable
5. **Keep it Small:** Stories should be completable in one sprint

### INVEST Criteria Checklist
- **Independent:** Story can be developed independently
- **Negotiable:** Details can be discussed and refined
- **Valuable:** Provides clear value to users or business
- **Estimable:** Team can estimate the effort required
- **Small:** Can be completed within a single iteration
- **Testable:** Can be verified through testing

### Story Refinement Process
1. **Backlog Grooming:** Review and refine story details
2. **Estimation:** Team provides effort estimate
3. **Acceptance Criteria:** Define clear completion criteria
4. **Dependencies:** Identify and resolve blocking items
5. **Prioritization:** Order stories based on business value

### Common Anti-Patterns to Avoid
- **Too Large:** Stories that are actually epics in disguise
- **Too Technical:** Stories written from system perspective
- **Vague Criteria:** Acceptance criteria that can't be measured
- **No Business Value:** Stories without clear user or business benefit
- **Missing Context:** Stories lacking sufficient detail for implementation

---

## Example User Story

**Story ID:** US-SHOP-001
**Title:** User Registration and Login
**Priority:** Must Have
**Estimate:** 5 story points

**As a** new customer
**I want to** create an account and log in to the system
**So that** I can place orders and track my purchases

**Acceptance Criteria:**
- [ ] User can register with email, password, and basic profile information
- [ ] Email verification is required before account activation
- [ ] User can log in with valid credentials
- [ ] System displays appropriate error messages for invalid login attempts
- [ ] Password reset functionality is available
- [ ] Session management with automatic logout after 30 minutes of inactivity

**Business Value:** Enables customer account creation and secure access, supporting personalized shopping experience and order tracking.

**Assumptions:**
- Email service is available for verification
- Basic profile information includes name, address, and phone
- Password requirements: minimum 8 characters, mixed case, numbers, and symbols

**Dependencies:**
- User management microservice (US-ARCH-001)
- Email notification service (US-COMM-001)