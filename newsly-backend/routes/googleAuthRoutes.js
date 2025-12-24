import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

// Step 1: Redirect user to Google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Google callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    // Issue JWT token
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Redirect to frontend with token
    res.redirect(`http://localhost:3000/oauth-success?token=${token}`);
  }
);

export default router;
