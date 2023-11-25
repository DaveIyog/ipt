import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import FacebookIcon from '@mui/icons-material/Facebook'; 
import '../styles/Footer.css';
function Footer() {
  return (
    <div className="footer">
       <div className= "socialMedia"> </div>"
       <InstagramIcon /><TwitterIcon /> <FacebookIcon /> 
       <p> &copy; 2023 Dischovery.com</p>
    </div>
 );  
}

export default Footer;