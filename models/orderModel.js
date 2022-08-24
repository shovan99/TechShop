const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    orderItems: [],
    shippingAddress: {
        type: Object
    },
    orderAmount: {
        type: Number,
        required: true
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    transactionId: {
        type: String,
        required: true
    }
} , { timestamps: true })


const Order = mongoose.model("Order" , orderSchema)

module.exports = Order