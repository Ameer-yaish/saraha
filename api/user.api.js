const { signIn, signUp } = require("../services/user");
const app=require("express").Router()

app.post("/signIn",signIn)
app.post("/signUp",signUp)

module.exports=app