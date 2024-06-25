const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");

const cartRoute = express.Router();

cartRoute.get(`/cart`, (req, res, next) => {
  res.sendFile(path.join(rootDir, `views`, "cart.html")); //builds a path automatically based on Operating system
});

module.exports = cartRoute;
