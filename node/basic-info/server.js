const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    let path = q.pathname;
    path = path.replace("/", "");
    path = path.replace(".html", "");
    path = path.replace(".htm", "");
    path = path === "" ? "index" : path;
    const filename = "./" + path + ".html";

    const data404 = fs.readFileSync("./404.html", (err, data) => {
        if (err) {
            console.log(err);
        }
        return data;
    });

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data404);
            return res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
}).listen(8080);
