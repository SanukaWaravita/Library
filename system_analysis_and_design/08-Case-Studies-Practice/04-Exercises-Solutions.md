# 04 - System Analysis and Design Exercises & Solutions

## Overview

This section provides practical exercises and solutions covering key concepts in System Analysis and Design. Each exercise includes problem statements, requirements analysis, design solutions, and implementation considerations. These exercises are designed to reinforce learning through hands-on application of SAD methodologies.

## Exercise 1: Online Learning Platform

### Problem Statement
**Context:** A small educational institution wants to develop an online learning platform to supplement their traditional classroom teaching. The platform should support course delivery, student assessment, and progress tracking.

**Current Challenges:**
- Limited online course offerings
- Manual grading and progress tracking
- No centralized student performance data
- Difficulty scaling to more students

### Requirements Analysis

#### Functional Requirements
1. **User Management System**
   - Student registration and profile management
   - Instructor account creation and course assignment
   - Administrator controls for user access management

2. **Course Management**
   - Course creation with modules, lessons, and multimedia content
   - Assignment and quiz creation tools
   - Course enrollment and access control

3. **Learning Activities**
   - Video lecture streaming with progress tracking
   - Interactive quizzes with automatic grading
   - Discussion forums for student interaction
   - Assignment submission and feedback system

4. **Assessment and Analytics**
   - Grade book with weighted scoring
   - Student progress dashboards
   - Learning analytics and reporting

#### Non-Functional Requirements
- Support 1,000 concurrent users
- 99% uptime during business hours
- Mobile-responsive design
- Data security and privacy compliance

### Solution Design

#### System Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                    Client Layer                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐             │
│  │   Web App   │ │ Mobile App  │ │   Admin    │             │
│  │             │ │             │ │   Portal   │             │
│  └─────────────┘ └─────────────┘ └─────────────┘             │
└─────────────────────┬─────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                Microservices Layer                          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                     │
│  │User │ │Course│ │Assess│ │Analyt│ │Content│                 │
│  │Mgmt │ │Mgmt  │ │ment  │ │ics   │ │Mgmt   │                 │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                     │
└─────────────────────┬─────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                Data Layer                                   │
│  ┌─────────────┐ ┌─────────────┐                             │
│  │ PostgreSQL  │ │   Redis     │                             │
│  │  (Primary)  │ │  (Cache)    │                             │
│  └─────────────┘ └─────────────┘                             │
└─────────────────────────────────────────────────────────────┘
```

#### Database Design
```sql
-- Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_type VARCHAR(20) NOT NULL, -- 'student', 'instructor', 'admin'
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructor_id INTEGER REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'draft'
);

-- Enrollments table
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES users(user_id),
    course_id INTEGER REFERENCES courses(course_id),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completion_percentage DECIMAL(5,2) DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active'
);
```

### Implementation Considerations
- **Technology Stack:** React.js frontend, Node.js backend, PostgreSQL database
- **Authentication:** JWT-based authentication with role-based access control
- **File Storage:** AWS S3 for video content and assignments
- **Scalability:** Horizontal scaling with load balancer
- **Security:** Input validation, SQL injection prevention, HTTPS encryption

---

## Exercise 2: Inventory Management System

### Problem Statement
**Context:** A retail chain with 50 stores needs a centralized inventory management system to track stock levels, automate reordering, and improve supply chain efficiency.

**Current Challenges:**
- Manual inventory counting every quarter
- Stockouts of popular items
- Overstocking of slow-moving products
- Inconsistent pricing across stores
- Limited visibility into supply chain performance

### Requirements Analysis

#### Functional Requirements
1. **Inventory Tracking**
   - Real-time stock level monitoring
   - Automatic stock movement recording
   - Multi-location inventory management
   - Product categorization and attributes

2. **Purchase Order Management**
   - Automated reorder point calculations
   - Supplier management and integration
   - Purchase order generation and tracking
   - Receiving and inspection workflows

3. **Sales Integration**
   - Point-of-sale system integration
   - Real-time inventory deduction
   - Sales analytics and reporting
   - Price management and promotions

4. **Reporting and Analytics**
   - Inventory turnover analysis
   - Stockout and overstock reporting
   - Supplier performance metrics
   - Demand forecasting

#### Non-Functional Requirements
- Real-time inventory updates across all locations
- 99.9% system availability
- Integration with existing POS systems
- Mobile access for store managers

### Solution Design

#### Key Processes
1. **Stock Level Monitoring**
   - Automated alerts for low stock items
   - Real-time dashboard for inventory status
   - Historical trend analysis

2. **Reorder Management**
   - Economic order quantity calculations
   - Automated purchase order generation
   - Supplier lead time tracking

3. **Integration Points**
   - POS system for sales data
   - Supplier systems for order placement
   - Warehouse management for receiving

#### Data Flow Diagram (Level 0)
```
┌─────────────┐     ┌─────────────────┐     ┌─────────────┐
│   Supplier  │────▶│  Purchase Order │────▶│   Receive   │
│             │     │   Management    │     │   Goods     │
└─────────────┘     └─────────────────┘     └─────────────┘
         ▲                     │                     │
         │                     ▼                     ▼
