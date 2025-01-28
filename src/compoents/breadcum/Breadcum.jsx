import React from 'react'
import arrow from '../Asserts/arrow.png';
import '../breadcum/Bread.css'


const Breadcum = (props) => {
    const {product}=props;
    console.log(product)
  return (
    <div className='breadcum'>
    
            {product.Description}
    </div>
  )
}

export default Breadcum
