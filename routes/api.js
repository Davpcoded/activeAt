const router = require("express").Router();
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const db = require("../models");

router.get("/user/:username", function (req, res) {
  db.User.findOne({username: req.params.username}, function (err, data) {
    if (err) console.log(err);
    else {
      console.log(data);
      console.log("Req", req)
      res.send(data);
    }
  });
});

// router.get("/signup", function (req, res) {
//   db.User.find({}, function (err, data) {
//     if (err) console.log(err);
//     else {
//       console.log(data);
//       res.send(data);
//     }
//   });
// });

router.get("/login", function (req, res) {
  db.User.find({}, function (err, data) {
    if (err) console.log(err);
    else {
      console.log(data);
      res.send(data);
    }
  });
});
router.get("/event", function (req, res) {
  db.Event.find({}, function (err, data) {
    if (err) console.log(err);
    else {
      console.log(data);
      res.send(data);
    }
  });
});

router.post("/user", ({ body }, res) => {
  db.User.create(body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err)
      res.json(err);
    });
});

router.post("/event", ({ body }, res) => {
  db.Event.create(body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
router.post("/login", passport.authenticate("local"),
 (req, res) => {
   res.json({
     firstName:req.user.firstName,
     lastName : req.user.lastName,
     id: req.user._id,
   })
  // passport.authenticate("local"), (err, user) => {
  //   if (err) throw err;
  //   console.log("error", err);
  //   if (!user) res.send("No user Exist");
  //   else {
  //     req.logIn(user, (err) => {
  //       if (err) throw err;
  //       console.log(err);
  //       res.json(user);
  //       console.log(req.user);
  //       console.log(req.info);
  //     });
  //   }
  // })(req, res, next);
});

router.post("/signup", (req, res) => {
  db.User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    console.log(err);
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new db.User({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        zipCode: req.body.zipCode,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

module.exports = router;