┌─────────────┐     ┌─────────────────┐     ┌─────────────┐
│   Inventory │◀────│   Stock Level   │◀────│   Sales     │
│   Database  │     │   Updates       │     │   System    │
└─────────────┘     └─────────────────┘     └─────────────┘
```

### Implementation Considerations
- **Database Design:** Normalized schema with proper indexing
- **Real-time Updates:** WebSocket connections for live inventory data
- **API Integration:** RESTful APIs for POS and supplier systems
- **Data Validation:** Business rules for inventory accuracy
- **Backup and Recovery:** Regular backups with point-in-time recovery

---

## Exercise 3: Healthcare Patient Management System

### Problem Statement
**Context:** A medium-sized clinic needs a patient management system to streamline appointment scheduling, medical records management, and billing processes.

**Current Challenges:**
- Paper-based patient records
- Manual appointment scheduling
- Billing errors and delays
- Limited patient communication
- Compliance with healthcare regulations

### Requirements Analysis

#### Functional Requirements
1. **Patient Management**
   - Patient registration and profile management
   - Medical history and allergy tracking
   - Insurance information management
   - Emergency contact details

2. **Appointment Scheduling**
   - Online appointment booking
   - Automated reminders and confirmations
   - Waitlist management
   - Resource scheduling (doctors, rooms)

3. **Electronic Health Records (EHR)**
   - Secure medical record storage
   - Prescription management
   - Test result integration
   - Treatment plan documentation

4. **Billing and Insurance**
   - Automated billing generation
   - Insurance claim processing
   - Payment tracking and reconciliation
   - Financial reporting

#### Non-Functional Requirements
- HIPAA compliance for patient data
- 24/7 system availability for critical functions
- Audit logging for all patient data access
- Integration with lab and pharmacy systems

### Solution Design

#### Security Architecture
- **Data Encryption:** AES-256 encryption for data at rest and in transit
- **Access Control:** Role-based access with multi-factor authentication
- **Audit Logging:** Comprehensive logging of all system activities
- **Backup Security:** Encrypted backups with secure storage

#### Integration Requirements
- **Lab Systems:** HL7 integration for test results
- **Pharmacy Systems:** Electronic prescription transmission
- **Insurance Providers:** Automated claim submission and status updates
- **Medical Devices:** Integration with diagnostic equipment

### Implementation Considerations
- **Regulatory Compliance:** HIPAA, HITECH, and other healthcare regulations
- **Data Privacy:** Patient consent management and data anonymization
- **System Reliability:** Redundant systems for critical healthcare functions
- **User Training:** Comprehensive training for medical staff
- **Change Management:** Phased implementation to minimize disruption

---

## Exercise 4: Banking Transaction Processing System

### Problem Statement
**Context:** A regional bank needs to modernize its core banking system to support digital banking services, improve transaction processing efficiency, and enhance security.

**Current Challenges:**
- Legacy mainframe system with high maintenance costs
- Limited online banking capabilities
- Manual transaction processing bottlenecks
- Security vulnerabilities in older systems
- Difficulty integrating new financial products

### Requirements Analysis

#### Functional Requirements
1. **Account Management**
   - Multi-account support (checking, savings, loans)
   - Account opening and maintenance
   - Balance inquiries and transaction history
   - Account transfer capabilities

2. **Transaction Processing**
   - Real-time transaction validation
   - Automated clearing and settlement
   - Fraud detection and prevention
   - International transfer support

3. **Digital Banking Services**
   - Online banking portal
   - Mobile banking application
   - Bill payment services
   - Account alerts and notifications

4. **Compliance and Reporting**
   - Regulatory reporting automation
   - Anti-money laundering (AML) monitoring
   - Know Your Customer (KYC) verification
   - Audit trail maintenance

#### Non-Functional Requirements
- 99.999% system availability (5 minutes downtime per year)
- Sub-second transaction response times
- End-to-end encryption for all transactions
- Compliance with banking regulations (PCI DSS, SOX, etc.)

### Solution Design

#### Core Banking Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                Digital Banking Layer                        │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐             │
│  │ Online Bank │ │ Mobile App  │ │   API      │             │
│  │             │ │             │ │ Gateway    │             │
│  └─────────────┘ └─────────────┘ └─────────────┘             │
└─────────────────────┬─────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                Core Banking Services                        │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │
│  │Acc  │ │Trans│ │Pay  │ │Sec  │ │Comp │ │Repo│             │
│  │Mgmt │ │Proc │ │ments│ │urity│ │liance│ │rtng│             │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘             │
└─────────────────────┬─────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                Data & Infrastructure Layer                  │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐             │
│  │ Distributed │ │   Redis     │ │ Blockchain  │             │
│  │  Database   │ │  (Cache)    │ │ (Security)  │             │
│  └─────────────┘ └─────────────┘ └─────────────┘             │
└─────────────────────────────────────────────────────────────┘
```

