import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/HomeBackground.jpg';
import '../styles/Home.css';



function Home() {
  return (
    < div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" >
        <h1> DISHCOVERY </h1>
        <p> DISHCOVER FOOD RECIPES</p>
        < Link to="/login">
          <button> Dishcover </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;