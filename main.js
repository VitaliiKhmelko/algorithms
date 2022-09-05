const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  fs.readFile(__dirname + (req.url === "/" ? "/index.html" : req.url))
    .then((contents) => {
      if (req.url.indexOf(".css") > -1) {
        res.setHeader("Content-Type", "text/css");
      } else {
        res.setHeader("Content-Type", "text/html");
      }
      res.writeHead(200);
      res.end(contents);
    })
    .catch(() => {});
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
