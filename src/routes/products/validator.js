const { check, body } = require("express-validator");

module.exports = new (class {
  createProductValidator() {
    return [
      check("title").notEmpty().withMessage("عنوان نباید خالی باشد"),
      check("rate").notEmpty().withMessage("نرخ نباید خالی باشد"),
      check("oldPrice").notEmpty().withMessage("قیمت قبلی نباید خالی باشد"),
      check("newPrice").notEmpty().withMessage("کمترین جدید نباید خالی باشد"),
      check("shortDesc").notEmpty().withMessage("توضیحات  نباید خالی باشد"),
      check("pCode").notEmpty().withMessage(" کد محصول نباید خالی باشد"),
      check("pType").notEmpty().withMessage("نوع کشت نباید خالی باشد"),
      check("weight").notEmpty().withMessage(" وزن نباید خالی باشد"),
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
