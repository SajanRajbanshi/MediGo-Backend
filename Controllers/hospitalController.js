const Hospital = require("../Models/HospitalSchema");

const createHospital = (req, res) => {
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
      console.log(err)
      res.status(404).send(err);
    });
};

const getAllHospital = (req, res) => {
  Hospital.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send({ message: err.message });
    });
};

const getHospitalById = (req, res) => {
  const id = req.params.id;
  Hospital.findById({_id:id})
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Hospital not found" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send({ message: err.message });
    });
};

const updateHospital = (req, res) => {
  const id = req.body.id;
  const updatedValues = req.body.updatedValues;

  Hospital.findByIdAndUpdate({ _id: id }, { $set: updatedValues }).then(
    (data) => {
      res
        .status(200)
        .json({
          message: "Hospital updated successfully",
          statusCode: res.statusCode,
          data: data,
        });
    }
  );
}

module.exports = { createHospital, getHospitalById, getAllHospital, updateHospital };
