const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.get("/blogs", controller.blogs);
router.get("/blogs/:id", controller.singleBlog);

module.exports = router;
