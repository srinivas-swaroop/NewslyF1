import express from "express";
import { getGlobalNewsController, getCountryNewsController } from "../controllers/newsController.js";
import { updatePreferences } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getPersonalizedNewsController } from "../controllers/newsController.js";

const router = express.Router();

// 🌍 Global news
router.get("/global-news", authMiddleware, getGlobalNewsController);

// 🇮🇳 Country news
router.get("/country-news", authMiddleware, getCountryNewsController);

router.put("/preferences", authMiddleware, updatePreferences);
router.get("/personalized-feed", authMiddleware, getPersonalizedNewsController);

export default router;
