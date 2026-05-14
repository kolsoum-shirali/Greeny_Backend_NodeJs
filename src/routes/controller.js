const autoBind = require("auto-bind");
const { validationResult } = require("express-validator");
const UserModel = require("../models/user");
const ProductModel = require("../models/product");

module.exports = class {
  constructor() {
    autoBind(this);
    this.UserModel = UserModel;
    this.ProductModel = ProductModel;
  }
  validationBody(req, res) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const messages = errors.map((err) => err.msg);

      res.status(400).json({
        message: "validation error",
        data: messages,
      });
      return false; // indicates error
    }
    return true;
  }

  validate(req, res, next) {
    const isValid = this.validationBody(req, res);
    if (!isValid) return; // stop if not valid

    next();
  }
  response({ res, message, code = 200, data = {} }) {
    res.status(code).json({
      message,
      data,
    });
  }
};
