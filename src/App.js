// App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./compoents/Navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Shopcategory from "./pages/Shopcategory";
import Loginsignup from "./pages/Loginsignup";
import Cart from "./pages/Cart";
import Footer from "./compoents/footer/Footer"; 
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Buycart from "./pages/Buycart";

function App() {
  const [cartCount, setcartCount] = useState([]);
  const addToCart = (product) => {
    // setcartCount([cartCount, product]);
    setcartCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Shopcategory category="men" />} />
          <Route path="/womens" element={<Shopcategory category="womens" />} />
          <Route path="/kids" element={<Shopcategory category="kids" />} />

          <Route path="/product" element={<Product  setcartCount={setcartCount}/>}>
            <Route
              path=":productId"
              element={<Product  setcartCount={setcartCount}/>}
            />
          </Route>

          <Route path="/cart" element={<Cart cartCount={cartCount} />} />
          <Route path="/login" element={<Loginsignup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Buycart" element={<Buycart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
