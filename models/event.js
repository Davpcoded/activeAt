const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const event = new Schema({
  // eventCreator: {
  //     type: String,
  //     trim: true,
  // },

  eventName: {
    type: String,
    trim: true,
    required: "Event Name is Required",
  },

  eventDescription: {
    type: String,
    trim: true,
    required: "Description of event is required",
  },

  eventType: {
    type: String,
    required: "Please select an event type",
  },

  markerPosition: [
    {
      lng: "",
      lat: "",
      address: "",
    },
  ],

  eventDate: {
    type: String,
    required: "Please select a date and time for your event",
  },

  phoneNumber: {
    type: String,
    required: "Please add contact info for your event",
  },

  boolean: Boolean,

  array: Array,
});

const Event = mongoose.model("Event", event);

module.exports = Event;
