const mongoose = require("./DBConnection");

const AnswerPostSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author Id is Compulsory..."]
    },
    question: {
        type: String,
        required: [true, "Question is required..."]
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    }
});

const Post = mongoose.model("Post", AnswerPostSchema);

module.exports = Post;
