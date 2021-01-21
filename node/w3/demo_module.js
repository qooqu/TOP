const http = require("http");
const dt = require("./myfirstmodule");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("date and time: " + dt.myDateTime());
    res.end();
}).listen(8080);
