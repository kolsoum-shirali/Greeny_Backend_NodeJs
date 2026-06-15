const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");
const upload = require("../../middlewares/multer");

router.post(
  "/create/ads",
  upload.single("image"), // 1. Multer parses form-data
  validator.createAdsValidator(), // 2. Validator checks fields + req.file
  (req, res) => {
    const errors = require("express-validator").validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    (controller.validate, controller.createAds(req, res));
  },
);
router.get("/ads/:type", controller.relatedAds);
router.get("/ads", controller.allAds)

module.exports = router;
