const errorHandlerMiddleware = (err, req, res, next)=>{
console.error(err);
res.status(500).send('Internal server error')
}
module.exports={
    errorHandlerMiddleware
}