import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero */}

      <section className="about-hero">

        <span>ABOUT UPCHAR</span>

        <h1>
          Making Healthcare
          <br />
          Simple & Accessible
        </h1>

        <p>
          Upchar helps users compare hospitals,
          find trusted doctors, book medical tests
          and manage appointments from one platform.
        </p>

      </section>

      {/* Mission */}

      <section className="mission-section">

        <div className="mission-text">
          <span>OUR MISSION</span>

          <h2>
            Better Healthcare
            For Everyone
          </h2>

          <p>
            We believe healthcare should be
            transparent, affordable and accessible.
            Our platform connects patients with
            trusted hospitals, doctors and labs
            across India.
          </p>
        </div>

        <div className="mission-card">
          <h3>Why Upchar?</h3>

          <ul>
            <li>✓ Verified Hospitals</li>
            <li>✓ Trusted Doctors</li>
            <li>✓ Easy Booking</li>
            <li>✓ Medical Test Comparison</li>
            <li>✓ Fast Reports</li>
          </ul>
        </div>

      </section>

      {/* Stats */}

      <section className="stats-section">

        <div className="stat-box">
          <h2>500+</h2>
          <p>Hospitals</p>
        </div>

        <div className="stat-box">
          <h2>2000+</h2>
          <p>Doctors</p>
        </div>

        <div className="stat-box">
          <h2>100K+</h2>
          <p>Appointments</p>
        </div>

        <div className="stat-box">
          <h2>4.9★</h2>
          <p>User Rating</p>
        </div>

      </section>

      {/* Values */}

      <section className="values-section">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">
            <h3>Trust</h3>
            <p>
              Verified healthcare providers
              and transparent information.
            </p>
          </div>

          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Using technology to simplify
              healthcare decisions.
            </p>
          </div>

          <div className="value-card">
            <h3>Accessibility</h3>
            <p>
              Making quality healthcare
              available for everyone.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>
          Ready To Take Control
          Of Your Healthcare?
        </h2>

        <button>
          Explore Services
        </button>

      </section>

    </div>
  );
}

export default About;