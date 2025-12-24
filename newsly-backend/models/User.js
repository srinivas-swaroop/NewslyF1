import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    // Password is optional (required only for local/email users)
    password: { type: String },

    // Optional field to distinguish login type
    provider: { type: String, enum: ["local", "google"], default: "local" },

    // 🆕 Personalization preferences
    preferences: {
      categories: { type: [String], default: [] }, // ["technology", "sports"]
      countries: { type: [String], default: [] },  // ["in", "us"]
      keywords: { type: [String], default: [] },   // ["AI", "bitcoin"]
    },
  },
  { timestamps: true }
);

// Hash password before saving (only for local users)
userSchema.pre("save", async function (next) {
  if (this.provider !== "local") return next(); // skip hashing for Google users
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  if (!this.password) return false; // Google users have no password
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
