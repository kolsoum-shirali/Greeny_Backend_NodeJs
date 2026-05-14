const controller = require("../controller");
const Product = require("../../models/product");
const productsData = require("../../../public/data/products")
// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async products(req, res) {
    try {
      const products = await Product.find({});
      return this.response({
        res: res,
        code: 200,
        message: "Products fetched successfully",
        data: productsData,
      });
    } catch (err) {
      console.error("Error fetching products:", err);
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch products",
      });
    }
  }
})();
