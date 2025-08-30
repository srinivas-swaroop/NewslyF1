import express from "express";
import { getGlobalNewsController, getCountryNewsController } from "../controllers/newsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// 🌍 Global news
router.get("/global-news", authMiddleware, getGlobalNewsController);

// 🇮🇳 Country news
router.get("/country-news", authMiddleware, getCountryNewsController);

export default router;
