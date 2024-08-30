const express = require("express");
const router = express.Router();

const {
    signUp
  } = require("../Controllers/signupController");

router.use("/",signUp)

module.exports = router;
