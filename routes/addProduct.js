const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const rootDir = require("../helpers/path");

const addProduct = express.Router();
const products = [];

addProduct.use(bodyParser.urlencoded({ extended: true }));

addProduct.get(`/add-product`, (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
});

addProduct.post("/added-products", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
  products.push({ Title: req.body.productName });
  res.redirect("/");
});
// module.exports = adminRoute;

exports.addProduct = addProduct;
exports.products = products;
