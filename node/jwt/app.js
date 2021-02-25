// https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("error", (error) => console.log(error));
// digital ocean had this line, but it doesn't seem to do anything
// mongoose.Promise = global.Promise;

// invoke passport config
// could do it this way, but it weirds me out
// require("./auth/auth");
const auth = require("./auth/auth");
// you'd think you'd have to do something like this, but you don't
// app.use(auth);

const routes = require("./routes/routes");
const secureRoutes = require("./routes/secure-routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use("/", routes);

// call passport middleware so only verified users can access this route.
app.use(
    "/user",
    passport.authenticate("protected", { session: false }),
    secureRoutes
);

// Handle errors.
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(3000, () => {
    console.log("Server started.");
});
