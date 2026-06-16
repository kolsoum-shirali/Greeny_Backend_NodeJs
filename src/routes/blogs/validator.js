const { check, body } = require("express-validator");

module.exports = new (class {
  createBlogValidator() {
    return [
      check("title").notEmpty().withMessage("عنوان نباید خالی باشد"),
      check("shortDesc").notEmpty().withMessage("توضیحات کوتاه نباید خالی باشد"),
      check("desc").notEmpty().withMessage(" توضیحات نباید خالی باشد"),
      check("numBlog").notEmpty().withMessage("شماره وبلاگ نباید خالی باشد"),
      // Custom validator to check for the file
      body("image").custom((value, { req }) => {
        if (!req.file) {
          throw new Error("عکس نباید خالی باشد");
        }
        return true;
      }),
    ];
  }
})();
