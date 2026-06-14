const controller = require("../controller");
const Order = require("../../models/order");
module.exports = new (class extends controller {
  async registerOrder(req, res) {
    try {
      // Create a new order instance
      let order = new this.OrderModel(req.body);
      await order.save();
      this.response({
        res,
        message: "سفارش شما با موفقیت ثبت شد",
        data: order,
      });
    } catch (err) {
      console.error("error:", err);
      this.response({
        res: res,
        code: 500,
        message: "An internal server error occurred.",
      });
    }
  }
  async allOrders(req, res) {
    try {
      const allOrders = await Order.find({});
      return this.response({
        res: res,
        code: 200,
        message: "allOrders fetched successfully",
        data: allOrders,
      });
    } catch (err) {
      console.error("Error fetching allOrders:", err);
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch allOrders",
      });
    }
  }
})();
