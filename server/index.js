require("dotenv").config();
const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();
//==================== MiddleWares ====================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/", routes);
// DB Connection && Starting Server
const PORT = process.env.PORT || 2100;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL).then((e) => {
    console.log("connect to mongodb")
}).catch((err) => {
    console.log("Error While Connection to MongoDB", err);
});

module.exports = app;







// app.get('/', (req, res) => {
//     // res.render('home')
//     res.status(200).json({
//         message: "home"
//     })
// })
// app.use('/', user)


app.listen(PORT, () => {
    console.log("Connect to port" + PORT)
})
