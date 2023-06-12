const http = require("http");
const fs = require("fs");

const PORT = 8080;

fs.readFile('./index.html', function (html) {
        http
        .createServer( function listener(req, res){
            respone.writeHeader(200, {"content-Type": "html" });
            respone.write(html);
            respone.end("nothing now");
        })
        .listen(PORT, fun ());
});
