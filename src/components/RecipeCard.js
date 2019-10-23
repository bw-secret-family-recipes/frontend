import React, { useState, useContext } from 'react';
import styled from 'styled-components';

// import {Edit} from 'styled-icons/boxicons-regular/Edit';
import { axiosAuth, Context } from "../utils"

const CardContainer = styled.div`
    overflow:auto;
    display: flex;
    background: #3F043C;
    flex-direction: column;
    width: 250px;
    height: 400px;
    margin: 5%
    border-radius: 15px;
    padding: 5px;
    color: white;
    margin-right:50px;
    margin-top:50px;

    .ingredients{
        width:100%;
        min-height:150px;
        overflow:auto;
    }

    .card-title{
        background:url(https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80) 100% / cover;
        h2{
            background:#0005;
            color:white;
        }
    }
`
const CardTitle = styled.h2`
    display: flex;
    justify-content: center;
`
const IngredientsUL = styled.ul`
    height:auto;
    background: #D85505;
`
const IngredientsLI = styled.li`
    list-style-type: square;
`
const ButtonContainer = styled.div`
    justify-content: space-between;
    padding: 5px;
    
`


const EditButton = styled.button`
    background: white;
    padding: 5px;
    margin-right: 10px;
    font-size: 30px;
    border: 3px solid black;
    border-radius: 15px;

    &:hover{
        background: darkgrey;
        transition: .5s;
    }
`

const DeleteButton = styled.button`
    background: white;
    padding: 5px;
    margin-right: 10px;
    font-size: 30px;
    border: 3px solid black;
    border-radius: 15px;

    &:hover{
        background: darkgrey;
        transition: .5s;
    }
`
const SubmitButton = styled.button`
    background: white;
    color: orange;
    padding: 5px;
    margin-right: 10px;
    width: 60px;
    height: 55px;
    font-size: 30px;
    border: 3px solid black;
    border-radius: 15px;

    &:hover{
        background: darkgrey;
        transition: .5s;
    }
`


function RecipeCard({ card }) {

    const { state } = useContext(Context)

    const [editing, setEditing] = useState(false);
    const [editCard, setEditCard] = useState(card);

    function handleChange(e) {
        let event = { ...e }
        setEditCard(old => {
            return {
                ...old,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleEdit() {
        setEditing(v => !v)
    }

    function handleDelete() {
        axiosAuth.delete(`api/recipe/${card.id}`).then(res => console.log(res)).catch(res => console.log(res))

        state.dispatch({
            type: "DELETE",
            payload: card.id
        })
    }

    function handleSubmit() {
        axiosAuth.put(`api/recipe/${card.id}`, editCard).then(res => console.log(res)).catch(res => console.log(res))
        setEditing(false)
        state.dispatch({
            type: "EDIT",
            payload: editCard
        })
    }


    return (
        <CardContainer className="no-scroll">
            <div className='card-title'>
                <CardTitle name="recipe_name" onChange={handleChange} contentEditable={editing}>{card["recipe_name"]}</CardTitle>
            </div>
            <div className='card-author'>
                <h3>By : <span name="source" onChange={handleChange} contentEditable={editing}>{card.source}</span></h3>
            </div>
            <div className='ingredients no-scroll'>
                <IngredientsUL>
                    {card.ingredients.map((v, i) => {
                        return (
                            <IngredientsLI key={i} name="ingredients" onChange={handleChange} contentEditable={editing}>{v}</IngredientsLI>
                        )
                    })}

                </IngredientsUL>
            </div>
            <div className='instructions'>
                <p>Instructions: <span name="instructions" onChange={handleChange} contentEditable={editing}>{card["recipe_instructions"]}</span></p>
            </div>
            <ButtonContainer>
                <EditButton onClick={handleEdit}>✏️</EditButton>
                <DeleteButton onClick={handleDelete}>❌</DeleteButton>
                {editing && <SubmitButton onClick={handleSubmit}>✉</SubmitButton>}
            </ButtonContainer>
        </CardContainer>
    )
}



export default RecipeCard;