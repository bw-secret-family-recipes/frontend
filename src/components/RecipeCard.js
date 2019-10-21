import React from 'react';
import styled from 'styled-components';

function RecipeCard() {


    return (
        <div className = 'card-wrapper'>
            <div className = 'card-title'>
                <h2>Recipe Title</h2>
            </div>
            <div className = 'card-author'>
                <h3>By : author</h3>
            </div>
            <div className = 'ingredients'>
                <ul>
                    <li>ingredient 1</li>
                    <li>ingredient 2</li>
                    <li>ingredient 3</li>
                    <li>ingredient 4</li>
                    <li>ingredient 5</li>
                </ul>
            </div>
        </div>
    )
}



export default RecipeCard;