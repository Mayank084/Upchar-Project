import "./Navbar.css";
import logoIcon from "../assets/logoicon.png";
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

      <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
