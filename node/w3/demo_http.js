const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("yo");
    // res.write(req.url); // http://localhost:8080/summer returns '/summer'
    let q = url.parse(req.url, true).query;
    let txt = `${q.year} ${q.month}`;
    res.write(txt); // http://localhost:8080/?year=2017&month=July returns '2017 July'
    res.end();
}).listen(8080);
