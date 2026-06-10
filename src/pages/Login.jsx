import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      <div className="login-left">

  <div className="bg-glow glow-1"></div>
  <div className="bg-glow glow-2"></div>

  <div className="illustration-card">

    <div className="medical-icon">
      🏥
    </div>

    <h1>
      Smarter Healthcare
      <br />
      Starts Here
    </h1>

    <p>
      Compare hospitals, find doctors,
      book tests and manage appointments
      effortlessly.
    </p>

    <div className="stats-box">

      <div className="stat">
        <h3>500+</h3>
        <span>Hospitals</span>
      </div>

      <div className="stat">
        <h3>1000+</h3>
        <span>Doctors</span>
      </div>

      <div className="stat">
        <h3>4.9★</h3>
        <span>Rating</span>
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