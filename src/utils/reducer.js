const reducer = (state = { recipes: [] }, action) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                ...action.payload
            }
            break;
        case "ADD":
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    ...action.payload
                ],
                "show recipes": [
                    ...state.recipes,
                    ...action.payload
                ]
            }
            break;
        case "EDIT":
            return {
                ...state,
                recipes: [
                    ...state.recipes.map(v => {
                        if (v.id == action.payload.id) return action.payload
                    })
                ]
            }
            break
        case "DELETE":
            return {
                ...state,
                recipes: [
                    ...state.cards.filter(v => {
                        return v.id != action.payload.id
                    })
                ]
            }
            break
        case "UPDATE_SHOW":
            return {
                ...state,
                "show recipes": [
                    ...action.payload
                ]
            }
            break
        default:
            return {
                ...state
            }
    }
}

export default reducer;