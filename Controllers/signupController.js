const User = require("../Models/User");
const signUp = (req, res) => {
  User.findOne({ username: req.body.username }).then((existingUser) => {
    if (existingUser) {
      return res
        .status(400)
        .json({ status: false, message: "Username Already Exists" });
    }
  }).catch((err)=>{
    return res
        .status(500)
        .json({
            status: false,
            message: "Internal Server Error"
        })
  });

  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });

  newUser
    .save()
    .then((savedUser) => {
      return res.status(200).json({
        status: true,
        userId: savedUser._id,
        message: "Sign up successful",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: false,
        message: "Sign up unsuccessful",
        error: err,
      });
    });
};

module.exports = { signUp };
