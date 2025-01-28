const express = require("express");
const Product = require("../models/Product");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const queryParams = req.query;

  const filter = JSON.parse(decodeURIComponent(queryParams.filter));

  const { categories, tags, take, skip, name } = filter;

  let query = {
    name: { $regex: new RegExp(name, "i") },
  };

  if (categories && categories.length > 0) {
    query.categories = { $in: categories };
  }

  if (tags && tags.length > 0) {
    query.tags = { $in: tags };
  }

  const products = await Product.find(query)
    .sort({
      createdAt: 1,
    })
    .limit(take)
    .skip(skip);


  res.json(products);
});

productRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  const product = await Product.findById(id);

  res.json(product);
});

productRouter.post("/", async (req, res) => {
  const body = req.body;

  const { name, price, description, image, categories, tags, countInStock } =
    body;

    const product = await Product.create({
      name: name,
      price: price,
      description: description,
      image: image,
      categories: categories,
      tags: tags,
      countInStock: countInStock
    });

  await product.save();

  res.json(product);
});

module.exports = productRouter;
