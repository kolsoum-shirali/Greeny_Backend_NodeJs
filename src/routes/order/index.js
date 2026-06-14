const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");
router.post(
  "/order",
  validator.orderValidator(),
  controller.validate,
  controller.registerOrder,
);
router.get("/allOrders", controller.allOrders);
module.exports = router;
