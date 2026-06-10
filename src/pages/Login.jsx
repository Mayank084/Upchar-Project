import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      <div className="login-left">

  <div className="dashboard-preview">

    <div className="dashboard-header">
      <div className="dot red"></div>
      <div className="dot yellow"></div>
      <div className="dot green"></div>
    </div>

    <div className="dashboard-content">

      <div className="appointment-card">
        <span className="badge">Upcoming Appointment</span>

        <h3>Dr. Priya Sharma</h3>

        <p>Cardiologist • Tomorrow 10:30 AM</p>
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
          <h4>MRI Scan</h4>
          <p>Booked Successfully</p>
        </div>

        <span className="status">
          Confirmed
        </span>
      </div>

      <div className="chart-card">

        <div className="chart-bar h1"></div>
        <div className="chart-bar h2"></div>
        <div className="chart-bar h3"></div>
        <div className="chart-bar h4"></div>
        <div className="chart-bar h5"></div>

      </div>

    </div>

  </div>

</div>

      <div className="login-right">

        <div className="login-card">

          <span className="login-tag">
            Welcome Back
          </span>

          <h2>Sign In To Upchar</h2>

          <p className="subtitle">
            Access appointments, hospitals,
            doctors and medical tests.
          </p>

          <form>

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
                placeholder="Enter your password"
              />
            </div>

            <div className="forgot-row">
              <a href="#">
                Forgot Password?
              </a>
            </div>

            <button className="login-btn">
              Sign In
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account?
            <Link to="/signup">
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;