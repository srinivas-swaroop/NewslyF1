// controllers/userController.js
import User from "../models/User.js";

export const updatePreferences = async (req, res) => {
  try {
    const userId = req.user.id; // from JWT
    const { categories, countries, keywords } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { preferences: { categories, countries, keywords } },
      { new: true }
    );

    res.json({ message: "Preferences updated", preferences: user.preferences });
  } catch (err) {
    res.status(500).json({ message: "Error updating preferences", error: err.message });
  }
};
