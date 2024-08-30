const { createQuestion, getAllQuestion, getQuestionById } = require("../Controllers/questionController")
const express = require("express")
const router = express.Router()

router.post("/create",createQuestion)
router.get("/all",getAllQuestion)
router.get("/:id",getQuestionById)

module.exports = router;