const express = require("express");
const router = express.Router();
const authRouter = require("./auth/index");
const userRouter = require("./user/index");
const adminRouter = require("./admin/index");
const { isLogedIn, isAdmin } = require("../middlewares/auth");
const error = require('../middlewares/error')
//  اول درخواست اگر ارگومان اولی باشه به ارگومان دومی هدایت می شویم
router.use("/auth", authRouter);
//  اول درخواست اگر ارگومان اولی باشه به ارگومان دومی هدایت می شویم مثلا
// /api/user
// افزودن میدلور برای چک کردن اینکه کاربر لاگین کرده باشه
router.use("/user", isLogedIn, userRouter);
// اول میدلور اولی اجرا میشه بعد دومی و ...
router.use("/admin", isLogedIn, isAdmin, adminRouter);
//  با هندل کردن میدلور ارور نیازی به ترای کچ نیست
router.use(error);
module.exports = router;
