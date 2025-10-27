# Course Selling App

A full-stack course selling platform built with React, Node.js, Express, MongoDB, and Stripe.

## 🚀 Live Demo

- **Frontend:** https://coursesentweb.vercel.app
- **Backend:** https://coursesentweb.onrender.com

## 📋 Features

- User authentication (JWT-based)
- Admin dashboard for course management
- Course browsing and purchase
- Stripe payment integration
- Cloudinary image upload
- Responsive design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- Stripe React
- React Hot Toast

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- Stripe
- Cloudinary
- Bcrypt

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB account
- Stripe account
- Cloudinary account

### 1. Clone the repository
```bash
git clone https://github.com/HBanty/coursesentweb.git
cd coursesentweb
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
# MongoDB Connection
MONGO_URI=your_mongodb_connection_string

# Stripe Keys
STRIPE_SECRET_KEY=your_stripe_secret_key

# JWT Secrets
JWT_USER_PASSWORD=your_user_jwt_secret
JWT_ADMIN_PASSWORD=your_admin_jwt_secret

# Frontend URL for CORS (comma-separated for multiple origins)
FRONTEND_URL=http://localhost:5173,https://your-production-url.com

# Cloudinary Configuration
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret

# Server Port
PORT=4001
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file in the frontend directory:
```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:4001/api/v1

# Stripe Public Key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

Start the frontend server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🔑 Getting API Keys & Credentials

### MongoDB (MONGO_URI)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new cluster (free tier available)
4. Click **Connect** → **Connect your application**
5. Copy the connection string (it looks like: `mongodb+srv://username:<password>@cluster.xxxxx.mongodb.net/`)
6. Replace `<password>` with your database user password
7. Add your database name at the end: `mongodb+srv://username:password@cluster.xxxxx.mongodb.net/course-selling-app`

### Stripe Keys (STRIPE_SECRET_KEY & VITE_STRIPE_PUBLIC_KEY)
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Sign up or log in
3. Click **Developers** → **API keys** in the sidebar
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_`) → Use for `VITE_STRIPE_PUBLIC_KEY`
   - **Secret key** (starts with `sk_test_`) → Use for `STRIPE_SECRET_KEY`
5. ⚠️ **Important:** Use **Test mode** keys for development (toggle at top of page)

### Cloudinary (cloud_name, api_key, api_secret)
1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up or log in
3. Go to your [Dashboard](https://cloudinary.com/console)
4. You'll see your credentials at the top:
   - **Cloud name** → Use for `cloud_name`
   - **API Key** → Use for `api_key`
   - **API Secret** → Click **"Reveal"** to see it → Use for `api_secret`

### JWT Secrets (JWT_USER_PASSWORD & JWT_ADMIN_PASSWORD)
- These are custom secret strings you create
- Use a strong, random string (at least 32 characters)
- You can generate them using:
  ```bash
  # On Linux/Mac/Windows (PowerShell)
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
- Or use any random string generator
- Keep them different for user and admin tokens

## 🔐 Environment Variables

### Backend (.env)
| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `JWT_USER_PASSWORD` | Secret for user JWT tokens |
| `JWT_ADMIN_PASSWORD` | Secret for admin JWT tokens |
| `FRONTEND_URL` | Allowed CORS origins (comma-separated) |
| `cloud_name` | Cloudinary cloud name |
| `api_key` | Cloudinary API key |
| `api_secret` | Cloudinary API secret |
| `PORT` | Server port (default: 4001) |

### Frontend (.env.local)
| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Backend API URL |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key |

## 🚀 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Backend (Render)

1. Push your code to GitHub
2. Create a new Web Service in Render
3. Connect your repository
4. Add environment variables
5. Deploy

## 📝 Scripts

### Backend
```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔒 Security

- All sensitive data is stored in environment variables
- Passwords are hashed using bcrypt
- JWT tokens for authentication
- HTTP-only cookies for token storage
- CORS configured for specific origins

## 📄 License

This project is licensed under the ISC License.

## 👤 Bijnadatta Moharana

Akhil K

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
