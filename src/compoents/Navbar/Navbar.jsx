import React, { useState } from 'react';
import './navbar.css';
import logo from '../Asserts/logo.png';
import cart_icon from '../Asserts/cart_icon.png';
import login from '../Asserts/login.jpg';
import account from '../Asserts/account.png';
import { Link } from 'react-router-dom';
import Rs from '../Asserts/Rs.png'


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <img src={logo} alt="" />
        <p>Shoppers</p>
      </div>
      <ul className="nav_menu">
        <li onClick={() => { setMenu("shop") }} style={{ marginRight: "50px",  marginLeft:"50px"}}><Link to="/" className={menu === "shop" ? "active" : ""}>store</Link></li>
        <li onClick={() => { setMenu("men") }} style={{ marginRight: "50px",  marginLeft:"50px"}}><Link to="/men" className={menu === "men" ? "active" : ""}>pc</Link></li>
        <li onClick={() => { setMenu("womens") }} style={{ marginRight: "50px",  marginLeft:"50px"}}><Link to="/womens" className={menu === "womens" ? "active" : ""}>console</Link></li>
        <li onClick={() => { setMenu("kids") }} style={{ marginRight: "50px",  marginLeft:"50px"}}><Link to="/kids" className={menu === "kids" ? "active" : ""}>services</Link></li>
        <li onClick={() => { setMenu("cart") }} style={{ marginRight: "50px",  marginLeft:"50px"}}><Link to="/cart" className={menu === "kids" ? "active" : ""}>cart</Link></li>
        
         
      </ul>
      <div className='nav_menu_logo'>
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <img src={Rs} alt="" />
          {showDropdown && (
            <div className="dropdown-content">
               
              
              <Link to="/login"><img src={login} alt="" />Login</Link>
             <Link to="/account"><img src={account} alt="" />Account</Link>
              
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
