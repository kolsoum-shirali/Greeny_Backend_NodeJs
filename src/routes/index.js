const express = require("express");
const router = express.Router();
const authRouter = require("./auth/index");
const userRouter = require("./user/index");
const adminRouter = require("./admin/index");
const productsRouter = require("./products/index");
const blogsRouter = require("./blogs/index");
const commentsRouter = require("./comments/index");
const orderRouter = require("./order/index");
const adsRouter = require("./ads/index");

const path = require("path");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

const { isLogedIn, isAdmin } = require("../middlewares/auth");
//  اول درخواست اگر ارگومان اولی باشه به ارگومان دومی هدایت می شویم
router.use("/auth", authRouter);
//  اول درخواست اگر ارگومان اولی باشه به ارگومان دومی هدایت می شویم مثلا
// /api/user
// افزودن میدلور برای چک کردن اینکه کاربر لاگین کرده باشه
router.use("/user", isLogedIn, userRouter);
// اول میدلور اولی اجرا میشه بعد دومی و ...
router.use("/admin", isLogedIn, isAdmin, adminRouter);
router.use("/", productsRouter);
router.use("/", blogsRouter);
router.use("/", commentsRouter);
router.use("/", orderRouter);
router.use("/", adsRouter);

module.exports = router;
