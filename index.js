// برای بی نیازی از ترای کچ
require("express-async-errors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// define namespace
const debug = require("debug")("app:main");
const config = require("config");
// لاگ گرفتن خطاها
const winston = require("winston");
// du to the body can log in terminal and this line is a middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// فایل ها استاتیک توی پوشه پابلیک
app.use(express.static("public"));
const router = require("./src/routes/index");

mongoose
  .connect(config.get("db.address"))
  .then((res) => debug("connected to mongodb"))
  .catch((err) => debug("could not connect to mongodb"));
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
// process.on("uncaughtException", (err) => {
//   winston.error(err.message, err);
//   console.log("uncaught Exception");
//   process.exit(1);
// });
// هر درخواستی که سمت سرور بیاد و اولش آرگومان اولی زیر باشد
// به فایل روترمون هدایت می شویم
app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
