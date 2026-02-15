# Use Case Template

## Template Overview
This template provides a standardized format for documenting use cases in system analysis and design. Use cases describe the interactions between actors and the system to achieve specific goals, providing a clear understanding of system functionality from a user perspective.

## Use Case Format

### Basic Information
**Use Case ID:** UC-[System Code]-[Sequential Number]
**Use Case Name:** [Descriptive name of the use case]
**Priority:** [High / Medium / Low]
**Complexity:** [Simple / Medium / Complex]
**Status:** [Draft / Reviewed / Approved / Implemented]

### Actors
**Primary Actor:** [The main user initiating the use case]
**Secondary Actors:** [Other users or systems involved]
**Supporting Actors:** [Systems or services that support the use case]

### Preconditions
[List the conditions that must be true before the use case can begin]
- [Precondition 1]
- [Precondition 2]
- [Precondition 3]

### Postconditions
[List the conditions that will be true after successful completion]
- [Postcondition 1] (Success scenario)
- [Postcondition 2] (Success scenario)

**Minimal Guarantees:** [Conditions that are true even if the use case fails]
**Success Guarantees:** [Conditions that are true only if the use case succeeds]

### Main Success Scenario
[The primary path through the use case - the "happy path"]

1. [Step 1: Actor initiates the use case]
2. [Step 2: System responds or requests information]
3. [Step 3: Actor provides required information]
4. [Step 4: System validates and processes]
5. [Step 5: System confirms successful completion]

### Alternative Flows
[Variations on the main success scenario]

**Alternative Flow A1:** [Condition triggering the alternative]
1. [Alternative step 1]
2. [Alternative step 2]
[Return to main flow at step X]

**Alternative Flow A2:** [Condition triggering the alternative]
1. [Alternative step 1]
2. [Alternative step 2]
[Return to main flow at step Y]

### Exception Flows
[Error conditions and system failures]

**Exception E1:** [Error condition description]
1. [System detects the error]
2. [System notifies the actor]
3. [System provides recovery options]
[Use case ends or returns to step X]

**Exception E2:** [Error condition description]
1. [System detects the error]
2. [System logs the error]
3. [System provides appropriate error message]
[Use case ends]

### Business Rules
[Business rules that constrain this use case]
- [Rule 1: Description and rationale]
- [Rule 2: Description and rationale]
- [Rule 3: Description and rationale]

### Data Requirements
**Input Data:**
- [Data element 1: Type, validation rules, source]
- [Data element 2: Type, validation rules, source]

**Output Data:**
- [Data element 1: Type, destination, format]
- [Data element 2: Type, destination, format]

### Non-Functional Requirements
**Performance:** [Response time, throughput, availability requirements]
**Security:** [Authentication, authorization, data protection requirements]
**Usability:** [User interface, accessibility, training requirements]
**Reliability:** [Error handling, recovery, backup requirements]

### Assumptions
[List any assumptions made in documenting this use case]
- [Assumption 1: Description and impact]
- [Assumption 2: Description and impact]

### Dependencies
**Includes:** [Other use cases that are included in this use case]
**Extends:** [Use cases that extend this use case under certain conditions]
**Generalizes:** [More general use cases that this use case specializes]

### User Interface Requirements
**Screens/Forms:**
- [Screen 1: Purpose and key elements]
- [Screen 2: Purpose and key elements]

**Navigation:**
- [Describe the flow between screens]
- [Include any special navigation requirements]

### Testing Considerations
**Test Cases:**
1. [Main success scenario test case]
2. [Alternative flow test case]
3. [Exception flow test case]

**Test Data Requirements:**
- [Specify test data needed for validation]

---

## Template Usage Guidelines

### Use Case Development Process
1. **Identify Actors:** Determine all users and systems interacting with the system
2. **Define Scope:** Clearly bound the use case to a single goal
3. **Write Scenarios:** Document main success, alternative, and exception flows
4. **Validate Requirements:** Ensure all functional requirements are covered
5. **Review and Refine:** Get feedback from stakeholders and refine details

### Use Case Levels
- **Business Use Case:** High-level, business-focused use case
- **System Use Case:** Technology-agnostic system functionality
- **Implementation Use Case:** Technology-specific implementation details

### Use Case Relationships
- **Include:** Breaking down complex use cases into smaller, reusable parts
- **Extend:** Adding optional behavior under specific conditions
- **Generalize:** Creating more abstract use cases from specific ones

### Quality Criteria
- **Complete:** All scenarios (success, alternative, exception) documented
- **Consistent:** No conflicts with other use cases or requirements
- **Unambiguous:** Clear, precise language without interpretation
- **Testable:** Scenarios can be verified through testing
- **Feasible:** Technically achievable within constraints

### Common Mistakes to Avoid
- **Too Granular:** Use cases that are too small and detailed
- **Too Broad:** Use cases that encompass multiple unrelated goals
- **UI-Centric:** Use cases that focus on interface rather than functionality
- **Missing Alternatives:** Only documenting the happy path
- **Vague Descriptions:** Using ambiguous language or undefined terms

---

## Example Use Case

**Use Case ID:** UC-SHOP-001
**Use Case Name:** Customer Account Registration
**Priority:** High
**Complexity:** Simple

### Actors
**Primary Actor:** Prospective Customer
**Secondary Actors:** Email System
**Supporting Actors:** User Management System

### Preconditions
- Customer has access to the registration web page
- Email service is operational
- User database is accessible

### Postconditions
**Success Guarantees:**
- Customer account is created and stored in the database
- Welcome email is sent to the customer
- Customer is logged into the system

### Main Success Scenario
1. Customer clicks "Create Account" button
2. System displays registration form
3. Customer enters email, password, and profile information
4. Customer submits the registration form
5. System validates the input data
6. System creates the customer account
7. System sends email verification link
8. Customer clicks verification link in email
9. System activates the account
10. System logs customer into the application
11. System displays account creation success message

### Alternative Flows
**Alternative Flow A1:** Email already exists
1. At step 5, system detects duplicate email
2. System displays error message: "Email already registered"
3. System provides link to password reset
4. Customer can try different email or use password reset
Return to step 3

### Exception Flows
**Exception E1:** Email service failure
1. At step 7, email service is unavailable
2. System logs the error
3. System displays message: "Account created. Please check email later for verification"
4. System sets account status to "pending verification"
Use case ends with partial success

### Business Rules
- Password must be at least 8 characters with mixed case, numbers, and symbols
- Email must be in valid format and unique in the system
- Account must be verified within 24 hours or it expires

### Data Requirements
**Input Data:**
- Email: String, valid email format, unique
- Password: String, 8+ characters, complexity requirements
- First Name: String, 2-50 characters, alphabetic
- Last Name: String, 2-50 characters, alphabetic

**Output Data:**
- Account ID: Auto-generated unique identifier
- Account Status: "active" or "pending"
- Welcome Email: HTML formatted message

### Non-Functional Requirements
**Performance:** Account creation < 3 seconds
**Security:** Password hashed with bcrypt, HTTPS encryption
**Usability:** Form validation with real-time feedback

### Assumptions
- Customer has internet access and can receive emails
- Email service has 99% uptime
- Database has sufficient capacity for new accounts

### Dependencies
**Includes:** UC-AUTH-001 (User Authentication)
**Extends:** UC-NOTIF-001 (Email Notification) under normal conditions