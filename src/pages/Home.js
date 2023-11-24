import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/background.png';

function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1> DISHCOVER </h1>
        <p> DISHCOVER FOOD RECIPES</p>
        <Link to="/menu">
          <button> Dishcover </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;