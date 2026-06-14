import "./TestsPage.css";
import { Link } from "react-router-dom";

function TestsPage() {
  const tests = [
    {
      name: "Blood Test",
      price: "₹299",
      report: "Reports in 12 Hours",
    },
    {
      name: "Thyroid Test",
      price: "₹499",
      report: "Reports in 24 Hours",
    },
    {
      name: "MRI Scan",
      price: "₹2499",
      report: "Reports in 1 Day",
    },
    {
      name: "CT Scan",
      price: "₹1999",
      report: "Reports in 1 Day",
    },
  ];

  return (
    <div className="tests-page">

      {/* Hero */}
      <section className="tests-hero">

        <span>MEDICAL TESTS</span>

        <h1>Find & Book Medical Tests Online</h1>

        <p>
          Compare prices, book tests and get
          reports from trusted diagnostic labs.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Blood Test, MRI, CT Scan..."
          />
          <button>Search</button>
        </div>

      </section>

      {/* Stats */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Partner Labs</p>
        </div>

        <div className="stat-card">
          <h2>100K+</h2>
          <p>Tests Booked</p>
        </div>

        <div className="stat-card">
          <h2>4.9★</h2>
          <p>Customer Rating</p>
        </div>

        <div className="stat-card">
          <h2>24H</h2>
          <p>Fast Reports</p>
        </div>

      </section>

      {/* Featured Package */}

      <section className="featured-package">

        <div>
          <span className="offer-tag">
            SAVE 50%
          </span>

          <h2>Full Body Checkup Package</h2>

          <p>
            Includes Blood Test, Thyroid,
            Diabetes, Liver and Kidney Tests.
          </p>

          <div className="price-row">
            <span className="new-price">
              ₹999
            </span>

            <span className="old-price">
              ₹1999
            </span>
          </div>
        </div>

        <button>
          Book Package
        </button>

      </section>

      {/* Tests Grid */}

      <section className="tests-grid">

        {tests.map((test, index) => (
          <div className="test-card" key={index}>

            <h3>{test.name}</h3>

            <span className="home-badge">
              Home Collection
            </span>

            <h2>{test.price}</h2>

            <p>{test.report}</p>

            <Link to="/dashboard"
                className="test-btn"
                   >
                  Book Test
            </Link>

          </div>
        ))}

      </section>

      {/* Why Choose Us */}

      <section className="why-upchar">

        <h2>Why Choose Upchar?</h2>

        <div className="why-grid">

          <div>✓ NABL Certified Labs</div>
          <div>✓ Home Sample Collection</div>
          <div>✓ Lowest Price Guarantee</div>
          <div>✓ Digital Reports</div>
          <div>✓ Fast Booking</div>
          <div>✓ Trusted Healthcare Partners</div>

        </div>

      </section>

    </div>
  );
}

export default TestsPage;