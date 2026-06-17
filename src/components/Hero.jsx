import "./Hero.css";
import heroImage from "../assets/hero.png";
import {
  HiUserGroup,
  HiStar,
  HiShieldCheck
} from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";

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
               <span className="green">prices</span>
            <br />
            book 
               <span className="blue">Appointments</span> 
                  </h1>

          <p>
            Search medical tests, compare hospital prices,
            find doctors and book appointments from trusted
            healthcare providers near you.
          </p>

          <div className="search-box">
            <HiMagnifyingGlass className="search-icon" />
            <input
              type="text"
              placeholder="Search Blood Test, MRI, CT Scan..."
            />

           <button>Search</button>

          </div>

          <div className="hero-buttons">
            <button className="primary-btn">
                Book Appointement 
              </button>

            <button className="secondary-btn">
                        Explore Tests
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

         <div className="stat-card stat-top">
  <div className="stat-icon">
    <HiStar />
  </div>

  <div>
    <span>Patient Rating</span>
    <h3>4.9 <small>/5.0</small></h3>
  </div>
</div>

<div className="stat-card stat-right">
  <div className="stat-icon rating">
    <HiUserGroup />
  </div>

  <div>
    <span>Happy Patients</span>
    <h3>2M+</h3>
  </div>
</div>

<div className="stat-card stat-bottom">
  <div className="stat-icon secure">
    <HiShieldCheck />
  </div>

  <div>
    <span>Verified</span>
    <h3>100% Secure</h3>
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