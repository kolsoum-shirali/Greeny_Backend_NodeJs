const config = require("config");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
async function isLogedIn(req, res, next) {
  if (req.originalUrl === "/api/user/allUser") {
    next();
  } else {
    const token = req.header("x-auth-token");
    if (!token) res.status(401).json({ message: "دسترسی منقضی شده" });
    try {
      const decoded = jwt.verify(token, config.get("jwt_key"));
      const user = await UserModel.findById(decoded._id);
      console.log(user);
      req.user = user;
      // هدایت به میدلور بعدی
      next();
    } catch (err) {
      res.status(400).json({ message: "توکن نامعتبر است" });
    }
  }
}
async function isAdmin(req, res, next) {
  if (!req.user.isAdmin) res.status(403).json({ message: "دسترسی منقضی شده" });
  next();
}

module.exports = {
  isLogedIn,
  isAdmin,
};
