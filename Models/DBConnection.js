const mongoose = require("mongoose");
require("dotenv").config()


mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log("DB Connected successfully...")
}).catch((err)=>{
    console.log("Error in DB Connection...",err)
})

module.exports = mongoose;
