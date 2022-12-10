const userModel=require("../models/user")



module.exports.signUp= async (req,res,next)=>{
let {name,email,password,age}=req.body

await userModel.insertMany({name,email,password,age})
res.json({message:"user added"})


}


module.exports.signIn= async (req,res,next)=>{
let{email,password}=req.body

const user =await userModel.findOne({email})
if(user){
if (password==user.password)
{
    res.json({message:"Login"})
}
else {
    res.json({message:"password incorrect"})
}


}
else {
    res.json({message:"email not found"})
}




}