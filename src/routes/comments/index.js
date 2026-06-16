const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");

router.post(
  "/create/comment",
  validator.createCommentValidator(), // 2. Validator checks fields + req.file
  (req, res) => {
    const errors = require("express-validator").validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    (controller.validate, controller.createComment(req, res));
  },
);

router.get("/comments", controller.allComments);

module.exports = router;
