import React from "react";
import { Mail, Phone } from "lucide-react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-brand-name">Axis Marketing Solutions</h3>
            <p className="footer-tagline">
              Let’s turn your visions into visuals.
            </p>
            <p className="footer-description">
              Helping brands stand out through strategic marketing, creative
              content, and data-driven growth systems.
            </p>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Get in Touch</h4>

            <a
              href="mailto:youraxisms@gmail.com"
              className="footer-contact-item"
            >
              <Mail size={18} strokeWidth={2} />
              <span>youraxisms@gmail.com</span>
            </a>

            <a href="tel:+639309320571" className="footer-contact-item">
              <Phone size={18} strokeWidth={2} />
              <span>+63 930 932 0571</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Axis Marketing Solutions. All rights reserved.
          </p>
          <p className="footer-location">Davao City, Philippines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
