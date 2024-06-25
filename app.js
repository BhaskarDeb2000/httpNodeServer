const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const admin = require("./routes/addProduct");
const adminForm = require("./routes/adminForm");
const shop = require("./routes/home");
const errPage = require("./routes/404Page");
const path = require("path");
const cartRoute = require("./routes/cart");
const signUpRoute = require("./routes/signUp");

const port = 3000;

app.use(express.static(path.join("./publicViews")));
app.use(express.static(path.join("./", "publicViews")));

app.use(cartRoute);
app.use(adminForm);
app.use(admin);
app.use(signUpRoute);
app.use(shop);
app.use(errPage);

server.listen(port);

console.log(`server is listening: http://localhost:${port}/`);
