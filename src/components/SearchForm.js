import React, { useContext } from "react";
import { reducer } from "../utils";
import { Context } from "../utils"

function SearchForm(props) {
    const ctx = useContext(Context);

    //need a piece of state called data 

    function handleChange(e) {
        let input = e.target.value;
        let filtered = ctx.state.recipes.filter(value => {
            if (!input) return true
            let obj = input.toLowerCase().split("").reduce((acc, val) => {
                return {
                    ...acc,
                    [val]: 1
                }
            }, {})


            for (let letter in obj) {
                if (!value["recipe_name"].toLowerCase().includes(letter)) {
                    return false;
                }
            }
            return true;

        }, {})

        ctx.dispatch({
            type: "UPDATE_SHOW",
            payload: filtered
        })
    }


    return (
        <input onChange={handleChange} type="text" placeholder="Search" autofill="on" name="search" />
    )
}

export default SearchForm;