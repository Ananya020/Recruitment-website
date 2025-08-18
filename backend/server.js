import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import applicantRoutes from "./routes/applicantRoutes.js";

dotenv.config();

const app = express();

// Allow production Vercel domain and local dev; allow Vercel preview deployments
const allowedOrigins = [
  'https://recruitments2k25.codenex.co.in/',
  'http://localhost:3000',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const isAllowed =
      allowedOrigins.includes(origin) || /\.vercel\.app$/.test(origin);
    if (isAllowed) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
}));
app.use(express.json());

// Try to connect to MongoDB but don't block server startup
connectDB().catch(err => {
  console.log("⚠️  MongoDB connection failed, but server will continue running for testing");
  console.log("Error:", err.message);
  console.log("MONGO_URI:", process.env.MONGO_URI ? "Set" : "Not set");
});

app.use("/api/applicants", applicantRoutes);

// Add a test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

// Add a comprehensive health check
app.get("/health", (req, res) => {
  const health = {
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    mongoUri: process.env.MONGO_URI ? "set" : "not set"
  };
  res.json(health);
});

// Add a simple health check
app.get("/", (req, res) => {
  res.json({ message: "CodeNex Recruitment Backend is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Test endpoint: http://localhost:${PORT}/api/test`);
});