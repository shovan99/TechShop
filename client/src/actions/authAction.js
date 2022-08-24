import axios from "axios"


export const registerUser = ( user ) => async( dispatch ) => {
    dispatch({ type: "REGISTER_USER_REQUEST" })
    try {
        await axios.post("/api/register" , user)
        dispatch({ type: "REGISTER_USER_SUCCESS" })
        setTimeout(() => {
            dispatch({ type: "REMOVE_AUTH_ERRORS" })
        },4000)
    }catch( error ) {
        dispatch({ type: "REGISTER_USER_FAIL" , payload: "Unable To Register User Try Again" })
        setTimeout(() => {
            dispatch({ type: "REMOVE_AUTH_ERRORS" })
        },4000)
    }
}

export const loginUser = ( user ) => async( dispatch ) => {
    dispatch({ type: "LOGIN_USER_REQUEST" })
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post("/api/login" , user , config)
        dispatch({ type: "LOGIN_USER_SUCCESS" , payload: data.isUser })
        setTimeout(() => {
            dispatch({ type: "REMOVE_AUTH_ERRORS" })
        },4000)
    } catch( error ) {
        dispatch({ type: "LOGIN_USER_FAIL" , payload: "Try Again" })
        setTimeout(() => {
            dispatch({ type: "REMOVE_AUTH_ERRORS" })
        },4000)
    }
}


export const logoutUser = (  ) => async( dispatch ) => {
    try {
        await axios.get("/api/logout")
        dispatch({ type: "LOGOUT_USER_SUCCESS" })
    }catch( error ) {
        dispatch({ type: "LOGOUT_USER_FAIL" })
    }
}


export const loadUser = (  ) => async( dispatch ) => {
    try {
        dispatch({ type: "LOAD_USER_REQUEST" })
        const response = await axios.get("/api/profile")
        console.log(response.data.user)
        dispatch({ type: "LOAD_USER_SUCCESS" , payload: response.data.user})
    }
    catch( error ) {
        dispatch({ type: "LOAD_USER_FAIL" , payload: "Server Error" })
    }
}