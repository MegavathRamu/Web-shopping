// Newcollection.js
import React from 'react';
import './newcollection.css'
import { Link } from 'react-router-dom';


const Newcollection = (props) => {
  console.log(JSON.stringify(props)+" kdd")
  return (
    <div className='newcollection'>
        <Link to={`/product/${props.id}`}>
            <img src={props.image} alt="" />
        </Link>
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

export default Newcollection;
