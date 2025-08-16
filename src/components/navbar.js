// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "../App.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">MyApp</Link>
        </div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Menu links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {!user && (
            <>
              <li>
                <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
              </li>
              <li>
                <Link to="/feed" onClick={() => setIsOpen(false)}>Feed</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <Logout /> 
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
