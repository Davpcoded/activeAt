const router = require("express").Router();

const db = require("../models")


router.get('/user', function(req, res) {
     db.User.find({}, function(err, data){
      if (err) console.log(err);
      else {
          console.log(data);
          res.send(data);
          }
        });   
      });

  
  router.get('/event', function(req, res) {
    db.Event.find({}, function(err, data){
      if (err) console.log(err);
      else {
          console.log(data);
          res.send(data);
          }
        });   
      });
  

  router.post("/user", ({ body }, res) => {
    db.User.create(body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.post("/event", ({ body }, res) => {
  db.User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router