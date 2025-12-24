import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";

// Routes
import authRoutes from "./routes/authRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import googleAuthRoutes from "./routes/googleAuthRoutes.js"; // separate Google OAuth routes

// Passport config
import "./utils/passport.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize()); // initialize passport (no sessions needed if JWT-based)

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Logging environment info (optional)
console.log("MONGO_URI from env:", process.env.MONGO_URI);
console.log("API Key From Server:", process.env.NEWSDATA_API_KEY);

// API routes
app.use("/api/auth", authRoutes);       // email/password auth
app.use("/api/auth", googleAuthRoutes); // Google OAuth
app.use("/api/news", newsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
