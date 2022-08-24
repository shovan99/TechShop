export const getAllPizzaReducer = ( state = { pizzas: [] } , action ) => {
    switch( action.type ) {
        case "GET_PIZZAS_REQUEST":
            return {
                ...state,
                pizzas: null,
                loading: true
            }
        case "GET_PIZZAS_SUCCESS":
            return {
                pizzas: action.payload,
                loading: false
            }
        case "GET_PIZZAS_FAILED":
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export const getProductReducer = ( state= { product: {} } , action ) => {
    switch( action.type ) {
        case "GET_PRODUCT_REQUEST":
            return {
                loading: true
            }
        case "GET_PRODUCT_SUCCESS":
            return {
                loading: false,
                product: action.payload
            }
        case "GET_PRODUCT_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}