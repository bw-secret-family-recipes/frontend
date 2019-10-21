import React, { useState } from "react";
import axiosAuth from "";

const NewRecipe = props => {
  const [newRecipe, setNewRecipe] = useState({
    id: "",
    userid: "",
    title: "",
    author: "",
    ingredients: [{ id: "", ingredient: "", quantity: "", unit: "" }],
    instrcutions: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setNewRecipe({ ...newRecipe, [e.taget.name]: e.target.value });
  };

  const handleIngredient = e => {
    e.preventDefault();
    setNewRecipe({ ...newRecipe.ingredients, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    axiosAuth()
      .post("", newRecipe)
      .then(res => console.log(res.data), props.history.push("/dashboard"));
  };

  const onSubmitIngredient = () => {
    setNewRecipe(newRecipe.ingredients);
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
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="author"
            value={newRecipe.author}
            onChange={handleChange}
          />
          <form onSubmit={onSubmitIngredient}>
            <input
              type="text"
              name="ingredient"
              value={newRecipe.ingredients.ingredient}
              onChange={handleIngredient}
            />
            <input
              type="text"
              name="quantity"
              value={newRecipe.ingredients.quantity}
              onChange={handleIngredient}
            />
            <input
              type="text"
              name="unit"
              value={newRecipe.ingredients.unit}
              onChange={handleIngredient}
            />
          </form>
          {ingredients.map(item => {
            <div>
              {item.ingredient}:{item.quantity}
              {item.unit}
              <br />
            </div>;
          })}
          <br />
          <input
            type="textarea"
            name="instrcutions"
            value={newRecipe.instrcutions}
            onChange={handleChange}
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
