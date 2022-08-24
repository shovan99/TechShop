import React , { useState , useEffect } from 'react'
import { useDispatch , useSelector } from "react-redux"

import { getUserOrders } from "../actions/orderAction"

import Spinner from "react-bootstrap/Spinner"

import Alert from "react-bootstrap/Alert"

const Order = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrders())
    },[])

    const orderstate = useSelector(state => state.getUserOrdersReducer)

    const { loading , orders , error } = orderstate

    return (
        <div style={{ marginTop: "100px" }}>
            { orders.length === 0 && <h2 className="headingClass text-center"> Your Account Doesn't Have Any Orders </h2> }
            { loading ? (
                <Spinner animation="border" className="m-auto pe-auto" variant="success"/>
            ) : (
                orders.map(order => (
                    <div className="card bg-success text-light m-4 p-2 container">
                    <div className="row">
                        <div className="col-6">
                        <h4> Ordered Items </h4>
                        <hr className="mt-0 mb-0"/>
                        { order.orderItems.map(orderItem => (
                            <p> {orderItem.name} </p>
                        )) }
                        </div>
                        <div className="col-6">
                            <h4> Total Amount </h4>
                            <hr className="mt-0 mb-0"/>
                            <h2> ₹ {order.orderAmount} </h2>
                            <h6> Shipping Address </h6>
                            <hr className="mt-0 mb-0"/>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <h6> Street Name: {order.shippingAddress.street} </h6>
                                    <h6> City Name: {order.shippingAddress.city} </h6>
                                </div>
                                <div className="col-6">
                                    <h6> Country Name: {order.shippingAddress.country} </h6>
                                    <h6> Zip Code: {order.shippingAddress.pincode} </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Order