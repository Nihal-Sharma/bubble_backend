const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    address : String,
    date : String,
    time : String,
    status : String
})

const serviceModel = mongoose.model("bookedService" ,serviceSchema )
module.exports = serviceModel