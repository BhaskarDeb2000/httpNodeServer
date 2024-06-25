const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");

const errRoute = express.Router();

errRoute.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404Page.html"));
});

module.exports = errRoute;
