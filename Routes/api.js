const express = require("express");
const router = express.Router();
require("dotenv").config();

const hospitalRouter = require("./hospitalRoute")
const questionRouter = require("./questionRoute")
const postRouter = require("./postRoute")
const signinRouter = require("./signinRoute")
const signupRouter = require("./signupRoute")

router.use("/hospital",hospitalRouter)
router.use("/post",postRouter)
router.use("/question",questionRouter)
router.use("/signup",signupRouter)
router.use("/signin",signinRouter)

module.exports = router;