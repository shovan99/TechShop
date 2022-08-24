import axios from "axios"


export const placeOrder = ( token , subtotal ) => async( dispatch , getState ) => {
    dispatch({ type: "PLACE_ORDER_REQUEST" })
    const currentUser = getState().loginUserReducer.user
    
    const cartItems = getState().addToCartReducer.cartItems

    try {
        
        const response = await axios.post("/api/order/placeorder" , { token , subtotal , currentUser , cartItems })
        
        console.log(response)

        dispatch({ type: "PLACE_ORDER_SUCCESS" })

        setTimeout(() => {
            dispatch({ type: "PLACE_ORDER_CLEAR" })
        }, 4000);

    } catch( error ) {
        dispatch({ type: "PLACE_ORDER_FAILED" , payload: "Your Order Not Placed" })
        console.log(error)
    }
}


export const getUserOrders = (  ) => async( dispatch , getState ) => {
    const currentUser = getState().loginUserReducer.user
    dispatch({ type: "GET_USER_ORDERS_REQUEST" })

    try {
        const response = await axios.post("/api/orders/getuserorders" , { userId: currentUser._id })
        console.log(response)

        dispatch({ type: "GET_USER_ORDERS_SUCCESS" , payload: response.data })
    }catch( error ) {
        dispatch({ type: "GET_ORDER_REQUSET_FAILED" , payload: error })
    }
}