const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
// ایجاد اسکیما
const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
});

productSchema.plugin(timestamp);

// ایجاد مدل بر اساس اسکیما
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
