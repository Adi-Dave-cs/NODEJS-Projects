const http = require("http");
const express = require("express");

const app = express();

const testServer = http.createServer(app);

testServer.listen(3000);

app.use("/", (req, res, next) => {
  res.send("Hello World from Express default one");
  console.log("hello from default route");
  next();
});

app.use("/one", (req, res, next) => {
  console.log("hello from route /one");
  console.log("________________________________________________");
  next();
});

app.use("/one/two", (req, res, next) => {
  console.log("hello from route /one/two");
  console.log("________________________________________________");
  next();
});

app.use("/two", (req, res, next) => {
  console.log("hello from route /two");
  console.log("________________________________________________");
  next();
});
