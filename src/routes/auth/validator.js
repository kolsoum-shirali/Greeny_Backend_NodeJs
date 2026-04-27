const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new (class {
  // registerValidator() {
  //   return (
  //     [check("email").isEmail().withMessage("Email is Invalid")],
  //     [check("name").not().isEmpty("name can't be empty")],
  //     [check("password").not().isEmpty("password can't be empty")]
  //   );
  // }
  loginValidator() {
    return (
      [check("email").isEmail().withMessage("Email is Invalid")],
      [check("password").not().isEmpty("password can't be empty")]
    );
  }
})();
