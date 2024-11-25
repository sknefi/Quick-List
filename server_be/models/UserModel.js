const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
