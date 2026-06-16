const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
// ایجاد اسکیما

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  pCode: {
    type: Number,
    required: true,
  },
  pType: {
    type: String,
    required: false,
  },
  weight: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

productSchema.plugin(timestamp);

// ایجاد مدل بر اساس اسکیما
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
