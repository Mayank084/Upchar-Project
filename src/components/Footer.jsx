import "./Footer.css";

import "./Footer.css";
import { Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <h2>Upchar</h2>

          <p>
            Compare hospitals, doctors and medical tests
            across India. Find the best healthcare options
            and book appointments instantly.
          </p>

          <div className="social-icons">

           <a href="#">Instagram</a>

         <a href="#">Linkedin</a>

            <a href="#">Twitter</a>

          </div>

        </div>

        <div className="footer-column">

          <h3>Company</h3>

          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-column">

          <h3>Services</h3>

          <ul>
            <li>Hospitals</li>
            <li>Doctors</li>
            <li>Medical Tests</li>
            <li>Appointments</li>
          </ul>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <ul>
            <li>
              <Mail size={16} />
              &nbsp; support@upchar.com
            </li>

            <li>
              <Phone size={16} />
              &nbsp; +91 9876543210
            </li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Upchar. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;