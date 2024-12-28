const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is Contact page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is About page</h1>");
});

app.listen(port, () => console.log(`App is Listen at port no ${port}`));