#### Security Measures
- **Multi-Layer Security:** Network, application, and data security
- **Fraud Detection:** Machine learning-based anomaly detection
- **Regulatory Compliance:** Automated compliance checking
- **Disaster Recovery:** Multi-site redundancy with automatic failover

### Implementation Considerations
- **Legacy System Migration:** Careful data migration with validation
- **High Availability:** Distributed architecture with automatic failover
- **Performance Optimization:** Database optimization and caching strategies
- **Regulatory Compliance:** Ongoing compliance monitoring and reporting
- **Security Testing:** Regular penetration testing and vulnerability assessments

---

## Exercise 5: Manufacturing Execution System (MES)

### Problem Statement
**Context:** A manufacturing company needs an MES to track production processes, monitor equipment performance, and improve overall equipment effectiveness (OEE).

**Current Challenges:**
- Manual production tracking on paper
- Limited visibility into production bottlenecks
- Equipment downtime tracking issues
- Quality control documentation gaps
- Inefficient production scheduling

### Requirements Analysis

#### Functional Requirements
1. **Production Tracking**
   - Real-time production monitoring
   - Work order management and tracking
   - Labor tracking and efficiency metrics
   - Material usage tracking

2. **Equipment Monitoring**
   - Equipment performance tracking
   - Predictive maintenance alerts
   - Downtime reason codes and tracking
   - OEE calculation and reporting

3. **Quality Management**
   - Quality inspection workflows
   - Non-conformance tracking
   - Statistical process control (SPC)
   - Quality documentation management

4. **Inventory Integration**
   - Raw material consumption tracking
   - Work-in-progress (WIP) tracking
   - Finished goods inventory updates
   - Material traceability

#### Non-Functional Requirements
- Real-time data collection from shop floor equipment
- Integration with existing ERP system
- Mobile access for supervisors and operators
- Data accuracy and reliability

### Solution Design

#### Shop Floor Integration
- **PLC Integration:** Direct connection to programmable logic controllers
- **SCADA Systems:** Supervisory control and data acquisition
- **IoT Sensors:** Equipment condition monitoring
- **Barcode/RFID:** Material and work order tracking

#### Key Performance Indicators (KPIs)
- **Overall Equipment Effectiveness (OEE):** Availability × Performance × Quality
- **Mean Time Between Failures (MTBF):** Equipment reliability metric
- **Mean Time To Repair (MTTR):** Maintenance efficiency metric
- **First Pass Yield:** Quality performance indicator

### Implementation Considerations
- **Change Management:** Training for production staff
- **Data Integration:** Connecting disparate shop floor systems
- **Real-time Processing:** Handling high-volume sensor data
- **User Interface:** Intuitive displays for production operators
- **Scalability:** Supporting multiple production lines and facilities

---

## Exercise Solutions Summary

### Common Analysis Patterns
1. **Stakeholder Identification:** Always identify all user groups and their needs
2. **Requirements Prioritization:** Use MoSCoW method for requirement prioritization
3. **Process Modeling:** Create data flow diagrams and process flows
4. **Data Modeling:** Design normalized database schemas
5. **Interface Design:** Consider user experience and accessibility

### Design Principles Applied
1. **Modular Design:** Break systems into manageable components
2. **Scalability Planning:** Design for future growth
3. **Security Integration:** Embed security throughout the design
4. **Performance Optimization:** Consider response times and throughput
5. **Integration Planning:** Design for system interoperability

### Implementation Best Practices
1. **Incremental Development:** Build and deploy in phases
2. **Quality Assurance:** Comprehensive testing at all levels
3. **Documentation:** Maintain detailed system documentation
4. **Training Programs:** User training and change management
5. **Monitoring and Support:** Ongoing system monitoring and maintenance

### Key Takeaways
- **User-Centric Approach:** Always focus on user needs and experience
- **Iterative Process:** Requirements evolve through analysis and feedback
- **Technology Selection:** Choose appropriate technology for business needs
- **Risk Management:** Identify and mitigate implementation risks
- **Business Value:** Ensure technical solutions deliver business benefits

These exercises demonstrate the application of system analysis and design principles across different industries and system types. Each solution follows a structured approach from requirements gathering through implementation, emphasizing the importance of thorough analysis and user-centered design.