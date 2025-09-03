import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import cors from "cors";

dotenv.config();
console.log("MONGO_URI from env:", process.env.MONGO_URI);
console.log("API Key From Server:", process.env.NEWSDATA_API_KEY);

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
