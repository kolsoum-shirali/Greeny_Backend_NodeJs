const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new (class {
  orderValidator() {
    return [
      check("name").notEmpty().withMessage("نام نباید خالی باشد"),
      check("lastName").notEmpty().withMessage("نام خانوادگی نباید خالی باشد"),
      check("mobile").notEmpty().withMessage("موبایل نباید خالی باشد"),
      check("address").notEmpty().withMessage("آدرس نباید خالی باشد"),
      check("email").isEmail().withMessage("ایمیل نامعتبر است"),
      check("products").notEmpty().withMessage("سفارشات نباید خالی باشد"),
    ];
  }
})();
