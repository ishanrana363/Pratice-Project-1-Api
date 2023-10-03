const express = require("express")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const router = express.Router()
const profileController = require("../controllers/profileController")

router.post("/CreateProfile",profileController.CreateProfile )
router.post("/userLogin",profileController.userLogin)
router.get("/SelectProfile",AuthVerifyMiddleware,profileController.SelectProfile)




module.exports = router