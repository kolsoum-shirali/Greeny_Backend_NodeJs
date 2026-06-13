const { check, body } = require("express-validator");

module.exports = new (class {
  createAdsValidator() {
    return [
      check("caption").notEmpty().withMessage("عنوان نباید خالی باشد"),
      check("description").notEmpty().withMessage("توضیحات نباید خالی باشد"),
      check("minPrice").notEmpty().withMessage("کمترین قیمت نباید خالی باشد"),
      check("maxPrice").notEmpty().withMessage("بیشترین قیمت نباید خالی باشد"),
      check("type").notEmpty().withMessage("نوع آگهی نباید خالی باشد"),
      check("pageType").notEmpty().withMessage("نوع صفحه نباید خالی باشد"),
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
