const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  firstName: {
    type: String,
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
  },

  username: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  password: {
    type: String,
    required: true,
  },
  
  phone: {
    type: String,
    unique: true,
    required: true,
  },

  zipCode: {
    type: String,
    required: true,
    validate: [({ length }) => length === 5, "Zip Code should be 5 digits."],
  },

  boolean: Boolean,

  array: Array,
});

const User = mongoose.model("User", user);

module.exports = User;
