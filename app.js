const express = require('express')
const mongoose=require("mongoose")
const app = express()
const port = 3000
mongoose.connect("mongodb+srv://ameer:ameer123@cluster0.4urwsng.mongodb.net/Honest")
app.use(express.json())
app.use("/user",require("./api/user.api"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))