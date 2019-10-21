import React, { useState } from "react";

const NewRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    author: "",
    ingredients: [{ ingredient: "", quantity: "" }],
    instrcutions: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setNewRecipe();
  };

  return <></>;
};

export default NewRecipe;
