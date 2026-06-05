import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <img
        src={heroImage}
        alt="Healthcare"
        className="hero-image"
      />

      <div className="hero-overlay">

        <h1>
          Compare Healthcare.
          <br />
          Book Smarter.
        </h1>

        <p>
          Search medical tests, compare hospital prices,
          find doctors and book appointments instantly.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Blood Test, MRI, CT Scan..."
          />
          <button>Search</button>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            Book Appointment
          </button>

          <button className="secondary-btn">
            Explore Tests
          </button>
        </div>

        <div className="stats">

          <div className="stat-card">
            <h3>500+</h3>
            <span>Hospitals</span>
          </div>

          <div className="stat-card">
            <h3>1000+</h3>
            <span>Doctors</span>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <span>Medical Tests</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;