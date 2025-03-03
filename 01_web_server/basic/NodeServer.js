const http = require("http");

const hostName = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!\n");
  } else {
    res.statusCode = 404;
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// starts a simple http server locally on port 3000
server.listen(port, hostName, () => {
  console.log(`Server is listening on http://${hostName}:${port}`);
});
