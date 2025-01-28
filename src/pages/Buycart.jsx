import React, { useState } from 'react';
import pickup from '../compoents/Asserts/pickup.jpg';

import '../pages/Buycarts.css';

const Buycart = () => {
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [item, setItem] = useState('');
  const [deliveryBill, setDeliveryBill] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const handleAddAddressClick = () => {
    setShowAddAddressForm(true);
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleDeliveryBillChange = (e) => {
    setDeliveryBill(e.target.value);
  };

  const handleTotalPriceChange = (e) => {
    setTotalPrice(e.target.value);
  };

  return (
    

    <div className="container">
     
      

      
      <div className="buyone">
        <h2>1. Select a Delivery Address</h2>
        <div className="address">
          <input type="text" placeholder='Your address' />
          <input type="text" placeholder='Add Address' />
          {!showAddAddressForm && (
            <button onClick={handleAddAddressClick}>+ Add Address</button>
          )}
        </div>
        {showAddAddressForm && (
          <div className="add-address-form">
            <h2>Add New Address</h2>
            <form>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label>Pin Code:</label>
                <input type="text" placeholder="Pin Code" />
              </div>
              <div className="form-group">
                <label>Town:</label>
                <input type="text" placeholder="Town" />
              </div>
              <div className="form-group">
                <label>State:</label>
                <input type="text" placeholder="State" />
              </div>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowAddAddressForm(false)}>Cancel</button>
            </form>
          </div>
        )}
        <div className="location">
          <img src={pickup} alt="Pickup" />
          <p>Your Pick Up Location</p>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
            + find a pick up location
          </a>
        </div>
      </div>
</div>
  );
}

export default Buycart;
