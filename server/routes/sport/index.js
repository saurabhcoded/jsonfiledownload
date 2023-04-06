const { SPORT } = require('../../models/sports');

const sportsRouter = require('express').Router();

sportsRouter.post("/", async (req, res) => {
    console.log(req.body);
    const data = await SPORT.create(req.body);
    data.save();
    res.json({ status: "success", result: data });
})
sportsRouter.get("/", async (req, res) => {
    const data = await SPORT.find();
    res.json({ status: "success", result: data });
})
sportsRouter.get("/:id", async (req, res) => {
    console.log(req.params)
    const data = await SPORT.findOne({ _id: req.params.id });
    res.json({ status: "success", result: data });
})
module.exports = sportsRouter;