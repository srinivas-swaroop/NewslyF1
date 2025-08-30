import express from "express";
import { signup, login, getProfile, logoutController } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

//Logout
router.post("/logout", logoutController);

// Profile (protected)
router.get("/profile", authMiddleware, getProfile);

export default router;
