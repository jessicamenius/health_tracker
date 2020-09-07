const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

passport.use(
  new LocalStrategy(
    {
      userNameField: "email",
    },
    (email, password, done) => {
      db.User.findOne({
        where: {
          email: email,
        },
      }).then((dbUser) => {
        if (!dbUser) {
          return done(null, false, {
            message: "incorrect email",
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "incorrect password",
          });
        }
        return done(null, dbUser);
      });
    }
  )
);

passport.serializeUser((user, cb) => [cb(null, user)]);

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
