const http = require("http");

// create a server object
http
  .createServer((req, res) => {
    //write res
    console.log(req.url);
    if (req.url === "/cars") {
      res.write("This is Cars route");
    } else if (req.url === "/truck") {
      res.write("This is Trucks");
    } else {
      res.write("Hello from server");
    }
    res.end();
  })
  .listen(5000, () => console.log("server is running"));
