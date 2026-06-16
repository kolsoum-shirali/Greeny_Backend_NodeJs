const controller = require("../controller");
const Comment = require("../../models/comment");

// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async createComment(req, res) {
    try {
      const commentData = req.body;
      let comment = new this.CommentModel(commentData);
      await comment.save();

      this.response({
        res,
        message: "دیدگاه شما با موفقیت ثبت شد",
        data: comment,
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
  async allComments(req, res) {
    try {
      const allComments = await Comment.find({});
      return this.response({
        res: res,
        code: 200,
        message: "allComments fetched successfully",
        data: allComments,
      });
    } catch (err) {
      console.error("Error fetching allComments:", err);
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch allComments",
      });
    }
  }

  
})();
