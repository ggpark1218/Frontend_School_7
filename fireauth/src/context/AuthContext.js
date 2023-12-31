import { createContext, useReducer } from "react";

const AuthContext = createContext();

// 리듀서 함수
const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }
        default:
            return state
    }
}

const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { user: null })

    console.log('context state: ', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }