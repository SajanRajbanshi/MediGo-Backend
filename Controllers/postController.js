const Post = require("../Models/AnswerPostSchema");

const createPost = (req, res) => {
  let { author, question } = req.body;
  const newPost = Post({
    author: author,
    question: question,
  });
  newPost
    .save()
    .then(() => {
      res.status(200).json({
        message: "Post inserted successfully",
        data: newPost,
      });
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

const getPostById = (req, res) => {
  const id = req.params.id;
  Post.findById({_id:id})
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Post not found" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const getAllPost = (req, res) => {
  Post.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).send({ message: err.message });
    });
};

module.exports = { createPost, getPostById, getAllPost };
