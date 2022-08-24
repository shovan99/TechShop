import { combineReducers , createStore , applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"

import { getAllPizzaReducer , getProductReducer } from "./reducers/pizzaReducer"

import { addToCartReducer } from "./reducers/cartReducer"

import { loginUserReducer } from "./reducers/authReducer"

import { placeOrderReducer , getUserOrdersReducer } from "./reducers/orderReducer"

import { getAllUserReducer , createProductReducer , getAllProductsReducer , removeProductReducer , loadOrdersReducer , updateProductReducer , removeUserReducer } from "./reducers/adminReducer"

const reducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    addToCartReducer: addToCartReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    getAllUserReducer: getAllUserReducer,
    createProductReducer: createProductReducer,
    getAllProductsReducer: getAllProductsReducer,
    removeProductReducer: removeProductReducer,
    loadOrdersReducer: loadOrdersReducer,
    getProductReducer: getProductReducer,
    updateProductReducer: updateProductReducer,
    removeUserReducer: removeUserReducer
})
const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
    addToCartReducer: {
        cartItems: cartItems
    }
}

const middleware = [thunk]

const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(...middleware)))

export default store