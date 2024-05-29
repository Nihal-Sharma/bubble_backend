const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    username : String,
    address : String,
    date : String,
    time : String,
    phone : String,
    status : String,
    type : String
})

const serviceModel = mongoose.model("bookedService" ,serviceSchema )
module.exports = serviceModel