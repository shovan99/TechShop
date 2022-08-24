const User = require("../models/userModel")


exports.getAllUsers = async( req , res ) => {
    const users = await User.find()
    res.status(200).json({
        users
    })
}


exports.removeUser = async( req , res ) => {
    const user = await User.findByIdAndRemove(req.params.id)
    if( !user ) {
        return res.status(400).json({
            error: "User Is Not Removed"
        })
    }
    res.status(200).json({
        message: "User Removed"
    })
}