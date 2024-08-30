const { createPost, getPostById, getAllPost } = require("../Controllers/postController")
const express = require("express")
const router = express.Router()

router.post("/create",createPost)
router.get("/all",getAllPost)
router.get("/:id",getPostById)

module.exports = router;