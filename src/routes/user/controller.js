const controller = require("../controller");
const _ = require("lodash");
const User = require("../../models/user");

// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async dashboard(req, res) {
    res.send("user dashboard");
  }
  async me(req, res) {
    this.response({ res, data: _.pick(req.user, ["name", "email"]) });
  }
  async allUser(req, res) {
    try {
      const users = await User.find({});
      return this.response({
        res: res,
        code: 200,
        message: "users fetched successfully",
        data: users,
      });
    } catch (err) {
      console.error("Error fetching users:", err);
      this.response({
        res: res,
        code: 500,
        message: "Failed to fetch users",
      });
    }
  }
})();
