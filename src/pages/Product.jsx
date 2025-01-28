// // Import React and other necessary modules
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Breadcum from "../compoents/breadcum/Breadcum.jsx";
// import Mens_product from "../compoents/Asserts/Mens_product.js";
// import smallkids from "../compoents/Asserts/smallkids.js";
// import Womenss from "../compoents/Asserts/Womenss.js";
// import "../pages/Product.css";
// // import Womensproducts from "../compoents/Women/Womensproducts.jsx";

// const Product = ({ setCartCount }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});

  
//   const data = Mens_product;
//   const data1=smallkids;
//   console.log(data1);
  
//   // console.log(data2);
//   const productNo = parseInt(productId);
//   const productNo1=parseInt(productId);
//   console.log(productNo1,'hhdkejyeihfck');
//   useEffect(()=>{
//   setProduct(data[productNo-13])
//   },[])

  

//   return (
//     <div>
//       <Breadcum product={product} />
//       <div>
//         {
//           product && (
//             <div>
//               <h2>{product.name}</h2>
//               <img src={product.image} alt={product.name} />
//               <p>Price: {product.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           )
//         }
//       </div>
//     </div>
//   );
// };


// export default Product;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Breadcum from "../compoents/breadcum/Breadcum.jsx";
// import Mens_product from "../compoents/Asserts/Mens_product.js";
// import smallkids from "../compoents/Asserts/smallkids.js";
// import Womenss from "../compoents/Asserts/Womenss.js";
// import "../pages/Product.css";
// import { Link } from "react-router-dom";

// const Product = ({ setCartCount }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});
//   const [category, setCategory] = useState("");

//   const data = Mens_product;
//   const data1 = smallkids;
//   const data2= Womenss;

//   const productNo = parseInt(productId);
//   const productNo1 = parseInt(productId);
//   const productNo2 = parseInt(productId);

//   useEffect(() => {
//     if (productNo >= 13 && productNo <= 25) {
//       setCategory("men");
//       setProduct(data[productNo - 13]);
//     } else if (productNo1 >= 25) {
//       setCategory("kids");
//       setProduct(data1[productNo1 - 25]);
//     }
//     else if (productNo2 >= 1) {
//       setCategory("womens");
//       setProduct(data2[productNo2 - 1]);
//     }

//   }, [productId, data, data1, productNo, productNo1,productNo2]);

//   return (
//     <div className="product-container">
//       <Breadcum product={product} />
//       <div className="product-details">
//         {product && (
//           <>
//           <div className="image-container">
//             <h2>{product.name}</h2>
//             <img src={product.image} alt={product.name} className="big-image" />
//             <div className="small-images-container">
//             <img src={product.image} alt={product.name} className="small-image"/>
//             <img src={product.image} alt={product.name} className="small-image" />
//             <img src={product.image} alt={product.name}  className="small-image"/>
//             </div>
//             </div>
//             <div className="product-info-container">
//              <div className="product-info">
//             <p>Price: {product.new_price}</p>
//             <p>Old Price: {product.old_price}</p>
//             {/* <p>price: {product.price} </p>
//           console.log(price); */}
//           <h2>Rating:{product.Rating}</h2>
          
//           </div>
//            <div className="button-container">
//             <button>Add to Cart</button>
//             <Link to="/Buycart">Buycart</Link>
//             </div>
//             </div>
//             </>
           
         
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;






import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcum from "../compoents/breadcum/Breadcum.jsx";
import Mens_product from "../compoents/Asserts/Mens_product.js";
import smallkids from "../compoents/Asserts/smallkids.js";
import Womenss from "../compoents/Asserts/Womenss.js";
import "../pages/Product.css";
import { Link } from "react-router-dom";

const Product = ({ setcartCount }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const data = Mens_product;
  const data1 = smallkids;
  const data2 = Womenss;

  const productNo = parseInt(productId);

  useEffect(() => {
    let productData;
    let categoryType;

    if (productNo >= 13 && productNo <= 25) {
      categoryType = "men";
      productData = data[productNo - 13];
    } else if (productNo >= 25) {
      categoryType = "kids";
      productData = data1[productNo - 25];
    } else if (productNo >= 1) {
      categoryType = "womens";
      productData = data2[productNo - 1];
    }

    setCategory(categoryType);
    setProduct(productData);
    setLoading(false);
  }, [productId, data, data1, data2, productNo]);

  async function addToCart (product){
   console.log(" i was clickd")
    const dummydata = product
    const response = await fetch("http://localhost:4000/cart",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(dummydata)
    })
    const data = await response.json();

    // console.log(data)
    console.log('hhhh');
    // You need to implement the functionality to add the product to the cart here
    // For now, let's just update the cart count
    // setcartCount((prevCount) => prevCount + 1);
    setcartCount((prevCart) => [
      ...prevCart,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    ]);
  };

  return (
    <div className="product-container">
      <Breadcum product={product}  className="hello"/>
      <div className="product-details">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="image-container">
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} className="big-image" />
              <div className="small-images-container">
                <img src={product.image} alt={product.name} className="small-image" />
                <img src={product.image} alt={product.name} className="small-image" />
                <img src={product.image} alt={product.name} className="small-image" />
              </div>
            </div>
            <div className="product-info-container">
              <div className="product-info">
                <p>Price: {product.new_price}</p>
                <p>Old Price: {product.old_price}</p>
                <h2>Rating: {product.Rating}</h2>
              </div>
              <div className="button-container">
                <button onClick={(event)=>{
                    event.preventDefault()
                    addToCart(
                      product
                    );
                }}>Add to Cart</button>
                <Link to="/Buycart">View Cart</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
