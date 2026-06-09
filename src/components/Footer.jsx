import "./Footer.css";
import { Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      {/* Wave top */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#f0f4f8" />
        </svg>
      </div>

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-logo">
          <div className="footer-brand">
            <span className="brand-icon">+</span>
            <h2>Upchar</h2>
          </div>

          <p>
            Compare hospitals, doctors and medical tests
            across India. Find the best healthcare options
            and book appointments instantly.
          </p>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>

         <div className="social-icons">

  {/* Instagram */}
  <a href="#" aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="#" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  </a>

  {/* Twitter / X */}
  <a href="#" aria-label="Twitter">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.827L0 1.153h7.594l5.243 6.932z"/>
    </svg>
  </a>

</div>

</div> {/* closes footer-logo */}

{/* Company */}
<div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Hospitals</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Medical Tests</a></li>
            <li><a href="#">Appointments</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:support@upchar.com" className="contact-link">
                <span className="contact-icon"><Mail size={15} /></span>
                support@upchar.com
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="contact-link">
                <span className="contact-icon"><Phone size={15} /></span>
                +91 9876543210
              </a>
            </li>
          </ul>

          <div className="footer-badge">
            <span>🛡</span>
            <div>
              <strong>Verified & Trusted</strong>
              <p>ISO certified platform</p>
            </div>
          </div>
        </div>

      </div>{/* ← closes footer-container */}

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© 2026 Upchar. All Rights Reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;