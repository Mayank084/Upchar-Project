import { Link } from "react-router-dom";
import "./Navbar.css";
import logoIcon from "../assets/logoicon.png";
import { FaMapMarkerAlt, FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
         <div className="logo-container">
        <img src={logoIcon} alt="Upchar Logo" className="logo" />
      </div>


      <div className="nav-links">

  <NavLink to="/">Home</NavLink>

  <NavLink to="/tests">Tests</NavLink>

  <NavLink to="/hospitals">Hospitals</NavLink>

  <NavLink to="/doctors">Doctors</NavLink>

  <NavLink to="/about">About</NavLink>

</div>

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
