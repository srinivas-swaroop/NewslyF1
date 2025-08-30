const express = require("express");
const router = express.Router();
const { signup, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Profile (protected)
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
