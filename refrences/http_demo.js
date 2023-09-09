const http = require("http");

// create a server object
http
  .createServer((req, res) => {
    //write res
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => console.log("server is running"));
