import React from 'react'
import BackGround from '../assets/background.png'
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div 
      className="aboutTop"
      style={{ backgroundImage: `url(${BackGround})` }}
></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Exchanges of cooking directions for creating certain dishes or meals, 
           sometimes accompanied by individualized advice, are known as dishcovery. 
           It's a method for people to express their love of cooking, demonstrate 
           their culinary innovation, and interact with others who have a similar 
           passion for food. A lot of individuals also physically swap recipes with 
           their family, friends, and other members of the culinary community. 
           A forum for cultural exchange, Dishcovery enables people to taste and 
           enjoy the many flavors and culinary methods from various cities and cuisines 
           in the Philippines. It is a social gathering that promotes comradery and solidarity 
           among its participants. Additionally, Dishcovery is open to everyone, not only 
           chefs and food professionals. Both experienced cooks and newcomers are welcome to 
           participate in this inclusive activity. This promotes an experimental and learning 
           environment in the kitchen. Dishcovery is an enjoyable way to discover new flavors, 
           honor culinary customs, and forge lifelong bonds with people who share a passion for food. 
           Sharing recipes enables people to spread happiness and provide priceless moments at the dinner 
           table, whether it's a treasured family dish or a modern culinary invention.</p>
      </div>
    </div>
  );
}

export default About