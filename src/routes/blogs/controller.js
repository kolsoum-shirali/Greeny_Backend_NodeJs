const controller = require("../controller");
const Blog = require("../../models/blog");

// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async createBlog(req, res) {
    try {
      const blogData = {
        ...req.body,
        image: req.file ? req.file.path : null, // Save the path to your DB
      };

      let blog = new this.BlogModel(blogData);
      await blog.save();

      this.response({
        res,
        message: "وبلاگ شما با موفقیت ثبت شد",
        data: blog,
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
  async allBlogs(req, res) {
    try {
      const allBlogs = await Blog.find({});
      return this.response({
        res: res,
        code: 200,
        message: "allBlogs fetched successfully",
        data: allBlogs,
      });
    } catch (err) {
      console.error("Error fetching allBlogs:", err);
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch allBlogs",
      });
    }
  }
  async singleBlog(req, res) {
    try {
      const { num } = req.params;
      const blog = await Blog.findOne({ numBlog: parseInt(num) });
      if (!blog) {
        return this.response({
          res,
          code: 404,
          message: "Single blog not found :(",
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
        message: "Failed to fetch Single blog :(",
      });
    }
  }
})();
