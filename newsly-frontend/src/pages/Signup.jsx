import { useState } from "react";
import "./Home.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Signup successful! Please login.");
      } else {
        setMessage(data.message || "Signup failed.");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div className="login-page">
      {/* Top bar */}
      <header className="login-header">
        <div className="logo-text">Newsly</div>
        <nav>
          <a href="/about">About</a>
          <a href="/login" className="ml-6">Get Started</a>
        </nav>
      </header>

      {/* Content Section */}
      <div className="login-container">
        {/* Signup Card */}
        <div className="login-card">
          <h2>Create your <span className="logo-text">Newsly</span> account</h2>
          <p className="subtitle">Stay updated with personalized news.</p>

          <form onSubmit={handleSubmit}>
            {message && <p className="error-text">{message}</p>}

            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="cta-btn">Register</button>
          </form>

          <p className="signup-text">
            Already have an account?{" "}
            <a href="/login" className="signup-link">Login →</a>
          </p>
        </div>

        {/* Globe Image */}
        <div className="login-globe">
          <img src="../src/assets/globe.png" alt="Globe illustration" />
        </div>
      </div>
    </div>
  );
}
