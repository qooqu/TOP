// passport config

const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../model/model");

// invoked by '/signup' route
// note UserModel hashes the password
passport.use(
    "signup",
    new localStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await UserModel.create({ email, password });
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use(
    "login",
    new localStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await UserModel.findOne({ email });

                if (!user) {
                    return done(null, false, {
                        message: "User or password incorrect",
                    });
                }

                const validate = await user.isValidPassword(password);

                if (!validate) {
                    return done(null, false, {
                        message: "User or password incorrect",
                    });
                }

                return done(null, user, { message: "Logged in Successfully" });
            } catch (error) {
                return done(error);
            }
        }
    )
);

const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
    "protected",
    new JWTstrategy(
        {
            secretOrKey: process.env.SECRET,
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);
