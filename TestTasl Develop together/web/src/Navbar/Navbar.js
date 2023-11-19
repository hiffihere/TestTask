import React, { useState } from "react";
import "./navbar.css";
import Hamburger from "../Navbar/Hamburger.png";
import myperfectwriting from "../Navbar/myperfectwriting.png";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="navcontainer">
        <div className="logo">
          <img src={myperfectwriting} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="Hamburger Menu" className="Hamburger" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>Pricing</li>
            <li>Company</li>
            <li>Services</li>
            <li>All Course Guides</li>
            <li>Examples</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
