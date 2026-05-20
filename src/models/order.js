const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
// ایجاد اسکیما
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
  products: {
    type: Array,
    required: true,
  },
});

orderSchema.plugin(timestamp);

// ایجاد مدل بر اساس اسکیما
const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
