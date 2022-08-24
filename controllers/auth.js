const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

exports.registerUser = async( req , res ) => {
    const { name , email , password , profilePic } = req.body
    if( !name || !email || !password || !profilePic ) {
        return res.status(400).json({
            error: "All Details Are Required"
        })
    }

    const isUser = await User.findOne({ email: email })
    
    if( isUser ) {
        return res.status(400).json({
            error: "User Already Exists DB"
        })
    }

    var encryPass = await bcrypt.hash(password , 10)

    const user = await new User({
        name: name,
        email: email,
        password: encryPass,
        profilePic: profilePic
    })

    await user.save(( err , user ) => {
        if( err ) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            message: "User Created"
        })
    })
}

exports.loginUser = async( req , res ) => {
    const { email , password } = req.body
    if( !email || !password ) {
        return res.status(400).json({
            error: "All Fields Are Required"
        })
    }

    const isUser = await User.findOne({ email: email })

    if( !isUser ) {
        return res.status(400).json({
            error: "User Not Registered DB"
        })
    }


    const validatePassword = await bcrypt.compare(password , isUser.password)

    if( !validatePassword ) {
        return res.status(400).json({
            error: "Enter All Details Correctly"
        })
    }

    const token = await jwt.sign({ user: isUser } , "sjgsyfshhjsjyt" , { expiresIn: new Date() * 44 })
    res.cookie("token" , token , { expire: new Date() * 44 })

    res.status(200).json({
        message: "Login Done",
        token,
        isUser
    })
}


exports.isAuthenticated = async( req , res , next ) => {
    const { token } = req.cookies
    if( !token ) {
        return res.status(400).json({
            message: "Login First"
        })
    }
    const decodedToken = await jwt.verify(token , "sjgsyfshhjsjyt")
    req.user = await User.findById(decodedToken.user._id)

    next()
}


exports.logoutUser = ( req , res ) => {
    res.cookie("token" , null , {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        message: "Signout Done"
    })
}

exports.getUsersProfile = async( req , res ) => {
    
    console.log(req.user + "req.user")
    const user = await User.findById(req.user._id)
    res.status(200).json({
        user,
        success: true
    })
}

exports.updateProfile = async( req , res ) => {
    await User.findByIdAndUpdate({ _id: req.params.id } , {
        $set: req.body
    } , {
        new: true,
        useFindAndModify: false
    } , ( err , updatedProfile ) => {
        if( err ) {
            return res.status(400).json({
                error: "Profile Is Not Updated"
            })
        }
        res.status(200).json({ message: "Profile Updated" })
    })
}