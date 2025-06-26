const mongoose = require("mongoose");
// define namespace
const debug = require("debug")("app:main");
const config = require("config");

module.exports = function () {
  mongoose
    .connect(config.get("db.address"))
    .then((res) => debug("connected to mongodb"))
    .catch((err) => debug("could not connect to mongodb"));
};
