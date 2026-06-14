const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
// ایجاد اسکیما
const adsSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  minPrice: {
    type: Number,
    required: true,
  },
  maxPrice: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  pageType: {
    type: Number,
    required: true,
  },
});

adsSchema.plugin(timestamp);

// ایجاد مدل بر اساس اسکیما
const AdsModel = mongoose.model("Ads", adsSchema);
module.exports = AdsModel;
