const controller = require("../controller");
const productsData = require("../../../public/data/products");
// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async products(req, res) {
    try {
      return this.response({
        res: res,
        code: 200,
        message: "Products fetched successfully. (:",
        data: productsData,
      });
    } catch (err) {
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch products :(",
      });
    }
  }
  async singleProduct(req, res) {
    try {
      const id = parseInt(req.params.id);
      const product = productsData.find((item) => item.id === id);

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
