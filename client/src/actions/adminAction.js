const axios = require("axios")


export const loadAllUsers = (  ) => async( dispatch ) => {
    try {
        dispatch({ type: "LOAD_ALL_USER_REQUEST" })
        const response = await axios.get("/api/users/all")
        console.log(response.data.users)
        dispatch({ type: "LOAD_ALL_USER_SUCCESS" , payload: response.data.users })
    }catch( error ) {
        dispatch({ type: "LOAD_ALL_USER_FAIL" , payload: "Server Error" })
    }
}


export const createProduct = ( product ) => async( dispatch ) => {
    try {
        dispatch({ type: "CREATE_PRODUCT_REQUEST" })
        const response = await axios.post("/api/pizzas/create" , product)
        dispatch({ type: "CREATE_PRODUCT_SUCCESS" , payload: response.data.message })
        
        setTimeout(() => {
            dispatch({ type: "CLEAR_ERRORS" })
        }, 4000);
    }
    catch( error ) {
        dispatch({ type: "CREATE_PRODUCT_FAIL" , payload: "Server Error" })
        setTimeout(() => {
            dispatch({ type: "CLEAR_ERRORS" })
        }, 4000);
    }
}

export const getAllProducts = (  ) => async( dispatch ) => {
    try {
        dispatch({ type: "PRODUCT_LOAD_REQUEST" })
        const response = await axios.get("/api/products/all")
        console.log(response.data.products)
        dispatch({ type: "PRODUCT_LOAD_SUCCESS" , payload: response.data.products })
    }catch( error ) {
        dispatch({ type: "PRODUCT_LOAD_FAIL" , payload: "Server Error" })
    }
}


export const removeProduct = ( id ) => async( dispatch ) => {
    try{
        dispatch({ type: "REMOVE_PRODUCT_REQUEST" })

        const response = await axios.delete(`/api/product/remove/${id}`)

        if( !response.data.error ) {
            dispatch({ type: "REMOVE_PRODUCT_SUCCESS" , payload: "Product Removed" })
            setTimeout(() => {
                dispatch({ type: "REMOVE_CLEAR_ERRORS" })
            }, 4000);
        }
    }
    catch( error ) {
        dispatch({ type: "REMOVE_PRODUCT_FAIL" , payload: "Server Error" })
        setTimeout(() => {
            dispatch({ type: "REMOVE_CLEAR_ERRORS" })
        }, 4000);
    }
}

export const getAllOrders = (  ) => async( dispatch ) => {
    try{
        dispatch({ type: "LOAD_ORDERS_REQUEST" })
        const response = await axios.get("/api/orders/all")

        dispatch({ type: "LOAD_ORDERS_SUCCESS" , payload: response.data.orders })
    }catch( error ) {
        dispatch({ type: "LOAD_ORDERS_FAIL" , payload: "Server Error" })
    }
}

export const updateProduct = ( id , updatedData ) => async( dispatch ) => {
    try {
        dispatch({ type: "UPDATE_PRODUCT_REQUEST" })
        const response = await axios.put(`/api/product/${id}` , updatedData)
        dispatch({ type: "UPDATE_PRODUCT_SUCCESS" , payload: response.data.message })

        setTimeout(() => {
            dispatch({ type: "REMOVE_UPDATE_ERRORS" })
        },4000)
    }
    catch( error ) {
        dispatch({ type: "UPDATE_PRODUCT_FAIL" , payload: "Server Error" })
        setTimeout(() => {
            dispatch({ type: "REMOVE_UPDATE_ERRORS" })
        },4000)
    }
}

export const removeUser = ( id ) => async( dispatch ) => {
    try{
        dispatch({ type: "REMOVE_USER_REQUEST" })

        const response = await axios.delete(`/api/user/${id}`)

        dispatch({ type: "REMOVE_USER_SUCCESS" , payload: response.data.message })
        
        setTimeout(() => {
            dispatch({ type: "REMOVE_USER_ERRORS" })
        },4000)
    }
    catch( error ) {
        dispatch({ type: "REMOVE_USER_FAIL" , error: "Server Error" })
        setTimeout(() => {
            dispatch({ type: "REMOVE_USER_ERRORS" })
        },4000)
    }
}