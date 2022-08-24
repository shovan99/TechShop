import React from 'react'
import StripeCheckout from "react-stripe-checkout"

import { useDispatch , useSelector } from "react-redux"

import { placeOrder } from "../actions/orderAction"

import Spinner from "react-bootstrap/Spinner"

import Alert from "react-bootstrap/Alert"

const Checkout = ({ subtotal }) => {

    const orderstate = useSelector(state => state.placeOrderReducer)

    const loginuserstate = useSelector(state => state.loginUserReducer)

    const { loading , error , success } = orderstate

    const { user } = loginuserstate
    
    const dispatch = useDispatch()

    function tokenHandler(token) {
        
        console.log(token)
        
        dispatch(placeOrder(token , subtotal))
    }
    return (
        <div>
            { error && <Alert variant="warning"> {error} </Alert> }
            { loading && <Spinner animation="border" variant="success"/> }
            { success && <Alert variant="success"> Your Order Placed Successfully </Alert> }
            <StripeCheckout
                amount={subtotal*100}
                shippingAddress
                token={tokenHandler}
                currency="INR"
                stripeKey="pk_test_51IznjcSHBC2uNERISG6QRB2PxPOHjuTtwg5x8OUieKXDoMgOXkGIdeC51ZRS4GiWYfhKDGedgfmRc2lF9z0ZgoTh00sFgg2o3Z"
                email={user.email}
                country="India"
            >
                <a className="btn buttonClass"> Pay Now ₹{subtotal} </a>
            </StripeCheckout>
        </div>
    )
}

export default Checkout
