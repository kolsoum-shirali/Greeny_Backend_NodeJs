const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.get("/products", controller.products);
router.get("/products/:id", controller.singleProduct);

module.exports = router;
