import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from "../utils"

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    align-items: center;
    background: #d85505;
`;
const WrapBox = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor:pointer;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #8ec63f;
    padding:20px 10px;
    h4 {
        margin-left: 5%;
        width: 65%;
    }
    :hover {
        color: #8ec63f;
    }
`;

const DashNav = () => {

    const ctx = useContext(Context)

    function handleClick(keyword) {
        let filtered = ctx.state.recipes.filter(rec => {
            if (keyword == "new recipe" || keyword == "sort") return true;
            return rec.categories.map(v => v.toLowerCase()).includes(keyword)
        })

        ctx.dispatch({
            type: "UPDATE_SHOW",
            payload: filtered
        })
    }

    return (
        <Wrap>
            <WrapBox onClick={() => handleClick("new recipe")}>
                <h4>New Recipe</h4>
                <i className="material-icons md-24">new_releases</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("sort")}>
                <h4>Sort</h4>
                <i className="material-icons md-24">sort</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("breakfast")}>
                <h4>BreakFast</h4>
                <i className="material-icons md-24">brightness_low</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("lunch")}>
                <h4>Lunch</h4>
                <i className="material-icons md-24">local_pizza</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("dinner")}>
                <h4>Dinner</h4>
                <i className="material-icons md-24">fastfood</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("snack")}>
                <h4>Snacks</h4>
                <i className="material-icons md-24">broken_image</i>
            </WrapBox>
        </Wrap>
    )
}
export default DashNav