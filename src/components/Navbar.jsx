import { Link } from "react-router-dom";
import "./Navbar.css";
import logoIcon from "../assets/logoicon.png";
import { FaMapMarkerAlt, FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
function Navbar() {
  return (
    <nav className="navbar">
         <div className="logo-container">
        <img src={logoIcon} alt="Upchar Logo" className="logo" />
      </div>


      <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/tests">Tests</Link></li>
  <li><Link to="/hospitals">Hospitals</Link></li>
  <li><Link to="/doctors">Doctors</Link></li>
  <li><Link to="/about">About</Link></li>
</ul>

     <div className="nav-buttons">
  <div className="location">
    <FaMapMarkerAlt />
    <span>Mumbai</span>
  </div>

 <Link to="/login" className="login-section">
  <FiLogIn />
  <span>Login</span>
</Link>

 <Link to="/signup" className="signup-btn">
  <FaUserPlus />
  <span>Sign Up</span>
</Link>

  </div> {/* closes nav-buttons */}

    </nav>
  );
}

export default Navbar;
