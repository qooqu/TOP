var express = require("express");
var router = express.Router();

let messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

router.get("/", function (req, res, next) {
    // res.render("index", { title: "Express" });
    res.render("index", {
        title: "Message Board",
        messages: messages,
        url: "new",
    });
});

router.get("/new", function (req, res, next) {
    // res.send("respond with a resource");
    res.render("form", { title: "new message" });
});

router.post("/new", function (req, res) {
    // res.send("POST request to the homepage");
    messages.push({
        text: req.body.message,
        user: req.body.author,
        added: new Date(),
    });
    res.redirect("/");
});

module.exports = router;
