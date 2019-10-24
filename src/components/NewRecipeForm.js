import React, { useState, useContext } from "react";
import { axiosAuth } from "../utils";
import styled from "styled-components";
import { Context } from "../utils";

const Wrap = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  height: 80px;
  width: 100%;
`;
const MainForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
  background: #f2e2ce;
  border-radius: 3px;
  background: #3f043c;
  width: 250px;
  height: 400px;
  overflow: auto;
  box-sizing: border-box;
  border-radius: 15px;
  margin-right: 50px;
  margin-top: 50px;

  span {
    color: white;
  }
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
const ListItems = styled.span`
  padding-right: 5px;
`;

const NewRecipe = props => {
  const state = useContext(Context);
  const [newRecipe, setNewRecipe] = useState({
    id: 1,
    recipe_name: "",
    source: "",
    // ingredients: [{ id: "", ingredient: "", quantity: "", unit: "" }],
    categories: [],
    ingredients: [],
    recipe_instructions: ""
  });
  //these states are held seperately so they can be put into the arrays
  const [ingredients, setIngredients] = useState({
    ingredients: ""
  });
  const [tags, setTags] = useState({
    tags: ""
  });
  //handles state changes for the newRecipe object
  const handleChange = e => {
    e.preventDefault();
    setNewRecipe({
      ...newRecipe,
      id: Date.now(),
      [e.target.name]: e.target.value
    });
  };
  //handles state changes for the ingredients and tags arrays before adding them to the newRecipe Object
  const handleIngredient = e => {
    e.preventDefault();
    setIngredients({
      ...ingredients,
      [e.target.name]: e.target.value
    });
  };
  const handleTags = e => {
    e.preventDefault();
    setTags({ ...tags, [e.target.name]: e.target.value });
  };
  //adds newRecipe to the reducer and will eventually make an api call
  const onSubmit = e => {
    e.preventDefault();
    if (document.getElementById("recipe_name").value != "") {
      // axiosAuth()
      //   .post("/recipe", newRecipe)
      //   .then(res => console.log(res.data));
      state.dispatch({
        type: "ADD",
        payload: [newRecipe]
      });
      setNewRecipe({
        id: 1,
        recipe_name: "",
        source: "",
        // ingredients: [{ id: "", ingredient: "", quantity: "", unit: "" }],
        categories: [],
        ingredients: [],
        recipe_instructions: ""
      });
    }
  };
  //adds ingredients to the newRecipe ingredients array
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
    }
  };
  //adds tags to the newRecipe categories array
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
    <MainForm id="form" onSubmit={onSubmit} className="no-scroll">
      <InputBox
        id="recipe_name"
        type="text"
        name="recipe_name"
        value={newRecipe.recipe_name}
        placeholder="Title:"
        onChange={handleChange}
        required
      />
      <InputBox
        type="text"
        name="source"
        value={newRecipe.source}
        placeholder="Author:"
        onChange={handleChange}
      />
      {newRecipe.ingredients.map((item, index) => (
        <ListItems key={index}>{item},</ListItems>
      ))}
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

      <InputArea
        id="recipe_instructions"
        type="textarea"
        name="recipe_instructions"
        value={newRecipe.recipe_instructions}
        placeholder="Instructions:"
        onChange={handleChange}
      />
      {newRecipe.categories.map((item, index) => (
        <ListItems key={index}>{item},</ListItems>
      ))}
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

      <BtnClick id="submitbutton">Add Recipe!</BtnClick>
    </MainForm>
  );
};

export default NewRecipe;
