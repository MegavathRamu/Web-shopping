import React from 'react';
import Account from './Account';
import product_14 from '../compoents/Asserts/product_14.png'

const ProfilePage = () => {
  const profileData = {
    username: 'Vinod Thapa',
    email: 'vinod@example.com',
    profession: 'Web Developer',
    imageSrc: product_14,
   
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <Account {...profileData} />
    </div>
  );
};

export default ProfilePage;
