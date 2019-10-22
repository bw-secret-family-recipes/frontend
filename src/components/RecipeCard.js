import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import {Edit} from 'styled-icons/boxicons-regular/Edit';
import { axiosAuth, Context } from "../utils"




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
const EditButton = styled.button`
    background: green;
    color: white;
    border-radius: 15px;

`

const DeleteButton = styled.button`
    background: red;
    color: white;
    border-radius: 15px;
`
const SubmitButton = styled.button`
    background: #3f043c;
    color: white;
    border-radius: 15px;
`



function RecipeCard({ card }) {

    const state = useContext(Context)

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
        <CardContainer>
            <div className='card-title'>
                <CardTitle name="recipe_name" onChange={handleChange} contenteditable={editing}>{card["recipe_name"]}</CardTitle>
            </div>
            <div className='card-author'>
                <h3>By : <span name="source" onChange={handleChange} contenteditable={editing}>{card.source}</span></h3>
            </div>
            <div className='ingredients'>
                <IngredientsUL>
                    {card.ingredients.map(v => {
                        return (
                            <IngredientsLI name="ingredients" onChange={handleChange} contenteditable={editing}>{v}</IngredientsLI>
                        )
                    })}

                </IngredientsUL>
            </div>
            <div className='instructions'>
                <p>Instructions: <span name="instructions" onChange={handleChange} contenteditable={editing}>{card.instructions}</span></p>
            </div>

            <EditButton onClick={handleEdit}>edit</EditButton>
            <DeleteButton onClick={handleDelete}>delete</DeleteButton>
            {editing && <SubmitButton onClick={handleSubmit}>submit</SubmitButton>}
        </CardContainer>
    )
}



export default RecipeCard;