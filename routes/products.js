const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");
const products = require("../routes/products");

const productList = express.Router();

productList.get(`/products`, (req, res, next) => {
  res.render("products", { title: `Product List` });
});

module.exports = productList;
