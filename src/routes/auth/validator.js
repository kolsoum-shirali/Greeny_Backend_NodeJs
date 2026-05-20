const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new (class {
  registerValidator() {
    return [
      check("email").isEmail().withMessage("ایمیل نامعتبر است"),

      check("name").notEmpty().withMessage("نام نباید خالی باشد"),

      check("password").notEmpty().withMessage("Password can't be empty"),
    ];
  }
  loginValidator() {
    return [
      check("email").isEmail().withMessage("ایمیل نامعتبر است"),
      check("password").notEmpty().withMessage("پسورد نباید خالی باشد"),
    ];
  }
})();
