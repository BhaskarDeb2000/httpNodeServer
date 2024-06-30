const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");

const ShopRoute = express.Router();

ShopRoute.get(`/`, (req, res, next) => {
  res.render("home", { title: `Home Page` });
});

module.exports = ShopRoute;
