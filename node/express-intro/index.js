const express = require("express");
const app = express();
const port = 8080;

// app.get("/", (req, res) => {
//     res.send("yo express");
// });

// app.get("/", (req, res) => {
//     res.render("./index.html");
// });

// app.use(express.static("./"));

const options = {
    extensions: ["htm", "html"],
    // fallthrough: true,
};
app.use(express.static("./", options));

// app.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send("Something broke!");
// });

app.use(function (req, res, next) {
    // res.status(404).send("Sorry can't find that!");
    res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
