import React ,{useState} from 'react'
import './signup.css';
import axios from 'axios';

import image from '../compoents/Asserts/image.jpg';
import image000 from '../compoents/Asserts/image000.gif'



const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profession, setProfession] = useState('');

  const handleSubmit = async (e) => {
    console.log('hello');
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        
        
        username: username,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        profession:profession
      
      });
      console.log(response.data);
      console.log('raaa') // Handle response accordingly
    } catch (error) {
      console.log('Error:', error);
    }


    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Profession:', profession);
  };

  return (
    <>
      <div className="containers">
        <img src={image} alt="Background" className="background-image"/>
        <img src={image000} alt="Background" className="background-image"/>

        <form onSubmit={handleSubmit}>
          <h1>SIGNUP</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};


export default Signup;
