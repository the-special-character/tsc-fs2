// const os = require("os")

// console.log(os.freemem());
// console.log(os.totalmem());

// const http = require("http");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send("hello from /");
});

app.put("/:abc", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  console.log(req.params);
  res.send("hello from Yash/");
});

app.listen("3004", "127.0.0.1", () => {
  console.log("server started");
});
