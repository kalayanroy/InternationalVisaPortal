# EduVisa Global - International Student Visa Agency

## Overview

EduVisa Global is a comprehensive full-stack web application designed to help international students navigate the university application and visa process. The platform provides detailed information about universities worldwide, application guidance, and expert consultation services for student visa applications.

## System Architecture

The application follows a modern full-stack architecture with the following components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom theming and responsive design
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: tsx for TypeScript execution in development

### Build & Deployment
- **Development**: Vite dev server with HMR
- **Production**: esbuild for server bundling, Vite for client bundling
- **Platform**: Replit with autoscale deployment
- **Environment**: Node.js 20, PostgreSQL 16

## Key Components

### Database Schema
The application uses a PostgreSQL database with the following main entities:

1. **Contact Inquiries**: Stores student inquiry forms with personal details and consultation requests
2. **Students**: User accounts for students with authentication and profile information
3. **Appointments**: Scheduling system for consultation appointments
4. **Applications**: University application tracking and management

### API Structure
RESTful API endpoints organized by functionality:

- `/api/contact` - Contact form submissions and inquiry management
- `/api/students` - Student registration and profile management
- `/api/appointments` - Consultation scheduling
- `/api/applications` - University application tracking

### Frontend Pages
- **Home**: Landing page with hero section, services overview, and contact form
- **University Pages**: Dedicated pages for different countries (USA, UK, Canada, Australia, Germany, Singapore)
- **University Detail**: Individual university information pages
- **Contact**: Comprehensive contact and inquiry form

### UI Components
Comprehensive component library including:
- Navigation and header components
- University listing and filtering
- Contact forms with validation
- Testimonials and success stories
- FAQ section with collapsible items
- Process workflow visualization

## Data Flow

