const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");

const cartRoute = express.Router();

cartRoute.get(`/cart`, (req, res, next) => {
  res.render("cart");
});

module.exports = cartRoute;
