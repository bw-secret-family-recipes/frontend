import React, { useState, useContext } from 'react';
import styled from 'styled-components';

// import {Edit} from 'styled-icons/boxicons-regular/Edit';
import { axiosAuth, Context } from "../utils"


export const foodImages = [
    "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=694&q=80",
    "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1470549813517-2fa741d25c92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1465362261089-a2ab269caa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1569554889864-2be293851af8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1422919869950-5fdedb27cde8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1443131612988-32b6d97cc5da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1482137526803-25edd694e5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
]

export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}



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
    margin-top: 70px;
    transition: width 1s;


    .instructions{
        text-decoration: underline;
        text-decoration-color: #541A51;
    }

    .ingredients{
        width:100%;
        min-height:150px;
        overflow:auto;
    }
    .card-title {
        border-radius: 15px 15px 0 0;
        border: 2px solid #3f043c;
        h2 {
            background-color: #0005;
            color: white;
            padding:15px 0;
        }
    .side-pannel {
        width: 100%;
    }
    }
`;
const CardTitle = styled.h2`
    display: flex;
    justify-content: center;
`;
const IngredientsUL = styled.ul`
    font-size: 22px;
    height:auto;
    background: #D85505;
`;
const IngredientsLI = styled.li`
    font-size:1.1rem;
`;
const ButtonContainer = styled.div`
    justify-content: space-between;
    padding: 3px;
    margin: 0 auto;
`;
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
`;
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
    
    .side-pannel{
        width: 50%;
    }
    .toggling {
        width: 80%;
    }
`;

function RecipeCard(props) {
    const { card, handleFullscreen } = props;
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

    // function handleFullscreen() {
    //     setCardSize(s => !s)
    // }

    function handleSubmit() {
        dispatch({
            type: "EDIT",
            payload: editCard
        })
        //axiosAuth().put(`recipe/${card.id}`, editCard).then(res => console.log(res)).catch(res => console.log(res))
        setEditing(false)
    }

    return (
        // <div className = {`${(cardSize) ? 'side-pannel' : ''}`} onChange = {handleFullscreen}>Hello</div>
        <CardContainer className={`no-scroll ${(cardSize) ? 'toggling' : ''}`} onChange={handleFullscreen}>
            <div className='card-title' style={{
                "background": `url(${foodImages[randInt(0, foodImages.length)]}) 100% / cover`
            }}>
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
                <FullscreenButton onClick={() => handleFullscreen(<RecipeCard {...props} />)}><i className='material-icons lime601 md-36'>photo_size_select_small</i></FullscreenButton>
                {editing && <Button onClick={handleSubmit}><i className='material-icons lime601 md-36'>check_circle_outline</i></Button>}

            </ButtonContainer>
        </CardContainer>
    )
}

export default RecipeCard;
