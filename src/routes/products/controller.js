const controller = require("../controller");
const Product = require("../../models/product");

// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async createProduct(req, res) {
    try {
      const productData = {
        ...req.body,
        image: req.file ? req.file.path : null, // Save the path to your DB
      };

      let product = new this.ProductModel(productData);
      await product.save();

      this.response({
        res,
        message: "محصول شما با موفقیت ثبت شد",
        data: product,
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
  async allProducts(req, res) {
    try {
      const allProducts = await Product.find({});
      return this.response({
        res: res,
        code: 200,
        message: "allProducts fetched successfully",
        data: allProducts,
      });
    } catch (err) {
      console.error("Error fetching allProducts:", err);
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch allProducts",
      });
    }
  }
  async singleProduct(req, res) {
    try {
      const { code } = req.params;

      const product = await Product.findOne({ pCode: parseInt(code) });

      if (!product) {
        return this.response({
          res,
          code: 404,
          message: "Single product not found :(",
        });
      }

      return this.response({
        res,
        code: 200,
        message: "Single product fetched successfully :)",
        data: product,
      });
    } catch (err) {
      return this.response({
        res,
        code: 500,
        message: "Failed to fetch Single product :(",
      });
    }
  }
})();
