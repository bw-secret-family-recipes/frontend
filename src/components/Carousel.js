import React from "react";
import { foodImages, randInt } from "./RecipeCard"
import styled from "styled-components";

const CarouselStyle = styled.section`
    display:flex;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    margin-left:15px;
    @media (max-width: 800px) {
        display: none;
      }
`

const CarouselItemStyle = styled.div`
    display:flex;
    align-items:center;
    border-radius:30px;
    background:white;
    height:45px;
    padding:5px;
    cursor:pointer;
    margin-right:15px;
    img{
        height:40px;
        width:40px;
        border-radius:50%;
        object-fit:fill;
    }
`

const Carousel = (props) => {
    return (
        <CarouselStyle>
            {props.items.map(v => {
                return <CarouselItem {...v}></CarouselItem>
            })}
        </CarouselStyle>
    )
}

const CarouselItem = (props) => {
    return (
        <CarouselItemStyle>
            <img src={foodImages[randInt(0, foodImages.length)]} alt="image" />
            <span>{props["recipe_name"]}</span>
        </CarouselItemStyle>
    )
}

export default Carousel;

