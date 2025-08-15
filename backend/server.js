import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import applicantRoutes from "./routes/applicantRoutes.js";

dotenv.config();

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());

// Try to connect to MongoDB but don't block server startup
connectDB().catch(err => {
  console.log("⚠️  MongoDB connection failed, but server will continue running for testing");
  console.log("Error:", err.message);
});

app.use("/api/applicants", applicantRoutes);

// Add a test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
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