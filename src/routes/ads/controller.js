const controller = require("../controller");
const _ = require("lodash");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async createAds(req, res) {
    try {
      // Combine body and file path
      const adsData = {
        ...req.body,
        image: req.file ? req.file.path : null, // Save the path to your DB
      };

      let ads = new this.AdsModel(adsData);
      await ads.save();

      this.response({
        res,
        message: "آگهی شما با موفقیت ثبت شد",
        data: ads,
      });
    } catch (err) {
      console.error("error:", err);
      this.response({
        res: res,
        code: 500,
        message: "An internal server error occurred.",
      });
    }
  }
})();
