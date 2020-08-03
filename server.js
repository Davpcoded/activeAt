const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser')

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ActiveAT", { useNewUrlParser: true });

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000", // <== Location of the app we are connecting to
  credentials: true,
}));


app.user(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true,
}));

app.use(cookieParser("secretcode"))


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Define API routes here
const apiRoutes = require("./routes/api.js");

app.use("/api", apiRoutes)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
