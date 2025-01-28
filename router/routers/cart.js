const express = require("express");
const Cart = require("../models/carrt");
const ramus = require('../models/userschema')
const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  const cart = await Cart.findOne({}).populate("cartItems.product");
  res.json(cart);
});

cartRouter.put("/", async (req, res) => {
  const body = req.body;
  const { cartItems } = body;

  // console.log(cartItems);

  const cart = await Cart.insertMany(cartItems)

  res.json(cart);
});

cartRouter.post("/",async (req,res)=>{
  const body = req.body ;
  console.log(body)
    // handle the upcoming data 

  
})
module.exports = cartRouter;