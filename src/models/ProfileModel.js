const mongoose = require("mongoose")
const DataSchema = new mongoose.Schema({
    FirstName : {
        type:String,
    },
    LastName : {
        type : String,
    },
    EmailAddress : {
        type : String,
    },
    MobileNumber : {
        type : String,
     
    },
    City : {
        type : String
    },
    UserName : {
        type : String,
        unique : true
    },
    Password : {
        type : String,
    }

},
{timestamps: true, versionKey:false})

const ProfileModel = mongoose.model("Profile",DataSchema)
module.exports = ProfileModel