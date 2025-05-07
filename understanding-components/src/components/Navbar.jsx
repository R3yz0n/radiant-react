import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/feather-icon.svg" alt="StudySync" />
        <span>StudySync</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
