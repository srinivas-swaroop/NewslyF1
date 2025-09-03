import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed"; // ✅ fixed import
import "./profile.css";


export default function Profile() {
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showFeed, setShowFeed] = useState(false);
  const [loadingNews, setLoadingNews] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data);
      } catch (err) {
        setError("Failed to load profile. Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const fetchNews = async (type) => {
    setShowFeed(true); // switch immediately
    setLoadingNews(true);

    try {
      const token = localStorage.getItem("token");
      let url = "";

      if (type === "global") url = "http://localhost:5000/api/news/global-news";
      if (type === "country") url = "http://localhost:5000/api/news/country-news?country=in";
      if (type === "personalized") url = "http://localhost:5000/api/news/personalized-feed";

      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setNews(res.data.results || []);
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoadingNews(false);
    }
  };

  if (error) return <p className="error-text">{error}</p>;
  if (!user) return <p className="loading-text">Loading profile...</p>;

  return (
    <div className="profile-wrapper">
      {/* Navbar */}
      <nav className="navbar white-navbar">
        <div className="logo">Newsly</div>
        <div className="nav-right">
          <img
            src="../src/assets/Women.png"
            alt="Profile"
            className="nav-profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Container */}
      <div className={`main-content ${showFeed ? "feed-mode" : "profile-mode"}`}>
        {/* Phase 1 - Profile */}
        {!showFeed && (
          <>
            <div className="profile-section">
              <div className="profile-left">
                <img src="../src/assets/Women.png" alt="profile" className="big-pic" />
              </div>
              <div className="profile-right">
                <h2 className="typing">
  <ReactTyped
    strings={[`Hi ${user.name}, once more good!`, "Welcome back to Newsly!"]}
    typeSpeed={60}
    backSpeed={30}
    loop={false}
    showCursor={true}
    cursorChar="|"
  />
</h2>
                <p>{user.email}</p>
                <h4>Your Interests:</h4>
                <div className="tag-list">
                  {user.preferences?.categories?.map((c) => (
                    <span key={c} className="tag">{c}</span>
                  ))}
                  {user.preferences?.countries?.map((c) => (
                    <span key={c} className="tag">{c}</span>
                  ))}
                  {user.preferences?.keywords?.map((k) => (
                    <span key={k} className="tag keyword">{k}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="divider-line"></div>

            {/* Buttons at bottom edge */}
            <div className="feed-buttons bottom-fixed">
              <button onClick={() => fetchNews("global")}>🌍 Global Feed</button>
              <button onClick={() => fetchNews("country")}>🇮🇳 Country Feed</button>
              <button onClick={() => fetchNews("personalized")}>⭐ Personalized Feed</button>
            </div>
          </>
        )}

        {/* Phase 2 - Feed */}
        {showFeed && (
          <>
            {/* Floating Back Button */}
            <button className="floating-back" onClick={() => setShowFeed(false)}>←</button>

            <div className="feed-buttons">
              <button onClick={() => fetchNews("global")}>🌍 Global Feed</button>
              <button onClick={() => fetchNews("country")}>🇮🇳 Country Feed</button>
              <button onClick={() => fetchNews("personalized")}>⭐ Personalized Feed</button>
            </div>

            <div className="news-grid">
              {loadingNews ? (
                <p className="loading-text">Fetching news...</p>
              ) : news.length > 0 ? (
                news
                  .filter((item) => item.image_url)
                  .map((item, idx) => (
                    <div key={idx} className="news-card">
                      <img src={item.image_url} alt={item.title} />
                      <div className="news-content">
                        <h4>{item.title}</h4>
                        <p>{item.description || "No description available."}</p>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          Read more →
                        </a>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="no-news">No news loaded.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
