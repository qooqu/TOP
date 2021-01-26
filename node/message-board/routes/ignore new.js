var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    // res.send('respond with a resource');
    res.render("form", { title: "new message" });
});

router.post("/", function (req, res) {
    // res.send("POST request to the homepage");
    messages.push({
        text: req.body.message,
        user: req.body.author,
        added: new Date(),
    });
    res.redirect("/");
});

module.exports = router;
