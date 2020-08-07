const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
    trim: true,
    /* required: "String is Required", */
  },

  /*   email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
 */
  password: {
    type: String,
    required: true,
  },
  /* 
  phone: {
    type: Number,
    unique: true,
    required: true,
  },

  description: {
    type: String,
    trim: true,
    required: true,
  },

  zipCode: {
    type: Number,
    required: true,
    validate: [({ length }) => length === 5, "Zip Code should be 5 digits."],
  }, */

  boolean: Boolean,

  array: Array,
});

const User = mongoose.model("User", user);

module.exports = User;
