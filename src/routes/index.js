const express = require('express')
const router = express.Router()
const authRouter = require('./auth/index')
//  اول درخواست اگر ارگومان اولی باشه به ارگومان دومی هدایت می شویم
router.use('/auth',authRouter)
module.exports = router