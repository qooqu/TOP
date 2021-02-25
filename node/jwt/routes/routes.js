const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", (req, res) => res.send("this is an api"));

// from passportjs docs:
// "If authentication succeeds, ... the req.user property will be set to the authenticated user."
router.post(
    "/signup",
    passport.authenticate("signup", { session: false }),
    async (req, res, next) => {
        res.json({
            message: "Signup successful",
            user: req.user._id,
        });
    }
);

// this is digital oceans's login route
// they use a custom callback (see passportjs docs)
// seems unnecessarily complicated to me. simpler version below
// router.post("/login", async (req, res, next) => {
//     passport.authenticate("login", async (err, user, info) => {
//         try {
//             if (err || !user) {
//                 const error = new Error("An error occurred.");

//                 return next(error);
//             }

//             req.login(user, { session: false }, async (error) => {
//                 if (error) return next(error);

//                 const body = { _id: user._id };
//                 const token = jwt.sign({ user: body }, process.env.SECRET, {
//                     expiresIn: "30m",
//                 });

//                 return res.json({ token });
//             });
//         } catch (error) {
//             return next(error);
//         }
//     })(req, res, next);
// });

// simpler login route
// from passportjs docs:
// "If authentication succeeds, ... the req.user property will be set to the authenticated user."
//
router.post(
    "/login",
    passport.authenticate("login", { session: false }),
    async (req, res, next) => {
        const body = { _id: req.user._id };
        const token = jwt.sign({ user: body }, process.env.SECRET, {
            expiresIn: "30m",
        });

        res.json({ token });
    }
);

// DOESN'T WORK WITH JWT ... only with cookies / sessions
// router.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });

module.exports = router;
