// import React from 'react';
// import { Link } from 'react-router-dom';


// const Cart = ({cartCount} ) => {

//   cartCount=cartCount+1;
  
  
//   return (
//     <div>
   
//       <h2>Cart</h2>
//       <p>{cartCount.length} items added</p>
//       <div className="description">
//         <div className="form">
//         {cartCount.map((item, index) => (
//             <div key={index}>
//               <p>Name: {item.name}</p>
//               <p>Price: {item.price}</p>
//               {/* Add any other details you want to display */}
//             </div>
//           ))}

//           <p>

//           </p>
//           <p>Free delivery on saturday and sunday</p>
          
//         </div>

//       </div>
      
      
//     </div>
//   );
// }

// export default Cart;
import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Cart.css'

const Cart = ({ cartCount }) => {
  console.log("hhajjqbsknx ");
  return (
    <div className="cart-container" >
      <h1>Cart</h1>
      <p>{cartCount.length} items added</p>
      <div className="description">
        
        <div className="form">
         
          {cartCount.map((item, index) => (
            
            
            
            <div key={index} className="cart-item">

             
              <p>name: {item.name}</p>
              {typeof item.price === 'number' ? (
                <p>price: ${item.price.toFixed(2)}</p>
              ) : (
                <p>price: N/A</p>
              )}
              

              {/* { <p>price: {item.new_price}</p> } */}
              <div className="image-container">
              <img src={item.image} alt={item.name}  className="product-image"/>
              </div>
              {/* Add any other details you want to display */}
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default Cart;
