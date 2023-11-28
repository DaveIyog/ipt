import React from 'react';
import BannerImage from '../assets/HomeBackground.jpg';
import '../styles/Home.css';


function Home() {
  return (
    < div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" >
        <h1> DISHCOVERY </h1>
        <p> DISHCOVER FOOD RECIPES</p>
        </div>
    </div>
  );
}

export default Home;