import React from 'react';
import { Link } from 'react-router-dom';
import '../menscollection/Men.css';

const MenCollcetion = (props) => {
  console.log("Props:", props);
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
           <div className="items oldprice">
                {props.Description}
           </div>





           
           </div>

        </div>
    
  );
}

export default MenCollcetion;

