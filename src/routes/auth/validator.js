const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new (class {
  registerValidator() {
    return [
      check("email").isEmail().withMessage("Email is invalid"),

      check("name").notEmpty().withMessage("Name can't be empty"),

      check("password").notEmpty().withMessage("Password can't be empty"),
    ];
  }
  loginValidator() {
    return [
      check("email").isEmail().withMessage("Email is invalid"),
      check("password").notEmpty().withMessage("Password can't be empty"),
    ];
  }
})();
