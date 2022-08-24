export const addToCart = ( pizza , quantity ) => ( dispatch, getState ) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        price: pizza.price,
        image: pizza.image,
        quantity: quantity,
        totalprice: pizza.price * quantity
    }
    dispatch({ type: "ADD_TO_CART" , payload: cartItem })
    const cartItems = getState().addToCartReducer.cartItems

    localStorage.setItem("cartItems" , JSON.stringify(cartItems))
}

export const deleteFromCart = ( pizza ) => ( dispatch ) => {
    dispatch({ type: "DELETE_FROM_CART" , payload: pizza })
}