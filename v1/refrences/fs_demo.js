const fs = require("fs");
const path = require("path");

// create a path
// fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
//   if (error) throw error;
//   console.log("Folder created successfully");
// });

// create  and write a file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello world",
//   (error) => {
//     if (error) throw error;
//     console.log("File is written successfully");
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love Node jS",
//       (error) => {
//         if (error) throw error;
//         console.log("File is written successfully");
//       }
//     );
//   }
// );

// read file
fs.readFile(
  path.join(__dirname, "/test", "helloworld.txt"),
  "utf-8",
  (error, data) => {
    if (error) throw error;
    console.log(data);
  }
);

// rename the file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "helloworld.txt"),
  (error) => {
    if (error) throw error;
    console.log("File Renamed");
  }
);
