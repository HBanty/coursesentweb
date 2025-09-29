# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
A full-stack course selling application with separate user and admin interfaces. Users can browse and purchase courses, while admins can create and manage courses. The application integrates with Stripe for payments and Cloudinary for image hosting.

## Development Commands

### Backend (Express.js/Node.js)
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server with nodemon
npm start

# Server runs on port 4001 by default
```

### Frontend (React/Vite)
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Running Both Services
To develop the full application, you need to run both backend and frontend servers simultaneously:
1. Backend: `cd backend && npm start`
2. Frontend: `cd frontend && npm run dev` (in separate terminal)

## Architecture Overview

### Backend Structure
- **MVC Architecture**: Models, Controllers, Routes pattern
- **Authentication**: JWT-based with separate tokens for users and admins
- **File Uploads**: Express-fileupload with Cloudinary integration
- **Payment Processing**: Stripe integration for course purchases
- **Database**: MongoDB with Mongoose ODM

### Key Backend Components
- **Models**: User, Admin, Course, Purchase, Order schemas in `/models/`
- **Controllers**: Business logic in `/controllers/` (user, admin, course, order)
- **Middlewares**: JWT authentication in `/middlewares/` (user.mid.js, admin.mid.js)
- **Routes**: API endpoints in `/routes/` with prefix `/api/v1/`

### Frontend Structure
- **React with Vite**: Modern React setup with hot module replacement
- **Routing**: React Router with separate user and admin routes
- **Styling**: Tailwind CSS for UI components
- **State Management**: Local storage for user/admin sessions
- **Payment UI**: Stripe Elements for payment processing

### API Endpoints Structure
- User routes: `/api/v1/user/*`
- Admin routes: `/api/v1/admin/*`
- Course routes: `/api/v1/course/*`
- Order routes: `/api/v1/order/*`

### Authentication Flow
- **Users**: JWT tokens stored in localStorage, verified via userMiddleware
- **Admins**: Separate JWT tokens with adminMiddleware
- **Protected Routes**: Frontend checks localStorage, backend verifies JWT tokens

### Data Models
- **Course**: title, description, price, image (Cloudinary), creatorId (admin)
- **User/Admin**: firstName, lastName, email, password (bcrypt hashed)
- **Purchase**: Links userId to courseId for purchase tracking

### Environment Configuration
- Backend uses environment variables for MongoDB URI, JWT secrets, Cloudinary credentials
- Frontend has configurable backend URL in `src/utils/utils.js`
- Current setup points to production deployment on Render

### Key Integration Points
- **Image Uploads**: Files uploaded via express-fileupload, stored in Cloudinary
- **Payments**: Stripe PaymentIntents API for secure payments
- **CORS**: Configured for frontend-backend communication
- **File Validation**: Image format validation (PNG/JPEG only)

### Development Notes
- Backend includes exposed Stripe test keys in config.js (should be moved to env vars)
- Frontend backend URL is hardcoded in utils.js (toggle between local/production)
- User model has typo: `union: true` should be `unique: true`
- Some admin routes lack proper authentication checks in frontend routing
- Purchase completion flow may need verification after Stripe payment succeeds