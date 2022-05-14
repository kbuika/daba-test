const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Please provide a valid email ",
    ],
  },
  avatar: {
    type: String,
    default:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y",
  },
  bio: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: 0,
  },
}, {timestamps: true});

module.exports = mongoose.model("user", userSchema);
