import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-text">
          <h1>Your world.<br />Your feed.</h1>
          <button onClick={() => navigate("/login")}>Start Reading</button>
        </div>
        <div className="hero-image">
          <img src="/globe.png" alt="Globe with news" />
        </div>
      </section>

      <section className="features">
        <FeatureCard 
          icon="🌍"
          title="Global News"
          text="Stay informed with stories from around the world."
        />
        <FeatureCard 
          icon="🇮🇳"
          title="Country-Specific Updates"
          text="Get news tailored to your region."
        />
        <FeatureCard 
          icon="⭐"
          title="Personalized Feeds"
          text="Curate your own news feed based on your interests."
        />
      </section>
    </>
  );
}
