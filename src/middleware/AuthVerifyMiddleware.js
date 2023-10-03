const jwt = require("jsonwebtoken")
module.exports=(req,res,next)=>{
    let Token = req.headers["token-key"]
    jwt.verify(Token,"secreatekey1234",(err,decode)=>{
        if(err){
            res.status(401).json({
                status : "unauthorize"
            })
        }else{
            // Get User Name From Decoded Token and add with request header 
            let username = decode["User"]['UserName']
            req.headers.username = username
            next()
        }
    }) 
}