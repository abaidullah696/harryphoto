import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#link3">Link 3</a>
          <a href="#link4">Link 4</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#link5">Privacy Policy</a>
          <a href="#link6">Terms of Service</a>
        </div>
      </div>
      <p className="copyright">© 2023 Your Company</p>
    </footer>
  );
}

export default Footer;
