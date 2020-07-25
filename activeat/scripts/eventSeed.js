const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Events"
);

const eventSeed = [
  {
    eventCreator: "John Smith",
    eventName: "Ultimate Baking",
    eventDescription: "Bake Pie or Die!",
    eventType: [],
    eventLocation: "555 My Steet",
    eventDate: new Date(Date.now()),
  },
];

db.User
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
