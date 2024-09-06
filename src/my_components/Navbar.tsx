import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger menu
import './Navbar.css'; // Import the CSS file for styling

const Navbar: React.FC = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyWebsite</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login/Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
