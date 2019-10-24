
const reducer = (state = {}, action = { type: "" }) => {

    switch (action.type) {
        case "INIT":
            localStorage.setItem("recipes", JSON.stringify(action.payload))
            localStorage.setItem("show recipes", JSON.stringify(action.payload))
            return {
                recipes: [
                    ...action.payload
                ],
                "show recipes": [
                    ...action.payload
                ]
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
        case "ADD_NEW_USER": 
            state.user = state.user || {}
            localStorage.setItem('user', JSON.stringify({
                ...action.payload
            }))
            console.log(action.payload)
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
            break
        case "EDIT":
            state.recipes = JSON.parse(localStorage.getItem("recipes")) || []
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
            // state.recipes = JSON.parse(localStorage.getItem("recipes")) || []

            localStorage.setItem("show recipes", JSON.stringify([
                ...state.recipes.filter(v => { return v.id != action.payload})
            ]))

            return {
                ...state,
                recipes: [
                    ...state.recipes.filter(v => { return v.id != action.payload})
                ],
                "show recipes": [
                    ...state.recipes.filter(v => { return v.id != action.payload})
                ]    
            }
            break
        case "UPDATE_SHOW":
            state.recipes = JSON.parse(localStorage.getItem("recipes")) || []

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

