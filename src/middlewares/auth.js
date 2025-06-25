const config = require("config");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
async function isLogedIn(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) res.status(401).send("access denied");
  try {
    const decoded = jwt.verify(token, config.get("jwt_key"));
    const user = await UserModel.findById(decoded._id);
    console.log(user);
    req.user = user;
    // هدایت به میدلور بعدی
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
}

module.exports = {
  isLogedIn,
};
