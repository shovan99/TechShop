export const loginUserReducer = ( state= { user: {} } , action ) => {
    switch( action.type ) {
        case "LOGIN_USER_REQUSET":
        case "REGISTER_USER_REQUEST":
        case "LOAD_USER_REQUEST":
            return {
                loading: true,
                isAuthenticated: false
            }
        case "REGISTER_USER_SUCCESS":
            return {
                loading: false,
                registerSuccess: true
            }
        case "LOGIN_USER_SUCCESS":
        case "LOAD_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                loginSuccess: "true",
                user: action.payload
            }
        case "LOGOUT_USER_SUCCESS":
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }
        case "LOGIN_USER_FAIL":
        case "LOGOUT_USER_FAIL":
        case "REGISTER_USER_FAIL":
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case "LOAD_USER_FAIL":
            return {
                isAuthenticated: null,
                error: action.payload,
                user: null
            }
        case "REMOVE_AUTH_ERRORS":
            return {
                loading: false,
                registerSuccess: false,
                loginSuccess: false,
                error: false
            }
        default:
            return state
    }
}
