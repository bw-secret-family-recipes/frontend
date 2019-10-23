
const reducer = (state = {}, action = { type: "" }) => {

    switch (action.type) {
        case "INIT":
            localStorage.setItem("recipes", JSON.stringify(action.payload))
            return {
                ...state,
                ...action.payload
            }
            break;
        case "ADD":
            state.recipes = state.recipes || []
            localStorage.setItem("recipes", JSON.stringify([
                ...state.recipes,
                ...action.payload
            ]))

            localStorage.setItem("show recipes", JSON.stringify([
                ...state.recipes,
                ...action.payload
            ]))

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

reducer()
export default reducer;

