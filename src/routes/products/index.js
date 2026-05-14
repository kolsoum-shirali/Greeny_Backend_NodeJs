const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.get("/products", controller.products);
module.exports = router;
