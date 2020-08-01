const express = require("express");
//const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

//const User = require("./models/user");
//const Event = require("./models/event");

const app = express();

// Define middleware here
//app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ActiveAt", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// Define API routes here
/* app.get("/user", function (req, res) {
  User.find({}, function (err, data) {
    if (err) console.log(err);
    else {
      console.log(data);
      res.send(data);
    }
  });
});

app.get("/event", function (req, res) {
  Event.find({}, function (err, data) {
    if (err) console.log(err);
    else {
      console.log(data);
      res.send(data);
    }
  });
});

app.post("/user", ({ body }, res) => {
  User.create(body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/event", ({ body }, res) => {
  User.create(body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
*/
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
