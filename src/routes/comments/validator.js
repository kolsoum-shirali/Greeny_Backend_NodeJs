const { check, body } = require("express-validator");

module.exports = new (class {
  createCommentValidator() {
    return [
      check("fullName").notEmpty().withMessage("نام نباید خالی باشد"),
      check("email").notEmpty().withMessage("ایمیل نباید خالی باشد"),
      check("message").notEmpty().withMessage(" پیام نباید خالی باشد"),
    ];
  }
})();
