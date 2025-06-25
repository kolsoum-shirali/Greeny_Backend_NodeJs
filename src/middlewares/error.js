const winston = require("winston");
winston.error(err.message, err);
// error middleware : چهارتا ورودی میگیره
module.exports = (err, req, res, next) => {
  res.status(500).json({ message: "(Server Error)" });
};
