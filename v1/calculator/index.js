const express = require("express");
const app = express();

const port = 4000;

app.get("/", (res, req) => {});

app.listen(port, () => console.log(`App is started at ${port}`));
