const mongoose = require("mongoose")
const planetSchema = mongoose.Schema({
name: String,
size: Number,
speed: Number
})
module.exports = mongoose.model("planet",
planetSchema)