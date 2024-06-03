import React from 'react'
import '../styles/Footer.css';
import Instagram from "../assets/instagram.jpg";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";

import Linkedin from "../assets/linkedin.webp";

const Footer = () => {
  return (
    
    <div className="footer">
    <div className="footer-overlay"></div>
    <div className="footer-content">
      <h2 className="h2-head">Join our growing<br/> community of <br/>35,000+ alumni</h2>
 
      <button className="apply-button">Apply Now</button>
    <div className='footer-buttons'>
    <img src={Instagram} className='clipped-image'/>
    <img src={Facebook} className='clipped-image'/>
    <img src={Linkedin} className='clipped-image'/>
    <img src={Twitter} className='clipped-image'/>



    </div>
    </div>
  </div>
  )
}

export default Footer