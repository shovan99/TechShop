const express = require("express")
const router = express.Router()

const { getAllUsers , removeUser } = require("../controllers/user")

router.get("/users/all" , getAllUsers)

router.delete("/user/:id" , removeUser)

module.exports = router