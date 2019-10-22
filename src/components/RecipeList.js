import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
            {/* map over items here */}
            <Link to = {`/`}>
                <RecipeName>Recipe Name</RecipeName>
            </Link>
        </RecipeContainer>
    )
}

export default RecipeList;