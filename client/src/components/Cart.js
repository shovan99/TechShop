import React , { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteFromCart } from "../actions/cartAction"

import Checkout from "./Checkout";

const Cart = () => {
  const dispatch = useDispatch();

  const cartstate = useSelector(state => state.addToCartReducer);

  const cartItems = cartstate.cartItems
  

  const subtotal = cartItems.reduce((x , item) => x + item.price*item.quantity , 0)
  
  return (
    <div className="row" style={{ marginTop: "100px" }}>
    <h2 style={{ fontSize: "40px" , fontWeight: "bold" }} className="headingClass"> Cart Items </h2>
    <hr/>
      <div className="col-lg-6 col-sm-12">
        <div className="card" style={{ width: "24rem" }}>
          { cartItems.length === 0 && <h4 className="headingClass text-center"> Your Cart Is Empty </h4> }
          {cartItems.map((cartItem) => (
            <div className="d-flex">
            <div className="card-body">
              <h4 className="card-title"> {cartItem.name} </h4>
              <p className="card-text">
                Price: {cartItem.price} * {cartItem.quantity} = {cartItem.price * cartItem.quantity}
              </p>
              <hr style={{ margin: "0px" , height: "4px" }}/>
            </div>
            <div>
                <img src={cartItem.image} alt="cart_logo" style={{ height: "80px" , width:"80px" , margin: "10px" , borderRadius: "50%" }}/>
            </div>
            <i className="fa fa-trash m-2" style={{ cursor: "pointer" }} onClick={() => { dispatch(deleteFromCart(cartItem)) }} aria-hidden="true"></i>
            </div>
          ))}
      </div>
      </div>
      <div className="col-lg-4 col-sm-12 mt-4">
        <h2> Total Amount </h2>
        { subtotal>0 && <Checkout subtotal={subtotal}/> }
        <hr/>
      </div>
    </div>
  );
};

export default Cart;
