# 🏴‍☠️ CodeNex Recruitment Portal

A modern, One Piece-themed recruitment platform for CodeNex, featuring a beautiful frontend built with Next.js and a robust backend API with MongoDB integration.

![CodeNex Recruitment](https://img.shields.io/badge/CodeNex-Recruitment%20Portal-blue?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)
![Express.js](https://img.shields.io/badge/Express.js-5.1.0-green?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8.17.1-green?style=for-the-badge&logo=mongodb)

## 🌟 Features

### Frontend (Next.js + TypeScript)
- **Modern UI/UX**: Beautiful One Piece-themed design with vintage paper textures
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: 
  - Flip cards for domain information
  - Countdown timer for recruitment deadline
  - Dynamic application form with validation
  - Smooth animations and transitions
- **Form Management**: React Hook Form with Zod validation
- **UI Components**: Comprehensive component library using Radix UI and shadcn/ui
- **Theme Support**: Dark/light mode with next-themes

### Backend (Express.js + MongoDB)
- **RESTful API**: Clean API endpoints for applicant management
- **Database Integration**: MongoDB with Mongoose ODM
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: Secure environment variable management
- **Error Handling**: Comprehensive error handling and validation

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm
- MongoDB Atlas account (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ananya020/Recruitment-website.git
   cd Recruitment-website
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/codenex_recruitments?retryWrites=true&w=majority
   PORT=5000
   ```

5. **Start the Development Servers**

   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm start
   # or for development with auto-restart
   npx nodemon server.js
   ```

   **Terminal 2 - Frontend:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

## 📁 Project Structure

```
codenex-recruitment/
├── app/                          # Next.js app directory
│   ├── components/               # React components
│   │   └── application-form.tsx  # Main application form
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── backend/                      # Express.js backend
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   └── applicantController.js # API controllers
│   ├── models/
│   │   └── Applicant.js         # Mongoose schema
│   ├── routes/
│   │   └── applicantRoutes.js   # API routes
│   ├── server.js                # Express server
│   └── package.json
├── components/                   # Shared UI components
│   └── ui/                      # shadcn/ui components
├── public/                      # Static assets
│   ├── hero-background.png
│   ├── vintage-paper-texture.png
│   └── ...                     # Other images
├── lib/                         # Utility functions
├── hooks/                       # Custom React hooks
└── package.json
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: 
  - Radix UI (Accessible primitives)
  - shadcn/ui (Component library)
  - Lucide React (Icons)
- **Form Handling**: React Hook Form + Zod validation
- **State Management**: React useState/useEffect
- **Animations**: Tailwind CSS animations + Framer Motion

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose 8.17.1
- **Middleware**: 
  - CORS for cross-origin requests
  - dotenv for environment variables
- **Validation**: Built-in Express validation

## 📡 API Endpoints

### Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/test` | Health check endpoint |
| GET | `/api/applicants` | Get all applicants |
| POST | `/api/applicants` | Submit new application |

### Application Form Schema
```typescript
interface Applicant {
  name: string;           // Full name
  srmEmail: string;       // SRM email address
  personalEmail: string;  // Personal email address
  phoneNumber: string;    // Phone number
  yearOfStudy: string;    // Year of study (1st, 2nd, 3rd, 4th)
  course: string;         // Course (B.Tech, BCA, M.Tech, MCA, Other)
  specialization: string; // Specialization
  regNo: string;         // Registration number
  domain: string;        // Preferred domain (technical, creatives, non-tech)
  motivation: string;    // Motivation statement
  createdAt: Date;       // Application timestamp
}
```

## 🎨 Design Features

### One Piece Theme
- **Vintage Paper Textures**: Authentic old-world feel
- **Pirate Color Scheme**: Blue, yellow, and gold accents
- **Interactive Elements**: Flip cards, hover effects, and smooth transitions
- **Typography**: Bold, adventurous fonts matching the theme

### User Experience
- **Countdown Timer**: Real-time countdown to recruitment deadline
- **Domain Cards**: Interactive flip cards for different domains
- **Responsive Navigation**: Mobile-friendly navigation menu
- **Form Validation**: Real-time form validation with helpful error messages
- **Loading States**: Smooth loading animations and feedback

## 🔧 Development

### Available Scripts

**Frontend:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Backend:**
```bash
npm start        # Start production server
npx nodemon server.js  # Start development server with auto-restart
```

### Environment Variables

**Backend (.env):**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
```

## 🚀 Deployment

### Frontend (Vercel Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Heroku)
1. Create account on Railway or Heroku
2. Connect your repository
3. Set environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: Port number (usually auto-assigned)
4. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development**: Next.js, TypeScript, Tailwind CSS
- **Backend Development**: Express.js, MongoDB, Mongoose
- **Design**: One Piece-themed UI/UX
- **Deployment**: Vercel (Frontend), Railway/Heroku (Backend)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page for existing problems
2. Create a new issue with detailed description
3. Contact the development team

---

**"The sea is vast, and there's always more to discover!" - Monkey D. Luffy** 🏴‍☠️

*Built with ❤️ for CodeNex Recruitment*
