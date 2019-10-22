import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { Context } from "../utils"

const Card


function RecipeList(props) {

    const ctx = useContext(Context);

    return (
        <>
            {ctx.state["show recipes"].map(item => (
                <div key={item.id}>
                    <RecipeCard card={item}></RecipeCard>
                </div>
            ))}
        </>
    )
}

export default RecipeList;