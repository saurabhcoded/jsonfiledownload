const express = require("express");
const app = express();
const sportsRouter = require("./sport");
app.use("/sports", sportsRouter );

module.exports = app