const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
// ایجاد اسکیما
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  img_pro: {
    type: String,
  },
});

productSchema.plugin(timestamp);

// ایجاد مدل بر اساس اسکیما
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
