const express = require("express");
const router = express.Router();
// const Hospital = require("../Model/HospitalSchema");
// const jsonData = require("../Assets/HospitalData.json")
const {
  createHospital,
  getHospitalById,
  getAllHospital,
  updateHospital,
} = require("../Controllers/hospitalController");

router.post("/create", createHospital);
router.put("/update", updateHospital);
router.get("/all", getAllHospital);
// router.get("/saveHospitals",(req,res)=>{
//     Hospital.insertMany(jsonData).then(()=>{
//         console.log("data Inserted successfully");
//         res.status(201).json({
//             message:"data Inserted successfully",
//             status:201
//         })
//     })
//     .catch((err)=>{
//         res.status(404).json({
//             message:"data not Inserted",
//             status:404,
//             error:err
//         })
//     })
// })
router.get("/:id", getHospitalById);

module.exports = router;
