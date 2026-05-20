const controller = require("../controller");
module.exports = new (class extends controller {
  async registerOrder(req, res) {
    try {
      // Create a new order instance
      let order = new this.OrderModel(
       req.body
      );
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
})();
