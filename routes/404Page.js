const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");

const errRoute = express.Router();

errRoute.use((req, res, next) => {
  res.status(404).render("404Page", { title: "404 Not found" });
});

module.exports = errRoute;
