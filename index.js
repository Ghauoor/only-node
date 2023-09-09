const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (error, content) => {
        if (error) throw error;

        res.writeHead(200, { "Content-type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/api/users") {
    const users = [
      { name: "Ghayooor", age: 200 },
      { name: "Jason", age: 100 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
    // fs.readFile(
    //   path.join(__dirname, "public", "about.html"),
    //   (error, content) => {
    //     if (error) throw error;

    //     res.writeHead(200, { "Content-type": "text/html" });
    //     res.end(content);
    //   }
    // );
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server is running on PORT", PORT));
