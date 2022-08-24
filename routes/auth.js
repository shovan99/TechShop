const express = require("express")
const router = express.Router()

const { registerUser , loginUser , logoutUser , isAuthenticated , getUsersProfile , updateProfile} = require("../controllers/auth")

router.post("/register" , registerUser)

router.post("/login" , loginUser)

router.get("/logout" , logoutUser)

router.get("/profile" , isAuthenticated , getUsersProfile)

router.put("/profile/update/:id" , updateProfile)

module.exports = router