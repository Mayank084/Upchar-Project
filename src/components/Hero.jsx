import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <>
      <section className="hero">

        <div className="hero-left">

          <div className="hero-badge">
            🛡 Trusted Healthcare Platform
          </div>

          <h1>
            Compare
            <br />
            <span>Healthcare</span> Prices.
            <br />
            Book Appointments
            <br />
            Smarter.
          </h1>

          <p>
            Search medical tests, compare hospital prices,
            find doctors and book appointments from trusted
            healthcare providers near you.
          </p>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search Blood Test, MRI, CT Scan..."
            />
            <button>Search</button>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">
              📅 Book Appointment
            </button>

            <button className="secondary-btn">
              🧪 Explore Tests
            </button>
          </div>

        </div>

        <div className="hero-right">

          <div className="dots dots--top"></div>
          <div className="dots dots--bottom"></div>

          <div className="image-glow"></div>

          <img
            src={heroImage}
            alt="Doctors"
            className="hero-image"
          />

          <div className="floating-card card-1">
            <span className="card-icon">🏥</span>
            <div>
              <div className="card-number">500+</div>
              <div className="card-label">Hospitals</div>
            </div>
          </div>

          <div className="floating-card card-2">
            <span className="card-icon">👨‍⚕️</span>
            <div>
              <div className="card-number">1000+</div>
              <div className="card-label">Doctors</div>
            </div>
          </div>

        </div>

      </section>

      {/* Features Bar */}
      <div className="features-bar">
        <div className="feature-item">
          <div className="feature-icon">🛡</div>
          <div>
            <div className="feature-title">Trusted & Verified</div>
            <div className="feature-desc">All hospitals and doctors are verified</div>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🏷</div>
          <div>
            <div className="feature-title">Best Price Guarantee</div>
            <div className="feature-desc">Compare prices and save more</div>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🕐</div>
          <div>
            <div className="feature-title">Easy Booking</div>
            <div className="feature-desc">Book appointments in just a few clicks</div>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📞</div>
          <div>
            <div className="feature-title">24/7 Support</div>
            <div className="feature-desc">We are here to help you anytime</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;