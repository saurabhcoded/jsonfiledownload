const mongoose = require("mongoose")

const documentSchema = new mongoose.Schema({
    rank: {
        type: String,
        required: true
    },
    start_no: {
        type: String,
        required: true
    },
    kia_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    speed: {
        type: String,
        required: true
    },
    sprint: {
        type: String,
        required: true
    },
    qualifying: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now },
})

module.exports.SPORT = new mongoose.model("sport", documentSchema)