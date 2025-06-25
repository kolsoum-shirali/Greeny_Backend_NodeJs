const mongoose = require("mongoose");
const timestamp = require('mongoose-timestamp')
// ایجاد اسکیما
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(timestamp)

// ایجاد مدل بر اساس اسکیما
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel