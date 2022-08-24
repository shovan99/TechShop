const express = require("express")
const mongoose = require("mongoose")

const cookieparser = require("cookie-parser")

const pizzaRoutes = require("./routes/pizza")

const authRoutes = require("./routes/auth")

const orderRoutes = require("./routes/order")

const userRoutes = require("./routes/user")

const app = express()

app.use(express.json())

app.use(cookieparser())

app.use("/api" , pizzaRoutes)

app.use("/api" , authRoutes)

app.use("/api" , orderRoutes)

app.use("/api" , userRoutes)

mongoose.connect("mongodb+srv://shovan99:shovan99@cluster0.cux3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" , { useNewUrlParser: true , useUnifiedTopology: true }).then(() => { console.log("Database Connected") }).catch(error => { console.log("Database Is Not Connected") })

app.listen(8000 , () => {
    console.log("Server Is Running On Port 8000")
})