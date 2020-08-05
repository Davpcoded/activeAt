const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  name: { type: String },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
  },

  password: {
    type: Number,
    required: true,
  },

  boolean: Boolean,

  array: Array,
});

const User = mongoose.model("User", user);

module.exports = User;
