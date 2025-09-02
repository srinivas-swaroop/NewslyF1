import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Newsly</div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/signup" className="btn">Get Started</Link>
      </div>
    </nav>
  );
}
