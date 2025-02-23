const express =require('express');
const userRouter = express();
userRouter.get('/',(req,res)=>{
res.json([])
})
module.exports = userRouter