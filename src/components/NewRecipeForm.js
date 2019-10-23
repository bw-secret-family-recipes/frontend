import React, { useState, useContext } from "react";
import { axiosAuth } from "../utils";
import styled from "styled-components";
import { Context } from "../utils";

const Wrap = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d85505;
  padding: 5px;
  border-radius: 15px;
`;

const InputBox = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 1.2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.5rem;
`;
const InputArea = styled.textarea`
  font-family: "Poppins", sans-serif;
  font-size: 1.2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.5rem;
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
  height: 3em;
  margin: auto;
  border: 1px solid #3f043c;
  border-radius: 3px;
  background: white;
  color: #d85505;
`;
const Space = styled.p`
  margin: 0.8em;
  padding: 0;
`;

const NewRecipe = props => {
  const state = useContext(Context);
  const [newRecipe, setNewRecipe] = useState({
    recipe_name: "",
    source: "",
    // ingredients: [{ id: "", ingredient: "", quantity: "", unit: "" }],
    categories: [],
    ingredients: [],
    recipe_instructions: ""
  });
  //these states are held seperately so they can be put into the array
  const [ingredients, setIngredients] = useState({
    ingredients: ""
  });
  const [tags, setTags] = useState({
    tags: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleIngredient = e => {
    e.preventDefault();
    setIngredients({ ...ingredients, [e.target.name]: e.target.value });
  };
  const handleTags = e => {
    e.preventDefault();
    setTags({ ...tags, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // axiosAuth()
    //   .post("/recipe", newRecipe)
    //   .then(res => console.log(res.data));
    state.dispatch({
      type: "ADD",
      payload: [newRecipe]
    });
  };

  const Ingredient = e => {
    e.preventDefault();
    e.stopPropagation();
    if (ingredients.ingredients != "") {
      setNewRecipe({
        ...newRecipe,
        ingredients: [...newRecipe.ingredients, ingredients.ingredients]
      });
      setIngredients({ ingredients: "" });
      document.getElementById("ingredientinput").value = "";
      console.log(newRecipe.ingredients);
    }
  };

  const Tag = e => {
    if (tags.tags != "") {
      e.preventDefault();
      e.stopPropagation();
      setNewRecipe({
        ...newRecipe,
        categories: [...newRecipe.categories, tags.tags]
      });
      setTags({ tags: "" });
      document.getElementById("taginput").value = "";
    }
  };

  return (
    <Wrap>
      <h1>Your New Recipe!</h1>
      <div>
        <MainForm onSubmit={onSubmit}>
          <InputBox
            type="text"
            name="recipe_name"
            value={newRecipe.recipe_name}
            placeholder="Title:"
            onChange={handleChange}
          />
          <InputBox
            type="text"
            name="source"
            value={newRecipe.source}
            placeholder="Author:"
            onChange={handleChange}
          />
          <IngredFormSet>
            <InputBox
              id="ingredientinput"
              type="text"
              name="ingredients"
              value={ingredients.ingredients}
              placeholder="ingredient:"
              onChange={handleIngredient}
            />
            <BtnClick type="button" onClick={Ingredient}>
              Add Ingredient!
            </BtnClick>
          </IngredFormSet>
          {newRecipe.ingredients.map(item => (
            <p key={item}>{item}</p>
          ))}
          <InputArea
            type="textarea"
            name="recipe_instructions"
            value={newRecipe.recipe_instructions}
            placeholder="Instructions:"
            onChange={handleChange}
          />
          <IngredFormSet>
            <InputBox
              id="taginput"
              type="text"
              name="tags"
              value={tags.tags}
              placeholder="Tag:"
              onChange={handleTags}
            />
            <BtnClick type="button" onClick={Tag}>
              Add Tag!
            </BtnClick>
          </IngredFormSet>
          {newRecipe.categories.map(item => (
            <span key={item}>{item}, </span>
          ))}
          <Space />
          <BtnClick>Add Recipe!</BtnClick>
        </MainForm>
      </div>
    </Wrap>
  );
};

export default NewRecipe;
