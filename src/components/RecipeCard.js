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
    height: 100%;
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
        <CardContainer>
            <div className='card-title'>
                <CardTitle name="recipe_name" onChange={handleChange} contentEditable={editing}>{card["recipe_name"]}</CardTitle>
            </div>
            <div className='card-author'>
                <h3>By : <span name="source" onChange={handleChange} contentEditable={editing}>{card.source}</span></h3>
            </div>
            <div className='ingredients'>
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

            <EditButton onClick={handleEdit}>edit</EditButton>
            <DeleteButton onClick={handleDelete}>delete</DeleteButton>
            {editing && <SubmitButton onClick={handleSubmit}>submit</SubmitButton>}
        </CardContainer>
    )
}



export default RecipeCard;