const express = require("express")
const router = express.Router()

const { placeOrder , getUserOrders , getAllOrders } = require("../controllers/order")

router.post("/order/placeorder" , placeOrder)

router.post("/orders/getuserorders" , getUserOrders)

router.get("/orders/all" , getAllOrders)

module.exports = router