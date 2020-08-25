const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

// Used as middleware when we sign in, using client side routes
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      // try to find a user with this email
      db.User.findOne({
        where: {
          email: email,
        },
        // if no email is found, error
      }).then((dbUser) => {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect Email",
          });
          // if email is found but password is wrong, error
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Password is incorrect",
          });
        }
        // if we get through that code block, user is authenticated
        return done(null, dbUser);
      });
    }
  )
);
// limits login duration
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
