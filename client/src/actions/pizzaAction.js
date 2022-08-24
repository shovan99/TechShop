import axios from "axios"


export const getAllPizzas = () => async( dispatch ) => {
    dispatch({ type: "GET_PIZZAS_REQUEST" })

    try {
        const response = await axios.get("/api/pizzas/all")
        console.log(response)

        dispatch({ type: "GET_PIZZAS_SUCCESS" , payload: response.data.pizzas })
    } catch( error ) {
        dispatch({ type: "GET_PIZZAS_FAILED" , payload: error })
    }
}


export const filterPizzas = ( searchKey , category ) => async( dispatch ) => {
    var filteredPizzas;
    dispatch({ type: "GET_PIZZAS_REQUEST" })

    try {
        const response = await axios.get("/api/pizzas/all")
        filteredPizzas = await response.data.pizzas.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
        if( category!=="all" ) {
            filteredPizzas = await filteredPizzas.filter(pizza => pizza.category.toLowerCase()===category.toLowerCase())
        }
        dispatch({ type: "GET_PIZZAS_SUCCESS" , payload: filteredPizzas })
    }catch( error ) {
        dispatch({ type: "GET_PIZZAS_FAILED" , payload: error })
    }
}


export const getProduct = ( id ) => async( dispatch ) => {
    try {
        dispatch({ type: "GET_PRODUCT_REQUEST" })
        const response = await axios.get(`/api/product/${id}`)
        dispatch({ type: "GET_PRODUCT_SUCCESS" , payload: response.data.product })
    }
    catch( error ) {
        dispatch({ type: "GET_PRODUCT_FAIL" , payload: "Server Error" })
    }
}