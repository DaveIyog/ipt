import React, { useState } from 'react';
import BannerImage from '../assets/HomeBackground.jpg';
import '../styles/Homepage.css';

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const headerStyle = {
    color: isLoggedIn ? 'green' : 'white', // Change color based on login state
  };

  const buttonStyle = {
    backgroundColor: isLoggedIn ? 'yellow' : 'blue', // Change button color based on login state
  };

  return (
    <div className="homepage" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" style={headerStyle}>
        <h1>Welcome to Dishcovery</h1>
        <p>Explore and share delicious recipes with Dishcover!</p>
        </div>
      {/* Add more content as needed */}
    </div>
  );
};

export default Homepage;