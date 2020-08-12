const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require ("bcryptjs");

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password

passport.use(
  new LocalStrategy(
    // {usernameField:"email"},
    (username, password, done) => {
      console.log("email", username);
      db.User.findOne({
        email: username
      }, (err, user) => {
        if (err) throw err;
        if (!user) return done (null, false,{message:"incorrect email"});

        bcrypt.compare(password, user.password, (err,result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done (null, false,{message:"incorrect password"});
          }
        })
      })
    }
  )
)
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  console.log("serialize user", user);
  cb(null, user.id);
})

passport.deserializeUser((id, cb) => {
  db.User.findOne({_id: id}, (err, user) => {
  console.log("deserialize user", user);
  cb(err, obj);
})
})

// Exporting our configured passport
module.exports = passport;
