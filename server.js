const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");

const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ActiveAT", {
  useNewUrlParser: true,
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(cookieParser());
app.use(session({
  resave: true,
  secret:"secretcode",
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const apiRoutes = require("./routes/api.js");

app.use("/api", apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
