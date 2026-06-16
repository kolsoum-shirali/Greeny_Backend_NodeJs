const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
// ایجاد اسکیما

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  numBlog: {
    type: Number,
    required: true,
  },
});

blogSchema.plugin(timestamp);

// ایجاد مدل بر اساس اسکیما
const BlogModel = mongoose.model("Blog", blogSchema);
module.exports = BlogModel;
