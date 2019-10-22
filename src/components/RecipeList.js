import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import RecipeCard from './RecipeCard';

const RecipeContainer = styled.div`
    display: flex;
    background: #c7720f;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    
`
const RecipeName = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
`

function RecipeList(props) {
    return(
        <RecipeContainer>
            {/* {card.map(item => (
                <div key = {card.id}>
                    <Link to = {`/`}>
                        <RecipeName>{card.recipe_name}</RecipeName>
                    </Link>
                </div>
            ))} */}
        </RecipeContainer>
    )
}

export default RecipeList;