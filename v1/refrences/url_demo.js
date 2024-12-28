const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialaized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host or root domain

console.log(myUrl.host);

// host name --> host name  doesn't have the port
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append("ABC", 123);

console.log(myUrl.searchParams);

// Loops through params
myUrl.searchParams.forEach((val, name) => {
  console.log(`${name}: ${val}`);
});
