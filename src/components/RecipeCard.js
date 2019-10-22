import React from 'react';
import styled from 'styled-components';
import {Edit} from 'styled-icons/boxicons-regular/Edit';

const CardContainer = styled.div`
    display: flex;
    background: #3F043C;
    flex-direction: column;
    width: 250px;
    height: 400px;
    border-radius: 15px;
    padding: 5px;
    color: white;
`
const CardTitle = styled.h2`
    display: flex;
    justify-content: center;
`
const IngredientsUL = styled.ul`
    background: #D85505;
`
const IngredientsLI = styled.li`
    list-style-type: square;
`


function RecipeCard(props) {
    const card = 'use find for the id here';

    return (
        <CardContainer>
            <div className = 'card-title'>
                <CardTitle>Recipe Title</CardTitle>
            </div>
            <div className = 'card-author'>
                <h3>By : author</h3>
            </div>
            <div className = 'ingredients'>
                <IngredientsUL>
                    <IngredientsLI>ingredient 1</IngredientsLI>
                    <IngredientsLI>ingredient 2</IngredientsLI>
                    <IngredientsLI>ingredient 3</IngredientsLI>
                    <IngredientsLI>ingredient 4</IngredientsLI>
                    <IngredientsLI>ingredient 5</IngredientsLI>
                </IngredientsUL>
            </div>
            <div className = 'instructions'>
                <p>Instructions: </p>
            </div>
        </CardContainer>
    )
}



export default RecipeCard;