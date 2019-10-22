import React, { useReducer } from "react";
import { reducer } from "../utils";

function SearchForm(props) {
    const [state, dispatch] = useReducer(reducer);

    //need a piece of state called data 

    function handleChange(e) {
        let input = e.target.value;
        let filtered = state.data.filter(value => {
            let obj = input.split("").reduce((acc, val) => {
                return {
                    ...acc,
                    [val]: 1
                }
            })

            for (let letter in obj) {
                if (!value.title.includes(letter)) {
                    return false;
                }
            }
            return true;

        }, {})

        dispatch({
            type: "UPDATE_SHOW",
            payload: filtered
        })
    }


    return (
        <input onChange={handleChange} type="text" placeholder="Search" autofill="on" name="search" />
    )
}

export default SearchForm;