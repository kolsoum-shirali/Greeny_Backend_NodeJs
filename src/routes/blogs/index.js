const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");
const upload = require("../../middlewares/multer");

router.post(
  "/create/blog",
  upload.single("image"), // 1. Multer parses form-data
  validator.createBlogValidator(), // 2. Validator checks fields + req.file
  (req, res) => {
    const errors = require("express-validator").validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    (controller.validate, controller.createBlog(req, res));
  },
);

router.get("/blogs", controller.allBlogs);
router.get("/blogs/:num", controller.singleBlog);

module.exports = router;
