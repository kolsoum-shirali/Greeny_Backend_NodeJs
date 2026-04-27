const controller = require("../controller");
const _ = require("lodash");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async register(req, res) {
    try {
      let user = await this.UserModel.findOne({ email: req.body.email });

      if (user) {
        // User already exists
        return this.response({
          res: res,
          code: 400,
          message: "This user already registered",
        });
      }

      // Create a new user instance
      user = new this.UserModel(
        _.pick(req.body, ["name", "email", "password"]),
      );

      // Hash the password using bcrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);

      // Save the new user to the database
      await user.save();

      // Send a success response
      this.response({
        res,
        message: "The user successfully registered",
        data: _.pick(user, ["_id", "name", "email"]),
      });
    } catch (err) {
      // 5. Improved error handling
      console.error("Registration error:", err); // Log the error for debugging
      // Send a generic server error response to the client
      this.response({
        res: res,
        code: 500,
        message: "An internal server error occurred during registration.",
      });
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
