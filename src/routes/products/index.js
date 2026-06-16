const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");
const upload = require("../../middlewares/multer");

router.post(
  "/create/product",
  upload.single("image"), // 1. Multer parses form-data
  validator.createProductValidator(), // 2. Validator checks fields + req.file
  (req, res) => {
    const errors = require("express-validator").validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    (controller.validate, controller.createProduct(req, res));
  },
);

router.get("/products", controller.allProducts);
router.get("/products/:code", controller.singleProduct);

module.exports = router;
