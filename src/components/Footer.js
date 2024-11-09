import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="sec1">
              <h4>Resources</h4>
              <a href="#link1">Stock Photos</a>
              <a href="#link2">Collection</a>
              <a href="#link1">Editorials</a>
              <a href="#link2">Featured</a>
              <a href="#link1">Collection</a>
              <a href="#link2">Premium</a>
              <a href="#link1">Trending</a>
            </div>
            <div className="sec2">
              <h4>Packages</h4>
              <a href="#link1">Enterprise Package</a>
              <a href="#link2">Agency Packages</a>
            </div>
          </div>
          <div className="footer-section">
            <div className="sec1">
              <h4>Our Company</h4>
              <a href="#link3">About Us</a>
              <a href="#link4">Pricing</a>
              <a href="#link3">Coupons</a>
              <a href="#link4">Contactus</a>
            </div>

            <div className="sec2">
              <h4>Check out More</h4>
              <a href="#link3">Gift Cards</a>
              <a href="#link4">Coupons</a>
            </div>
          </div>
          <div className="footer-section">
            <div className="sec1">
              <h4>Legal</h4>
              <a href="#link5">Terms of use</a>
              <a href="#link6">Terms of Service</a>
              <a href="#link5">Privacy Policy</a>
              <a href="#link6">Patents</a>
              <a href="#link5">Cookie Policy</a>
            </div>

            <div className="sec2">
              <h4>Privacy Policy</h4>
              <a href="#link5">Licences</a>
              <a href="#link6">Help Center</a>
            </div>
          </div>
          <div className="footer-section">
            <div className="sec1">
              <h4>Earn</h4>
              <a href="#link5">Affiliate Partner Benifits</a>
              <a href="#link6">Shop Benifits</a>
              <a href="#link5">Become an Ambassador</a>
            </div>

            <div className="sec2">
              <h4>Languages</h4>
              <a href="#link5">AR DE EN ES</a>
              <a href="#link6">FR ID IT JA</a>
              <a href="#link5">KD NL PL PT</a>
              <a href="#link6">SV TH</a>
            </div>
          </div>
        </div>
        <div>
          <div className="footer-buttom">
            <div className="logo">Harryphotos</div>
            <div className="des">
              Sign up for a free account today and start exploring our Image
              Content Library. Whether you're working on a professional project,
              sprucing up your personal blog, or simply seeking visual
              inspiration, we've got you covered
            </div>
          </div>
        </div>
      </footer>
      <p className="copyright">
        Copyright@2024 Harry Photo, All rights reserved
      </p>
    </>
  );
}

export default Footer;
