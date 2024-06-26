const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const rootDir = require("../helpers/path");

const adminRoute = express.Router();

adminRoute.use(bodyParser.urlencoded({ extended: true }));

adminRoute.post("/added-products", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "adminForm.html"));
  res.redirect("/cart");
});

module.exports = adminRoute;
