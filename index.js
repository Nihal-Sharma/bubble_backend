const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");

const loginModel = require("./Models/Login")

const app = express()
const port = 4000
app.use(cors())
app.use(express.json())

const mongodb_uri = "mongodb+srv://nihal:indy1574@watchus.u8lgosg.mongodb.net/bubbles?retryWrites=true&w=majority&appName=WatchUs"
mongoose.connect(mongodb_uri).then(()=>{
  console.log("Database Connected")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/login" , (req,res)=>{
    loginModel.findOne({
      username : req.body.username,
      password : req.body.password
    }).then((result)=>{res.send(result) ; console.log(result)})
})
app.post("/signup" , (req,res)=>{
    loginModel.create(
     req.body
    ).then((result)=>{res.send(result)})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})