const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const rootDir = require("../helpers/path");

const adminRoute = express.Router();

adminRoute.use(bodyParser.urlencoded({ extended: true }));

adminRoute.get(`/add-product`, (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
});
module.exports = adminRoute;
