import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { Context } from "../utils"

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

    const ctx = useContext(Context);

    return (
        <RecipeContainer>
            {ctx.state["show recipes"].map(item => (
                <div key={item.id}>
                    <RecipeCard card={item}></RecipeCard>
                </div>
            ))}
        </RecipeContainer>
    )
}

export default RecipeList;