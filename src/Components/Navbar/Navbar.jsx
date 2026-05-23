import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/progrmData";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <nav className="nav-container">
      <h1 className="nav-logo">{mobileMenuOpen ? "" : "LearningShala"}</h1>
      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#features">Feature</a>
        </li>
        <li>
          <a href="#eligibility">Eligibility</a>
        </li>
        <li>
          <a href="#leadform">Contact</a>
        </li>
      </ul>
      {mobileMenuOpen ? (
        ""
      ) : (
        <img
          src={assets.menu_icon}
          onClick={() => setMobileMenuOpen(true)}
          alt="Menu Icon"
          className="menu-icon"
        />
      )}

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <img
          className="cross-icon"
          src={assets.cross_icon}
          onClick={() => setMobileMenuOpen(false)}
          alt="Menu Icon"
                  />
          <ul className="mobile-nav-links">
            <li>
              <a onClick={() => setMobileMenuOpen(false)} href="#hero">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setMobileMenuOpen(false)} href="#features">
                Feature
              </a>
            </li>
            <li>
              <a onClick={() => setMobileMenuOpen(false)} href="#eligibility">
                Eligibility
              </a>
            </li>
            <li>
              <a onClick={() => setMobileMenuOpen(false)} href="#leadform">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
