import React from "react";
import "../style/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="nav1">
        <div className="logo">Harryphoto</div>

        <a href="#about">Descover</a>
        <a href="#services">Explore</a>
      </div>
      <nav className="nav">
        <button className="signup">Signup</button>
        <button className="login">Login</button>
      </nav>
    </header>
  );
}

export default Header;
