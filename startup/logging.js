// برای بی نیازی از ترای کچ
require("express-async-errors");
// لاگ گرفتن خطاها
const winston = require("winston");
// define namespace
const debug = require("debug")("app:main");

module.exports = function () {
  winston.add(
    new winston.transports.File({
      filename: "logfile.log",
    })
  );
  // اگر اروری خارج از روت ها داشته باشیم مثل زیر
  // باید هندل کنید ارور رو
  // throw new Error("failed");
  // فقط برای کدهای سینکرونوس کار میکنه و برای ایسینکرونوس باید ارگومان اول یه چیز دیگر باشد
  // ارگومان اول اجباری هست
  process.on("uncaughtException", (err) => {
    debug(err);
    winston.error(err.message, err);
    process.exit(1);
  });
};
