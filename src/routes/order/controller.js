const controller = require("../controller");
const _ = require("lodash");
module.exports = new (class extends controller {
  async registerOrder(req, res) {
    console.log(req.body, "re");
    try {
      // Create a new order instance
      order = new this.OrderModel(
        _.pick(req.body, [
          "name",
          "lastName",
          "mobile",
          "address",
          "email",
          "products",
        ]),
      );
      await order.save();
      this.response({
        res,
        message: "سفارش با موفقیت ثبت شد",
        data: _.pick(order, [
          "_id",
          "name",
          "lastName",
          "mobile",
          "address",
          "email",
          "products",
        ]),
      });
    } catch (err) {
      this.response({
        res: res,
        code: 500,
        message: "An internal server error occurred during registration.",
      });
    }
  }
})();
