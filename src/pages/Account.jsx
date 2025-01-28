import React, { useState, useEffect } from 'react';
import product_14 from '../compoents/Asserts/product_14.png' // Make sure the path is correct
import axios from 'axios';
import '../pages/Account.css';
import OIP from '../compoents/Asserts/OIP.jpeg'

const Account = () => {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/auth/profile');
        console.log("hello world");
        console.log(response.data);
        setProfileData(response.data);
      } catch (error) {
        console.log('Error fetching profile data:', error);
      }
    };

    fetchData(); // Call fetchData function when the component mounts
  }, []); // Empty dependency array to execute the effect only once

  return (
    <div className="containerrs">
      <form method="">
        <div className="row">
          <div className="col-md-4">
            <img src={OIP} alt="hero" />
          </div>
          <div className="col-md-6">
            <div className="profile_head">
              {profileData ? (
                <>
                  <h5>Username: {profileData.username}</h5>
                  <p>Email: {profileData.email}</p>
                  <p>Profession: {profileData.profession}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;