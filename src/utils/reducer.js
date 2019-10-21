import react, { useReducer } from "react";


export default reducer = (state = {}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                recipes: [
                    ...action.payload
                ]
            }
            break;
        case "ADD":
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.payload
                ]
            }
            break;
        default:
            return {
                ...state
            }
    }
}