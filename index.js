const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (error, content) => {
  //       if (error) throw error;
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Ghayooor", age: 200 },
  //     { name: "Jason", age: 100 },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  //   // fs.readFile(
  //   //   path.join(__dirname, "public", "about.html"),
  //   //   (error, content) => {
  //   //     if (error) throw error;
  //   //     res.writeHead(200, { "Content-type": "text/html" });
  //   //     res.end(content);
  //   //   }
  //   // );
  // }

  //? Build File Path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //? Extension of the file
  let extName = path.extname(filePath);

  //? Initial content type
  let contentType = "text/html";

  //? Check the extension
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // read file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == "ENOENT") {
        //? page not found

        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //! Some server error
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    } else {
      //* Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server is running on PORT", PORT));
