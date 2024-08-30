const mongoose = require("./DBConnection")

const QuestionSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author Id is Compulsory..."]
    },
    question: {
        type: String,
        required: [true, "Question shouldn't be Empty..."]
    },
    answers: {
        type: [String],
        default: []
    },
    likes: {
        type: Number,
        default: 0
    },
    
});
const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;