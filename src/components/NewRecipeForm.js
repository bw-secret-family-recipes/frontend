import React, { useState } from "react";
import axiosAuth from "../utils/axiosAuth";

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
    <div>
      <h1>Your New Recipe!</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            value={newRecipe.title}
            placeholder="Title:"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="author"
            value={newRecipe.author}
            placeholder="Author:"
            onChange={handleChange}
          />
          <form onSubmit={onSubmitIngredient}>
            <input
              type="text"
              name="ingredient"
              value={newRecipe.ingredients.ingredient}
              placeholder="Ingredient"
              onChange={handleIngredient}
            />
            <input
              type="text"
              name="quantity"
              value={newRecipe.ingredients.quantity}
              placeholder="Amount:"
              onChange={handleIngredient}
            />
            <input
              type="text"
              name="unit"
              value={newRecipe.ingredients.unit}
              placeholder="Unit:"
              onChange={handleIngredient}
            />
            <button>Add Ingredient</button>
          </form>
          {ingredients.map(item => (
            <div>
              {item.ingredient}:{item.quantity}
              {item.unit}
              <br />
            </div>
          ))}
          <br />
          <input
            type="textarea"
            name="instructions"
            value={newRecipe.instructions}
            placeholder="Instructions:"
            onChange={handleChange}
          />
          <br />
          <button>Add Recipe!</button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
