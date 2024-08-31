const express = require("express")
const app = express()
require("dotenv").config();
const cors = require("cors")
const routes = require("./Routes/api")

app.use(express.json())
app.use(cors())

app.use("/api",routes);

app.listen(process.env.PORT || 3000,()=>{
    console.log(`server is listening on port ${process.env.PORT || 3000}`);
})