const controller = require("../controller");
const _ = require("lodash");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Ads = require("../../models/ads");
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
  async relatedAds(req, res) {
    try {
      const { type } = req.params;
      const relatedAds = await Ads.find({ pageType: type });
      return this.response({
        res: res,
        code: 200,
        message: "relatedAds fetched successfully",
        data: relatedAds,
      });
    } catch (err) {
      console.error("Error fetching relatedAds:", err);
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch relatedAds",
      });
    }
  }
  async allAds(req, res) {
    try {
      const allAds = await Ads.find({});
      return this.response({
        res: res,
        code: 200,
        message: "allAds fetched successfully",
        data: allAds,
      });
    } catch (err) {
      console.error("Error fetching allAds:", err);
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch allAds",
      });
    }
  }
})();
