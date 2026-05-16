const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.get("/comments", controller.comments);

module.exports = router;
