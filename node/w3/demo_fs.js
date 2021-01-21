const http = require("http");
const fs = require("fs");

// http.createServer((req, res) => {
//     fs.readFile("demofile1.html", (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

// fs.appendFile("new.txt", "yo", (err) => {
//     if (err) throw err;
//     console.log("saved");
// });

// fs.rename("new.txt", "renamed.txt", (err) => {
//     if (err) throw err;
//     console.log("renamed");
// });

fs.unlink("renamed.txt", (err) => {
    if (err) throw err;
    console.log("deleted");
});
