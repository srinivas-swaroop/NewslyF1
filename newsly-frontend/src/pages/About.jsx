import "./Home.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Top bar */}
      <header className="login-header">
        <div className="logo-text">Newsly</div>
        <nav>
          <a href="/">Home</a>
          <a href="/login" className="ml-6">Get Started</a>
        </nav>
      </header>

      {/* About Section */}
      <section className="about-hero">
        <div className="about-card">
          <h1>
            About <span className="logo-text">Newsly</span>
          </h1>
          <p className="about-subtitle">
            Your trusted companion for staying informed.
          </p>

          <div className="about-points">
            <div className="point">
              🌍 <span>Global Coverage with the latest headlines from around the world.</span>
            </div>
            <div className="point">
              📍 <span>Regional Updates that matter to your country and locality.</span>
            </div>
            <div className="point">
              ⭐ <span>Personalized Feeds tailored to your unique interests and keywords.</span>
            </div>
          </div>

          <p className="about-mission">
            Newsly isn’t just another news aggregator — it’s your personalized
            gateway to the world’s information. Whether you’re tracking global
            affairs, local stories, or topics close to your heart, Newsly curates a
            seamless and engaging experience.
          </p>

          <p className="about-mission">
            Our mission is simple: to empower individuals with stories that truly
            matter. With a clean interface, customizable feeds, and lightning-fast
            updates, Newsly makes sure you never miss what’s important.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left - About */}
          <div className="footer-about">
            <div className="footer-icon">@</div>
            <div>
              <h3>About Newsly</h3>
              <p>
                Newsly delivers global, regional, and personalized news feeds with
                a modern and easy-to-use interface. Stay connected to the stories
                shaping the world.
              </p>
            </div>
          </div>

          {/* Right - Contact */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <p className="name">Swaroop C N S</p>
            <p>PreFinal Year at VIT AP University</p>
            <p>📧 cnsswaroop@gmail.com</p>
            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/swaroopcns/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/srinivas-swaroop"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Newsly. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
