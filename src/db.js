const mongoose = require('mongoose');
const config = require('./config');


const connectDB= async()=>{
    console.log("Connecting Mongodb")
    try {
        await mongoose.connect(config.db.MONGO_URI,{
            dbName: config.db.MONGO_DB_NAME,
            });
              console.log("Mongodb Connected sucessfully")
    } catch (error) {
        console.error(`Mongodb connection failed ${error}`)
    }
  }
module.exports = connectDB