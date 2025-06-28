const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/json") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify("hi server this is a json format"));
    } else {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("hi server this is a plain text");
    }
  })
  .listen(3000);
console.log("server running on port 3000");
