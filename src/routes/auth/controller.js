const controller = require("../controller");
const _ = require("lodash");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async register(req, res) {
    try {
      let user = this.UserModel.findOne({ email: req.body.email });
      if (user) {
        return this.response({
          res: res,
          code: 400,
          message: "this user already registered",
        });
      }

      user = new this.UserModel(
        _.pick(req.body, ["name", "email", "password"])
      );
      // convert pass to hash by bcrypt package
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();
      this.response({
        res,
        message: "the user successfuly registered",
        data: _.pick(user, ["_id", "name", "email"]),
      });
    } catch (err) {
      console.log(err);
    }
  }
  async login(req, res) {
    try {
      const user = await this.UserModel.findOne({ email: req.body.email });
      if (!user) {
        return this.response({
          res,
          code: 400,
          message: "Invalid Email or Password",
        });
      }
      const isValid = await bcrypt.compare(req.body.password, user.password);
      if (!isValid) {
        return this.response({
          res,
          code: 400,
          message: "Invalid Email or Password",
        });
      }
      const token = jwt.sign({ _id: user.id }, config.get("jwt_key"));
      this.response({
        res,
        message: "successfuly logged in",
        data: { token },
      });
    } catch (err) {
      console.log(`output->log-login-error`, err);
    }
  }
})();
