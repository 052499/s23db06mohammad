const { Double } = require("mongodb")
const mongoose = require("mongoose")
const planetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true,
        min: 0,
        max: 890000
    }
});
module.exports = mongoose.model("planet",planetSchema)