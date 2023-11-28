import React from 'react';
import Logo from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        {/* Wrap the logo with Link and set "to" prop to the home route */}
        <Link to="/">
          <img src={Logo} alt="Dishcovery Logo" />
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
      </div>
    </div>
  );
}

export default Navbar;