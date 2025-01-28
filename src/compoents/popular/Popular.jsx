// Popular.js

import React from 'react';
import './Popular.css';
import data_product from '../Asserts/data';
import Items from '../items/Items';

const Popular = () => {
  return (
    <div className='popular'>
        <h1 className="mens-product">POPULAR LAPTOP !! </h1>
        <hr />
        <div className="popular_items">
            {data_product.map((item, i) => {
              console.log("Item:", item);
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  );
}

export default Popular;
