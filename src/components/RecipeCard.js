import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


function RecipeCard(props) {
    const card = '';

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
            <div className = 'instructions'>
                <p>Instructions</p>
            </div>
        </div>
    )
}



export default RecipeCard;