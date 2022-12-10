const express = require('express')
const mongoose=require("mongoose")
const app = express()
const port = 3000
mongoose.connect("mongodb://127.0.0.1:27017/Honest")
app.use(express.json())
app.use("/user",require("./api/user.api"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))