import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from "../utils"

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    align-items: center;
    background: #d85505;
`;
const WrapBox = styled.div`
    cursor:pointer;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #8ec63f;
    padding:20px 10px;
    h4 {
        margin-left: 5%;
        width: 65%;
    }
    :hover {
        color: #8ec63f;
    }
`;

const DashNav = () => {

    const state = useContext(Context)

    function handleClick(keyword) {

    }

    return (
        <Wrap>
            {/* <WrapBox>
                <h4>Profile</h4>
                <i className="material-icons md-24">search</i>
            </WrapBox> */}
            <WrapBox onClick={() => handleClick("new recipe")}>
                <h4>New Recipe</h4>
                <i className="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("breakfast")}>
                <h4>BreakFast</h4>
                <i className="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("lunch")}>
                <h4>Lunch</h4>
                <i className="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("dinner")}>
                <h4>Dinner</h4>
                <i className="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox onClick={() => handleClick("snacks")}>
                <h4>Snacks</h4>
                <i className="material-icons md-24">search</i>
            </WrapBox>
        </Wrap>
    )
}
export default DashNav