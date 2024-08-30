const express = require("express");
const router = express.Router();

const {
    signIn
  } = require("../Controllers/signinController");

router.use("/",signIn)

module.exports = router;