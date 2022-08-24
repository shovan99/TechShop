export const getAllUserReducer = ( state={ users: [] } , action ) => {
    switch( action.type ) {
        case "LOAD_ALL_USER_REQUEST":
            return {
                loading: true,
                success: false
            }
        case "LOAD_ALL_USER_SUCCESS":
            return {
                loading: false,
                users: action.payload,
                success: true
            }
        case "LOAD_ALL_USER_FAIL":
            return {
                loading: false,
            }
        default:
            return state
    }
}


export const createProductReducer = ( state={ product: {} } , action ) => {
    switch( action.type ) {
        case "CREATE_PRODUCT_REQUEST":
            return {
                loading: true
            }
        case "CREATE_PRODUCT_SUCCESS":
            return {
                loading: false,
                product: action.payload,
                success: true
            }
        case "CREATE_PRODUCT_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        case "CLEAR_ERRORS":
            return {
                success: false,
                error: false
            }
        default:
            return state
    }
}


export const getAllProductsReducer = ( state={ products: [] } , action ) => {
    switch( action.type ) {
        case "PRODUCT_LOAD_REQUEST":
            return {
                loading: true
            }
        case "PRODUCT_LOAD_SUCCESS":
            return {
                success: true,
                products: action.payload,
                loading: false
            }
        case "PRODUCT_LOAD_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const removeProductReducer = ( state= {} , action ) => {
    switch( action.type ) {
        case "REMOVE_PRODUCT_REQUEST":
            return {
                loading: true
            }
        case "REMOVE_PRODUCT_SUCCESS":
            return {
                rmsuccess: action.payload,
                rmloading: false
            }
        case "REMOVE_PRODUCT_FAIL":
            return {
                rmerror: action.payload,
                rmloading: false
            }
        case "REMOVE_CLEAR_ERRORS":
            return {
                rmsuccess: false,
                rmloading: false
            }
        default:
            return state
    }
}

export const loadOrdersReducer = ( state={ orders: {} } , action ) => {
    switch( action.type ) {
        case "LOAD_ORDERS_REQUEST":
            return {
                loading: true
            }
        case "LOAD_ORDERS_SUCCESS":
            return {
                success: true,
                orders: action.payload,
                loading: false
            }
        case "LOAD_ORDERS_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const updateProductReducer = ( state= { product: {} } , action ) => {
    switch( action.type ) {
        case "UPDATE_PRODUCT_REQUEST":
            return {
                loading: true
            }
        case "UPDATE_PRODUCT_SUCCESS":
            return {
                loading: false,
                success: action.payload
            }
        case "UPDATE_PRODUCT_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        case "REMOVE_UPDATE_ERRORS":
            return {
                loading: false,
                success: false,
                error: false,
            }
        default:
            return state
    }
}


export const removeUserReducer = ( state= {} , action ) => {
    switch( action.type ) {
        case "REMOVE_USER_REQUEST":
            return {
                loading: true
            }
        case "REMOVE_USER_SUCCESS":
            return {
                loading: false,
                success: action.payload
            }
        case "REMOVE_USER_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        case "REMOVE_USER_ERRORS":
            return {
                loading: false,
                error: false,
                success: false,
            }
        default:
            return state
    }
}