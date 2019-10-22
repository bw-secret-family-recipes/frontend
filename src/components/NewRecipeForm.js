import React, { useState } from "react";
import axiosAuth from "../utils/axiosAuth";
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d85505;
  padding-bottom: 5%;
`;
const InputBox = styled.input`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: .5em;
  margin: .5rem;
`;
const InputArea = styled.textarea`
font-family: 'Poppins', sans-serif;
font-size: 1.2;
border: 1px solid lightgrey;
border-radius: 3px;
padding: .5em;
margin: .5rem;
`;
const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
  background: #f2e2ce;
  border-radius: 3px;
`;
const IngredFormSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #3f043c;
  border-radius: 3px;
  margin: 1em 0;
  
`;
const BtnClick = styled.button`
  width: 14em;
  height:3em;
  margin: auto;
  border: 1px solid #3f043c;
  border-radius: 3px;
  background: white;
  color: #d85505;
`;
const Space = styled.p`
  margin: .8em;
  padding: 0;
`;

const NewRecipe = props => {
  const [newRecipe, setNewRecipe] = useState({
    id: "",
    userid: "",
    title: "",
    author: "",
    ingredients: [{ id: "", ingredient: "", quantity: "", unit: "" }],
    instructions: ""
  });
  const [ingredients, setIngredients] = useState({
    ingredients: {}
  });

  const handleChange = e => {
    e.preventDefault();
    setNewRecipe({ ...newRecipe, [e.taget.name]: e.target.value });
  };

  const handleIngredient = e => {
    e.preventDefault();
    setIngredients({ ...ingredients, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    axiosAuth()
      .post("", newRecipe)
      .then(res => console.log(res.data), props.history.push("/dashboard"));
  };

  const onSubmitIngredient = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, ingredients]
    });
    setIngredients({});
  };

  return (
    <Wrap>
      <h1>Your New Recipe!</h1>
      <div>
        <MainForm onSubmit={onSubmit}>
          <InputBox
            type="text"
            name="title"
            value={newRecipe.title}
            placeholder="Title:"
            onChange={handleChange}
          />
          
          <InputBox
            type="text"
            name="author"
            value={newRecipe.author}
            placeholder="Author:"
            onChange={handleChange}
          />
          <form onSubmit={onSubmitIngredient}>
            <IngredFormSet>
              <legend>Ingredients</legend>
                <InputBox
                type="text"
                name="ingredient"
                value={newRecipe.ingredients.ingredient}
                placeholder="Ingredient"
                onChange={handleIngredient}
                />
                <InputBox
                type="text"
                name="quantity"
                value={newRecipe.ingredients.quantity}
                placeholder="Amount:"
                onChange={handleIngredient}
                />
                <InputBox
                type="text"
                name="unit"
                value={newRecipe.ingredients.unit}
                placeholder="Unit:"
                onChange={handleIngredient}
                />
                <Space/>
                <BtnClick>Add Ingredient</BtnClick>
                <Space/>
              </IngredFormSet>
          </form>
          {/*{ingredients.map(item => (
            <div>
              {item.ingredient}:{item.quantity}
              {item.unit}
              <br />
            </div>
          ))}*/}
          
          <InputArea
            type="textarea"
            name="instructions"
            value={newRecipe.instructions}
            placeholder="Instructions:"
            onChange={handleChange}
          />
          <Space />
          <BtnClick>Add Recipe!</BtnClick>
        </MainForm>
      </div>
    </Wrap>
  );
};

export default NewRecipe;
