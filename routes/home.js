const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");

const ShopRoute = express.Router();
const adminRoute = require("./adminForm");

ShopRoute.get(`/`, (req, res, next) => {
  console.log(adminRoute.products);
  res.sendFile(path.join(rootDir, `views`, "home.html")); //builds a path automatically based on Operating system
});

module.exports = ShopRoute;
