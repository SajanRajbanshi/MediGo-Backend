const User = require("../Models/User");
const signIn = (req, res) => {
  User.findOne({ username: req.body.username, password: req.body.password })
    .then((user) => {
      if (user) {
        res.status(200).send({
          status: true,
          message: "Sign in successful",
          userId: user._id,
        });
      } else {
        res
          .status(401)
          .send({ status: false, message: "Wrong username or password" });
      }
    })
    .catch((err) => {
      res.status(500).send({ status: false, error: err });
    });
};

module.exports = { signIn };
