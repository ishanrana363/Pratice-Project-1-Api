const ProfileModel = require("../models/ProfileModel")
const jwt = require("jsonwebtoken")
// User Profile Create
exports.CreateProfile = async (req,res)=>{
    try {
        const reqBody = req.body
        const Profile = await ProfileModel.create(reqBody)
        res.status(201).json({
            status : "Success",
            data : Profile
        })
    } catch (error) {
        res.status(400).json({
            status : "Fail",
            data : error.message
        })
    }
}
exports.userLogin = async (req, res) => {
    try {
        const UserName = req.body.UserName
        const Password = req.body.Password
        const User = await ProfileModel.findOne({
            UserName,
            Password
        })
        if(User){
            let payload = {
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data : User[0]
            }
            var token = jwt.sign(payload, 'secreatekey1234');
            res.status(200).json({
                status : "Success",
                token : token,
                data : User,
            })
        }else{
            res.status(401).json({
                status: "Unauthorized"
            })
        }
    } catch (error) {
        res.status(401).json({
            status : "Enternal server error",
            error : error.message
        })
    }
};

exports.SelectProfile=async(req,res)=>{
    try {
        let UserName = req.headers['username']
        let userProfile = await ProfileModel.find({
        UserName : UserName
    })
    if(userProfile){
        res.status(200).json({
            status : "success",
            data : userProfile
        })
    }else{
        res.status(401).json({
            status : "unauthorize",
        })
    }

    } catch (error) {
        res.json({
            status : "Internal server error",
            error : error.message
        })   
    }
}