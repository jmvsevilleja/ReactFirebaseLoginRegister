// import
import {createContext, useReducer} from "react";

// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: null}
        default:
            return state
    }
}

// inital state
const initalState = {
    user: null
}

// create context
const Context = createContext({})

// context provider
const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initalState)
    const value = {state, dispatch}
    return <Context.Provider value={value}>{children}</Context.Provider>
};

export {Context, Provider}