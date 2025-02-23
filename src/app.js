require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {configureRouter} = require('./router');
const { logRequestMiddleware, errorHandler } = require('./middlewares');
const app = express();
const port = 3000;
const MONGO_URI =process.env.MONGO_URI;
const MONGO_DB_NAME=process.env.MONGO_DB;

const connectMongodb=()=>{
  console.log("Connecting Mongodb")
  mongoose.connect(MONGO_URI,{
    dbName: MONGO_DB_NAME,
    }).then(()=>{
      console.log("Mongodb Connected sucessfully")
    }).catch((error)=>{
      console.error(`Mongodb connection failed ${error}`)
    })
}
connectMongodb();

app.use(express.json())
app.use(logRequestMiddleware)
configureRouter(app)
app.use(errorHandler); //error midleware must be after configuration of router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})