/////// app.js

const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const mongoDb = process.env.MONGODB_URI;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const User = mongoose.model(
    "User",
    new Schema({
        username: { type: String, required: true },
        password: { type: String, required: true },
    })
);

const app = express();
app.set("views", __dirname);
app.set("view engine", "ejs");

const sessionSecret = process.env.SECRET;
app.use(
    session({
        secret: sessionSecret,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

passport.use(
    new LocalStrategy((username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            }
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    // passwords match! log user in
                    return done(null, user);
                } else {
                    // passwords do not match!
                    return done(null, false, { message: "Incorrect password" });
                }
            });
        });
    })
);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// `locals` is available to everything, including views.
// by sticking req.user onto locals, we don't need to pass it individually to every view. See app.get("/".
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

// if we didn't have `currentUser = req.user` on res.locals, we'd have to pass it like this
// app.get("/", (req, res) => {
//     res.render("index", { currentUser: req.user });
// });
// but we do have it, so it goes automatically
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/sign-up", (req, res) => res.render("sign-up-form"));

// app.post("/sign-up" ... simple version
// - stores password in plain text
// - missing validation and sanitisation of form input
// app.post("/sign-up", (req, res, next) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password,
//     }).save((err) => {
//         if (err) {
//             return next(err);
//         }
//         res.redirect("/");
//     });
// });

// app.post("/sign-up" ... better version
// - encrypts password
// - still missing validation and sanitisation of form input
app.post("/sign-up", (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            return next(err);
        }
        const user = new User({
            username: req.body.username,
            password: hashedPassword,
        }).save((err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        });
    });
});

// when the log-in form is submitted, it sends a POST request
// the body of the request includes the username and password
// passportjs uses the local strategy to check the credentials against the db
// if the credentials are valid, it will set the user on req.user
// it will use the cookie to keep track of the auth status
app.post(
    "/log-in",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
    })
);

// when the log out GET request comes in, passportjs removes the value from req.user
app.get("/log-out", (req, res) => {
    req.logout();
    res.redirect("/");
});

// the protected route checks for a value on req.user and decides what to do
app.get("/protected", (req, res, next) => {
    if (req.user) {
        res.json({
            message: "you got the protected route. look at you",
        });
    } else {
        res.json({
            message: "woah woah woah woah",
        });
    }
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);

// app.listen(3000, () => console.log("app listening on port 3000!"));
