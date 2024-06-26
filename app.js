const http = require("http");
const express = require("express");

const app = express();
app.set("view engine", "pug"); //compiles dynamic templates with the pug engine
app.set("views", "views"); //directory to find the templates

const server = http.createServer(app);

const shop = require("./routes/home");
const errPage = require("./routes/404Page");
const path = require("path");
const cartRoute = require("./routes/cart");
const signUpRoute = require("./routes/signUp");
const productList = require("./routes/products");
const addProduct = require("./routes/addProduct");

const port = 3000;

app.use(express.static(path.join("./publicViews")));
app.use(express.static(path.join("./", "publicViews")));

app.use(addProduct);
app.use(cartRoute);
app.use(productList);
app.use(signUpRoute);
app.use(shop);
app.use(errPage);
server.listen(port);

console.log(`server is listening: http://localhost:${port}/`);
