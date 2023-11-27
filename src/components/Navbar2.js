import React from 'react';
import Logo from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Dishcovery Logo" /> Dishcovery
      </div>
      
      <div className="rightSide">
        <Link to="/"> Add Recipe </Link>
        <Link to="/about"> Recipe Pages</Link>
        
      </div>
    </div>
  );
}

export default Navbar;