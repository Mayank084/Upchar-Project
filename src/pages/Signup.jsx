import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-page">

      {/* Left Side */}
      <div className="signup-left">

        <div className="dashboard-preview">

          <div className="dashboard-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="dashboard-content">

            <div className="appointment-card">
              <span className="badge">Join Upchar</span>

              <h3>Healthcare Made Easy</h3>

              <p>
                Find doctors, compare hospitals and
                book tests in minutes.
              </p>
            </div>

            <div className="dashboard-row">

              <div className="mini-card">
                <h4>500+</h4>
                <span>Hospitals</span>
              </div>

              <div className="mini-card">
                <h4>1000+</h4>
                <span>Doctors</span>
              </div>

            </div>

            <div className="test-card">
              <div>
                <h4>Trusted Platform</h4>
                <p>Secure Healthcare Booking</p>
              </div>

              <span className="status">
                Verified
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="signup-right">

        <div className="signup-card">

          <span className="signup-tag">
            Create Account
          </span>

          <h2>Join Upchar Today</h2>

          <p className="subtitle">
            Start booking appointments and
            comparing healthcare services.
          </p>

          <form>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create password"
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
              />
            </div>

            <button className="signup-btn-main">
              Create Account
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">
            Continue with Google
          </button>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Sign In</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;