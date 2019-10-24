import React from "react";
import { foodImages, randInt } from "./RecipeCard"
import styled from "styled-components";

const CarouselStyle = styled.section`
    display:flex;
   
`

const CarouselItemStyle = styled.div`
    border-radius:30px;
    background:white;
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
            <img src={foodImages[randInt(0, foodImages.length)]} alt="" />
            <span>{props["recipe_name"]}</span>
        </CarouselItemStyle>
    )
}

export default Carousel;

