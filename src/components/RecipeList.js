import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { Context } from "../utils"

const RecipeContainer = styled.div`
    padding:100px 0;
    display: flex;
    background: #f2e2ce;
    width: 100%;
    height: 80vh;
    border-radius: 10px;
    flex-wrap:wrap;
`

const AddCard = styled.div`
    width: 250px;
    height: 400px;
    display:flex;
    border:2px solid #fff;
    color:#fff;
    justify-content:center;
    align-items:center;
    font-size:3rem;
    border-radius:15px;
    transition:.5s ease;
    cursor:pointer;
    position:relative;
    margin-right:50px;
    margin-top:50px;

    h1{
        position:absolute;
        top:20px;
        font-size:1.4rem;
    }

    &:hover{
        background:#fff9;
        color:gray;
    }
`


function RecipeList(props) {

    const ctx = useContext(Context);

    return (
        <RecipeContainer>
            <AddCard >
                <h1>Add New Recipe</h1>
                <p>+</p>
            </AddCard>

            {ctx.state["show recipes"].map(item => (
                <div key={item.id}>
                    <RecipeCard card={item}></RecipeCard>
                </div>
            ))}
        </RecipeContainer>
    )
}

export default RecipeList;