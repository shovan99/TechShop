const Order = require("../models/orderModel")
const stripe = require("stripe")("sk_test_51IznjcSHBC2uNERIFHZvX7QXtCPtNIWtDQncmGvZ4bTmZvhONcWdAh6WIMXob5A3BmXiGbSkJctqWbLkpTt4vFhi00mJaNZvMZ")

const { v4: uuidv4 } = require("uuid")

exports.placeOrder = async( req , res ) => {
    const { token , subtotal , currentUser , cartItems } = req.body


    console.log(currentUser)
    
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create({
            amount: subtotal*100,
            currency: "INR",
            customer: customer.id,
            receipt_email: token.email
        },{
            idempotencyKey: uuidv4()
        })
        if( payment ) {
            const order = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userId: currentUser._id,
                orderItems: cartItems,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                transactionId: payment.source.id,
                orderAmount: subtotal,
                isDelivered: false,
            })
            order.save()

            res.status(200).json({
                
                success: "Order Placed"
            })
        }
    } catch( error ) {
        console.log(error)
    }
}


exports.getUserOrders = async( req , res ) => {
    const { userId } = req.body
    try {
        
        const orders = await Order.find({ userId: userId })

        res.send(orders)
    }catch( error ) {

        res.status(400).json({
            error: error
        })
    }
}

exports.getAllOrders = async( req , res ) => {
    const orders = await Order.find()
    res.status(200).json({
        orders
    })
}