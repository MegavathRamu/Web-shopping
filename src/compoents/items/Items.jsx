import React from 'react'
import './item.css';
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='item'>
         <Link to={''}><img src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item_prices">
            <div className="items new_price">
                {props.new_price}

            </div>
           <div className="items oldprice">
        {props.old_price}

           </div>

        </div>
      
    </div>
  )
}

export default Items
