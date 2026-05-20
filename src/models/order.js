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
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  products: {
    type: Object,
    required: true,
  },
});

orderSchema.plugin(timestamp);

// ایجاد مدل بر اساس اسکیما
const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
