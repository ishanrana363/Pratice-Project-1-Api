const mongoose = require("mongoose")
require("dotenv").config()
const dbport = process.env.DB_URL

const connectDB = async ()=>{
    try {
        mongoose.connect(dbport)
        console.log(`DB is connect`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB