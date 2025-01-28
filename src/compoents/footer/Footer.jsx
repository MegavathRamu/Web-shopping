import React from 'react';
import logo_big from '../Asserts/logo_big.png';
import instagram_icon from '../Asserts/instagram_icon.png';
import pintester_icon from '../Asserts/pintester_icon.png';
import whatsapp_icon from '../Asserts/whatsapp_icon.png';
import GoogleEmblem from '../Asserts/GoogleEmblem.jpg';
import Twitte from '../Asserts/Twitte.webp';
import globe from '../Asserts/globe.jpg';
import './Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="pannel2">
        <ul>
          <p >Get to Know Us</p>
          <a >Careers</a>
          <a >Blog</a>
          <a >About Amazon</a>
          <a >Investor Relations</a>
          <a >Amazon Devices</a>
          <a >Amazon Science</a>
        </ul>
        
        <ul>
          <p >Get to Know Us</p>
          <a >Careers</a>
          <a >Blog</a>
          <a >About Amazon</a>
          <a >Investor Relations</a>
          <a >Amazon Devices</a>
          <a>Amazon Science</a>
        </ul>
      </div>
      <div className="innerContainer">
        <div className="section">
          <img src={logo_big} alt="" />
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="section">
          <h2>Follow Us</h2>
          <div className="socialIcons">
            <a href="#" target="_blank" rel="noopener noreferrer" >
              <img src={globe} alt="" />
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Twitte} alt="" />
              Twitter
            </a>
          </div>
        </div>

        <div className="section">
          <h2>© 2022 Your Company</h2>
          <p>All rights reserved.</p>
        </div>
      </div>

      <div className='instagram_icon iconStyle'>
        <img src={instagram_icon} alt="" />
      </div>

      <div className='pinstar_icon iconStyle'>
        <img src={pintester_icon} alt="" />
      </div>

      <div className='whatsapp_icon iconStyle'>
        <img src={whatsapp_icon} alt="" />
      </div>
      
      <div className="google">
        <img src={GoogleEmblem} alt="google logo" />
        <a href="https://www.google.com/maps" target="_blank" >
          View on Google Maps
        </a>
      </div>
    </footer>
  );
};

export default Footer;
