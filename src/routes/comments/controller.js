const controller = require("../controller");
const commentsData = require("../../../public/data/comments");
// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async comments(req, res) {
    try {
      return this.response({
        res: res,
        code: 200,
        message: "comments fetched successfully. (:",
        data: commentsData,
      });
    } catch (err) {
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch comments :(",
      });
    }
  }
})();
