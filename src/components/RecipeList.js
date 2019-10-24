import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import NewRecipe from "./NewRecipeForm";
import { Context } from "../utils";
const RecipeContainer = styled.div`
    width: 85%;
    display: flex;
    background: #f2e2ce
    height: 80vh;
    flex-wrap:wrap;
    justify-content: center;
    overflow:auto;
`;
const AddCard = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  border: 2px solid #fff;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-radius: 15px;
  transition: 0.5s ease;
  cursor: pointer;
  position: relative;
  margin-right: 50px;
  margin-top: 50px;
  h1 {
    position: absolute;
    top: 20px;
    font-size: 1.4rem;
  }
  &:hover {
    background: #fff9;
    color: gray;
  }
`;
function RecipeList(props) {
  const ctx = useContext(Context);

  const [show, setShow] = useState(false);

  const toggleFalse = () => {
    setShow(false);
  };

  const toggleTrue = () => {
    setShow(true);
  };

  const addCard = (
    <AddCard onClick={toggleTrue}>
      <h1>Add New Recipe</h1>
      <p>+</p>
    </AddCard>
  );

  useEffect(() => {
    if (document.getElementById("addrecipe")) {
      document
        .getElementById("addrecipe")
        .addEventListener("click", toggleTrue);
    }
    if (document.getElementById("form")) {
      document.getElementById("form").addEventListener("submit", toggleFalse);
    }
  });

  return (
    <RecipeContainer className="no-scroll">
      {(show && <NewRecipe />) || addCard}
      {ctx.state["show recipes"].map(item => (
        <div key={item.id}>
          <RecipeCard card={item}></RecipeCard>
        </div>
      ))}
    </RecipeContainer>
  );
}
export default RecipeList;
