const INITIAL_STATE = {
    userToken: "",
    userId: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userAdmin: false,
    userLogged: false
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "login":
            return {
                //...state,
                userToken: action.userToken,
                userId: action.userId,
                userEmail: action.userEmail,
                userName: action.userName,
                userPhone: action.userPhone,
                userAdmin: action.userAdmin,
                userLogged: true
            }

        case "logout":
            return {
                ...INITIAL_STATE
            }
    
        default:
            return state
    }
}