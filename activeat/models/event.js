const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema({
  eventCreator: {
      type: String,
      trim: true,
  },

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
    type: Array,
    required: "Please select an event type",
  },

  eventLocation: {
    type: String,
    trim: true,
    required: "Please provide a location for your event",
  },

  eventDate: {
    type: Date,
    required: "Please select a date and time for your event",
  },

  boolean: Boolean,

  array: Array,
});

const Event = mongoose.model("Event", Event);

module.exports = Event;
