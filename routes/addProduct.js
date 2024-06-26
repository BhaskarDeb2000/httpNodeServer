const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const rootDir = require("../helpers/path");

const addProduct = express.Router();

addProduct.use(bodyParser.urlencoded({ extended: true }));

addProduct.get(`/add-product`, (req, res, next) => {
  res.render("addProduct", { title: "Add Product", path: "/add-Product" });
});

addProduct.post("/added-products", (req, res, next) => {
  res.redirect("/");
});
module.exports = addProduct;
