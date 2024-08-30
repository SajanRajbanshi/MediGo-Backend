const Question = require("../Models/QuestionSchema");

const createQuestion = (req, res) => {
  let { author, question } = req.body;
  const newQuestion = Question({
    author: author,
    question: question,
  });
  newQuestion
    .save()
    .then(() => {
      res.status(200).json({
        message: "Question inserted successfully",
        data: newQuestion,
      });
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

const getAllQuestion = (req, res) => {
  Question.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send({ message: err.message });
    });
};

const getQuestionById = (req, res) => {
  const id = req.params.id;
  Question.findById(id)
    .then((question) => {
      if (!question) {
        res.status(404).send({ message: "Question not found" });
      }
      res.status(200).json(question);
    })
    .catch((err) => {
      res.status(404).send({ message: err.message });
    });
};

module.exports = { createQuestion, getAllQuestion, getQuestionById };
