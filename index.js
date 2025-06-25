const express = require("express");
const app = express();
const mongoose = require("mongoose");
// define namespace
const debug = require("debug")("app:main");
const config = require("config");
// du to the body can log in terminal and this line is a middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// فایل ها استاتیک توی پوشه پابلیک
app.use(express.static("public"));
const router = require('./src/routes/index')
// هر درخواستی که سمت سرور بیاد و اولش آرگومان اولی زیر باشد
// به فایل روترمون هدایت می شویم
app.use('/api',router)
mongoose
  .connect(config.get("db.address"))
  .then((res) => debug("connected to mongodb"))
  .catch((err) => debug("could not connect to mongodb"));
console.log(config.get("db.address"))
const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`listening on port ${port}`))
