const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");
const addProduct = require("../routes/addProduct");
const { title } = require("process");

const ShopRoute = express.Router();

ShopRoute.get(`/`, (req, res, next) => {
  console.log(addProduct.products);
  const products = addProduct.products;
  res.render("home", { prods: products, title: `Home Page` });
});

module.exports = ShopRoute;
