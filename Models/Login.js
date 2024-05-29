const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    username :String,
    password : String,
    email :String,
    type : String
})

const loginModel = mongoose.model("loginData" , loginSchema)
module.exports = loginModel