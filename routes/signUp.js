const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const rootDir = require("../helpers/path");
const passwordMatch = require("../helpers/passwordMatch");

const signUpRoute = express.Router();

signUpRoute.use(bodyParser.urlencoded({ extended: true }));
signUpRoute.get(`/signUp`, (req, res, next) => {
  res.render("signUp");
});

signUpRoute.post("/confirmedSignUp", (req, res) => {
  console.log(req.body);
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  passwordMatch(password, confirmPassword);
});

module.exports = signUpRoute;
