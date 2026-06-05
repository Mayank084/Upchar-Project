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
        <li>Home</li>
        <li>Tests</li>
        <li>Hospitals</li>
        <li>Doctors</li>
        <li>About</li>
      </ul>

     <div className="nav-buttons">
  <div className="location">
    <FaMapMarkerAlt />
    <span>Mumbai</span>
  </div>

  <div className="login-section">
    <FiLogIn />
    <span>Login</span>
  </div>

  <button className="signup-btn">
    <FaUserPlus />
    <span>Sign Up</span>
  </button>
</div>
    </nav>
  );
}

export default Navbar;
