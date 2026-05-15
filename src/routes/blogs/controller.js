const controller = require("../controller");
const blogsData = require("../../../public/data/blogs");
// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async blogs(req, res) {
    try {
      return this.response({
        res: res,
        code: 200,
        message: "blogs fetched successfully. (:",
        data: blogsData,
      });
    } catch (err) {
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch blogs :(",
      });
    }
  }

  async singleBlog(req, res) {
    try {
      const id = parseInt(req.params.id);
      const blog = blogsData.find((item) => item.id === id);

      if (!blog) {
        return this.response({
          res,
          code: 404,
          message: "Blog not found",
        });
      }

      return this.response({
        res,
        code: 200,
        message: "Single blog fetched successfully :)",
        data: blog,
      });
    } catch (err) {
      return this.response({
        res,
        code: 500,
        message: "Failed to fetch the blog :(",
      });
    }
  }
})();
