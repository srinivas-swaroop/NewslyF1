import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function OAuthSuccess() {
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");

    if (token) {
      // Save token in localStorage
      localStorage.setItem("token", token);

      // Optional: fetch user profile before redirecting
      axios
        .get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          navigate("/profile", { replace: true });
        })
        .catch(() => {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        });
    } else {
      navigate("/login", { replace: true });
    }
  }, [search, navigate]);

  return <p>Logging in... please wait</p>;
}
