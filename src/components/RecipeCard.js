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

    .card-title {
        background: url(https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80) 100% / cover;
        border-radius: 15px 15px 0 0;
        border: 2px solid #3f043c;
        h2 {
            background: #0005;
            color: white;
            padding:15px 0;
            
        }
    }
    
`
const CardTitle = styled.h2`
    display: flex;
    justify-content: center;
`
const IngredientsUL = styled.ul`
    font-size: 22px;
    height:auto;
    background: #D85505;
`
const IngredientsLI = styled.li`
    list-style-type: square;
`
const ButtonContainer = styled.div`
    justify-content: space-between;
    padding: 3px;
    margin: 0 auto;
    
`


const Button = styled.button`
    background: white;
    width: 45px;
    padding: 3px;
    margin-right: 10px;
    font-size: 25px;
    border: 3px solid black;
    border-radius: 15px;

    &:hover{
        background: darkgrey;
        transition: .5s;
    }
`


const FullscreenButton = styled.button`
    background: white;
    width: 45px;
    padding: 3px;
    margin-right: 10px;
    font-size: 25px;
    border: 3px solid black;
    border-radius: 15px;

    &:hover{
        background: darkgrey;
        transition: .5s;
    }
    
    .toggling {
        width: 80%;
    }
`

function RecipeCard({ card }) {

    const { state, dispatch } = useContext(Context)

    const [editing, setEditing] = useState(false);
    const [editCard, setEditCard] = useState(card);
    const [cardSize, setCardSize] = useState(false);


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

        // Use once backend is up
        // axiosAuth().delete(`recipe/${card.id}`)
        // .then(res => console.log(res))
        // .catch(res => console.log(res))
        console.log(card.id);
        dispatch({
            type: "DELETE",
            payload: card.id
        })
    }

    function handleFullscreen() {
        setCardSize(s => !s)
        // var element = document.getElementsByClassName('toggling')
        // element.classList.toggle('toggling');
    }

    function handleSubmit() {
        dispatch({
            type: "EDIT",
            payload: editCard
        })
        //axiosAuth().put(`recipe/${card.id}`, editCard).then(res => console.log(res)).catch(res => console.log(res))
        setEditing(false)
    }



    return (
        <CardContainer className={`no-scroll ${(cardSize) ? 'toggling' : ''}`} onChange={handleFullscreen}>
            <div className='card-title'>
                <CardTitle name="recipe_name" onChange={handleChange} contentEditable={editing} className={(editing ? "edit" : "")}>{card["recipe_name"]}</CardTitle>
            </div>
            <div className='card-author'>
                <h3>By : <span name="source" onChange={handleChange} contentEditable={editing} className={(editing ? "edit" : "")}>{card.source}</span></h3>
            </div>
            <div className='ingredients no-scroll'>
                <IngredientsUL>
                    {card.ingredients.map((v, i) => {
                        return (
                            <IngredientsLI key={i} name="ingredients" onChange={handleChange} contentEditable={editing} className={(editing ? "edit" : "")}>&#127859;{v}</IngredientsLI>
                        )
                    })}

                </IngredientsUL>
            </div>
            <div className='instructions'>
                <p>Instructions: <span name="instructions" onChange={handleChange} contentEditable={editing} className={(editing ? "edit" : "")}> {card["recipe_instructions"]}</span></p>
            </div>
            <ButtonContainer>
                <Button onClick={handleEdit}><i className='material-icons lime601 md-36'>edit</i></Button>
                <Button onClick={handleDelete}><i className='material-icons lime601 md-36'>delete</i></Button>
                <FullscreenButton onClick={handleFullscreen}><i className='material-icons lime601 md-36'>photo_size_select_small</i></FullscreenButton>
                {editing && <Button onClick={handleSubmit}><i className='material-icons lime601 md-36'>check_circle_outline</i></Button>}

            </ButtonContainer>
        </CardContainer>
    )
}



export default RecipeCard;
