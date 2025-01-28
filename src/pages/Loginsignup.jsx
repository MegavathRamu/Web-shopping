import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../pages/Login.css';
import R from '../compoents/Asserts/R.gif';


const Loginsignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        email:email,
        password:password
      });
      console.log(response.data);
      console.log("helllooooo")
      localStorage.setItem('token', response.data.token); 
    } catch (error) {
      console.log('Error in login:', error);
    }
  };

  return (
    <div className="background">
      <img src={R} alt="Background" className="background-image" />
      <div className='login_signup'>
        <div className="loginsignup_container">
          <h1>Login_up</h1>
          <div className="login_fields">
            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleSubmit}>Continue</button>
          <p className='loginsinup_login'>Already have an account? </p>
          <div className="loginsignup_agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the security & policy</p>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
