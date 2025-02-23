const productRouter =require('./productRouter');
const userRouter = require('./userRouter');
const configureRouter = (app)=>{
    app.get('/status', (req, res) => {
        res.send('Hello World')
      })
      
      app.use('/api/products',productRouter);
      app.use('/api/user',userRouter)
      
}
module.exports= {configureRouter};
