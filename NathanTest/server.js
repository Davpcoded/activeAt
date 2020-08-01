const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./user.js");
const Event = require("./event.js");



const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ActiveAT", { useNewUrlParser: true });


/* User.find(function (err, query){
console.log(query)
})

Event.find(function (err, query){
  console.log(query)
  }) */


  app.get('/user', function(req, res) {
    User.find({}, function(err, data){
      if (err) console.log(err);
      else {
          console.log(data);
          res.send(data);
          }
        });   
      });

  
  app.get('/event', function(req, res) {
    Event.find({}, function(err, data){
      if (err) console.log(err);
      else {
          console.log(data);
          res.send(data);
          }
        });   
      });
  

  app.post("/user", ({ body }, res) => {
    User.create(body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

app.post("/event", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