1. **User Navigation**: Client-side routing handles page navigation without server requests
2. **Form Submissions**: Contact forms use React Hook Form with Zod validation, submitted via TanStack Query mutations
3. **Database Operations**: Express routes handle API requests, interact with PostgreSQL via Drizzle ORM
4. **Real-time Updates**: TanStack Query provides optimistic updates and cache management
5. **Error Handling**: Comprehensive error boundaries and user feedback through toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router
- **@radix-ui/***: Unstyled, accessible UI primitives

### Development Tools
- **drizzle-kit**: Database migrations and schema management
- **tsx**: TypeScript execution for development
- **tailwindcss**: Utility-first CSS framework
- **vite**: Fast build tool and development server

### UI/UX Libraries
- **class-variance-authority**: Type-safe styling variants
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider components
- **lucide-react**: Icon library

## Deployment Strategy

### Development Environment
- Replit-hosted development with hot module replacement
- Automatic TypeScript compilation with tsx
- PostgreSQL database provisioning through Replit
- Port 5000 exposed for development server

### Production Deployment
- Vite builds optimized client bundle to `dist/public`
- esbuild compiles server code to `dist/index.js`
- Autoscale deployment on Replit infrastructure
- Environment variables managed through Replit secrets
- Database migrations handled via `drizzle-kit push`

### Build Process
1. Client build: `vite build` - Creates optimized React bundle
2. Server build: `esbuild` - Bundles Express server with external dependencies
3. Production start: Serves static files and API from single Node.js process

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

✓ **January 27, 2025**: Implemented Comprehensive Notification History Management Interface
- **Complete Notification Tracking**: Full notification history with detailed view, search, and filtering capabilities
- **Advanced Search & Filtering**: Real-time search by title/message with filtering by type, status, and date range
- **Notification Statistics**: Live dashboard with total, unread, read, and application update counters
- **Multi-Filter System**: Filter by notification type (application_status, appointment, document_request, general, system)
- **Status Management**: Mark notifications as read/unread with visual status indicators and color coding
- **Date Range Filtering**: Filter notifications by today, last week, last month, or all time
- **Detailed View Dialog**: Complete notification details with user information, message content, and related entities
- **Bulk Operations**: Delete notifications with confirmation dialogs and real-time updates
- **Visual Indicators**: Color-coded badges for types and status with "New" labels for unread notifications
- **Professional Table Layout**: Clean responsive design with user details, timestamps, and action buttons
- **Real-time Updates**: Automatic cache invalidation and live data refresh after mark read/delete operations
- **API Integration**: Complete backend integration with proper error handling and success notifications

✓ **January 26, 2025**: Implemented Complete About Us Menu Structure with All Pages
- **Our Office Page**: Created comprehensive office page based on provided design mockup with teal/blue/green office feature cards
- **Our Teams Page**: Built team showcase page with six member cards featuring circular teal avatars and detailed descriptions
- **FAQs Page**: Implemented collapsible FAQ accordion with six common questions about consultation services
- **Resources Page**: Built comprehensive resources page with English test and university resources sections plus newsletter subscription
- **Events & News Page**: Created dynamic events page with today's education news, upcoming seminars, and past events sections
- **Navigation Restructure**: Changed main menu from "Contact Us" to "About Us" dropdown with complete submenu structure
- **Page Features**: Reception area, meeting rooms, work spaces sections with location details and virtual tour call-to-action
- **Team Showcase**: Professional team member cards with positions, descriptions, and "Join Our Team" call-to-action
- **Interactive FAQs**: Accordion-style FAQ section with expandable answers and contact button
- **Resource Library**: English test resources (IELTS, TOEFL, PTE) and university resources (rankings, course comparison, scholarships)
- **Newsletter Integration**: Email subscription form with teal styling and responsive design
- **News Categories**: Breaking news, visa updates, scholarships, test updates, healthcare, rankings, and policy updates with color-coded badges
- **Event Management**: Upcoming seminars and workshops with booking functionality, location details, and date/time display
- **Responsive Design**: Modern card-based layout with interactive map placeholder and proper mobile responsiveness
- **Menu Organization**: "Our Office", "Our Teams", "FAQs", "Resources", and "Events" now appear under "About Us" menu in both desktop and mobile navigation
- **Route Integration**: Added /our-office, /our-teams, /faqs, /resources, and /events routes with proper component integration and navigation flow

✓ **January 25, 2025**: Fixed Document Status Update Issue in Admin Dashboard
- **Document Status Sync**: Fixed critical issue where uploaded documents weren't updating application records
- **Bidirectional Updates**: Document uploads via request responses now properly update the original application's document fields
- **Status Consistency**: "Missing" documents now correctly show as "Uploaded" after users respond to document requests
- **Database Integration**: Added `updateStudentApplicationDocuments` method to sync uploaded files with application records
- **Field Mapping**: Proper mapping between document request types and application database fields
- **Real-time Updates**: Admin dashboard now shows accurate document status after user uploads

✓ **January 25, 2025**: Complete Admin-User Document Request Workflow Implementation
- **Document Request System**: Full bidirectional communication system between admin and users
- **Admin Dashboard**: Enhanced Document Messages History showing both admin requests and user responses
- **User Dashboard**: New Document Requests tab with complete upload interface for responding to admin requests
- **Message Types**: Proper differentiation between document_request (admin) and document_upload (user responses)
- **File Management**: Integrated file upload/download system with JWT authentication for user document responses
- **Status Tracking**: Real-time status updates showing New/Viewed/Completed states with visual indicators
- **Enhanced UI**: Color-coded messages (blue for user responses, gray for admin requests) with proper file display
- **Complete Workflow**: Admin sends requests → User receives in dedicated tab → User uploads with messages → Admin sees responses with downloadable files

✓ **January 25, 2025**: Complete File Upload System & Document Management Implementation
- **File Storage System**: Implemented secure file upload using Multer with organized directory structure
- **Storage Location**: Files saved to `/uploads/applications/user_{userId}/` with unique timestamps
- **File Security**: JWT-based authentication for file access with user permission checking
- **Admin Dashboard**: Enhanced with real-time document viewing and download capabilities
- **Document Management**: Added comprehensive messaging system for requesting additional documents
- **Database Integration**: File references stored in database with actual files on disk
- **File Types**: Support for PDF, DOC, DOCX, TXT, JPG, JPEG, PNG with 10MB size limit
- **API Endpoints**: Complete file serving infrastructure with proper access controls

✓ **June 27, 2025**: Enhanced Admin Dashboard with Management Features
- Redesigned admin dashboard with tabbed interface for better organization
- Added comprehensive user management with role editing capabilities
- Implemented student application management with status updates
- Added university management section with CRUD operations
- Enhanced UI with proper tables, dialogs, and status badges
- Fixed localStorage fallback for authentication state management
- Added proper error handling and success notifications
- Integrated real-time data updates with TanStack Query mutations

✓ **June 25, 2025**: Complete JWT Authentication System Implementation
- Implemented secure JWT authentication with bcrypt password hashing
- Created login and registration pages with modern UI design
- Added role-based access control (user/admin roles)
- Integrated authentication with header navigation
- Admin dashboard with statistics and user management
- Database-backed user storage with PostgreSQL
- Session management with localStorage
- Protected routes with proper redirects based on user roles

## Changelog

Changelog:
- June 25, 2025: JWT authentication system with login, registration, admin dashboard
- June 14, 2025: Initial setup