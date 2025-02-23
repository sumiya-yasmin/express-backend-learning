
const config = require('./config');
const express = require('express');
const port = config.PORT;
const {configureRouter} = require('./router');
const { logRequestMiddleware, errorHandler } = require('./middlewares');
const connectDB = require('./db');
const app = express();


connectDB();

app.use(express.json())
app.use(logRequestMiddleware)
configureRouter(app)
app.use(errorHandler); //error midleware must be after configuration of router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})