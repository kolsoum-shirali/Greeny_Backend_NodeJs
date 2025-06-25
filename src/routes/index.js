const express = require("express");
const router = express.Router();
const authRouter = require("./auth/index");
const userRouter = require("./user/index");
const adminRouter = require("./admin/index");
const { isLogedIn } = require("../middlewares/auth");
//  اول درخواست اگر ارگومان اولی باشه به ارگومان دومی هدایت می شویم
router.use("/auth", authRouter);
//  اول درخواست اگر ارگومان اولی باشه به ارگومان دومی هدایت می شویم مثلا
// /api/user
// افزودن میدلور برای چک کردن اینکه کاربر لاگین کرده باشه
router.use("/user", isLogedIn, userRouter);
router.use("/admin", adminRouter);

module.exports = router;
