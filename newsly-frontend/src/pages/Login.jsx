import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      {/* Top bar */}
      <header className="login-header">
        <div className="logo-text">Newsly</div>
        <nav>
          <a href="/about">About</a>
          <a href="/signup" className="ml-6">Get Started</a>
        </nav>
      </header>

      {/* Content Section */}
      <div className="login-container">
        {/* Login Card */}
        <div className="login-card">
          <h2>Welcome back to <span className="logo-text">Newsly</span></h2>
          <p className="subtitle">Your personalized news starts here.</p>

          <form onSubmit={handleSubmit}>
            {error && <p className="error-text">{error}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="cta-btn">Login</button>
          </form>

          <p className="signup-text">
            Don’t have an account?{" "}
            <a href="/signup" className="signup-link">Sign up →</a>
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
