const http = require("http");
const fs = require("fs");
const url = require('url');

const port = 2122;
const server = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} new req received\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt",log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("home-page");
        break;
      case "/about":
        res.end("about-page");
        break;
        case '/search':
          const search = myUrl.query.search_query;
          res.end('here are your results for ' + search);
      default:
        res.end(JSON.stringify({ msg: 'req not found' }));
    }
  });
});

server.listen(port, () =>{
    console.log(`Server successfully started at ${port}`)
})
