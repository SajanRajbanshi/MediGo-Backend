const express = require("express");
const app = express();
require("dotenv").config();
// const cors = require("cors");
const routes = require("./Routes/api");

// const corsOptions = {
//     origin: 'https://5dst5gsd-5173.euw.devtunnels.ms',
//     methods: 'GET, POST, OPTIONS',
//     // allowedHeaders: 'Content-Type, Authorization',
// };

// // app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
// app.use(cors({ origin: ["https://5dst5gsd-5173.euw.devtunnels.ms"] }));

app.use(express.json());

app.use("/api", routes);

module.exports = app;
