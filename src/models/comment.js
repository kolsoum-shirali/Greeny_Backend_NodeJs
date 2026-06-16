const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
// ایجاد اسکیما

const commentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

commentSchema.plugin(timestamp);

// ایجاد مدل بر اساس اسکیما
const CommentModel = mongoose.model("Comment", commentSchema);
module.exports = CommentModel;
