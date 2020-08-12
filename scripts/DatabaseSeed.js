const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ActiveAT");

const eventSeed = [
  {
    eventCreator: "Darryl Williams",
    eventName: "Basketball",
    eventDescription: "Let's play basketball",
    eventType: [],
    eventLocation: "555 My Steet",
    eventDate: new Date(Date.now()),
  },
  {
    eventCreator: "Nathan Bowdish",
    eventName: "Bowling",
    eventDescription: "Let's play bowling",
    eventType: [],
    eventLocation: "555 My Steet",
    eventDate: new Date(Date.now()),
  },
  {
    eventCreator: "Daniel Villarroel",
    eventName: "Hicking",
    eventDescription: "Let's go hicking",
    eventType: [],
    eventLocation: "555 My Steet",
    eventDate: new Date(Date.now()),
  },
  {
    eventCreator: "Sveta Demkovich",
    eventName: "Volleyball",
    eventDescription: "Let's play volleyball",
    eventType: [],
    eventLocation: "555 My Steet",
    eventDate: new Date(Date.now()),
  },
];

const userSeed = [
  {
    username: "John Smith",
    password: 12345,
    email: "john@john.com",
    phone: 555555555,
    description: "This is a test",
    zipCode: 12345,
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
