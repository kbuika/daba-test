const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
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
      "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1599098981/avatar_default_qjqjqj.png",
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
