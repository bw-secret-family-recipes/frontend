import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    align-items: center;
    background: #d85505;
`;
const WrapBox = styled.div`
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

    return (
        <Wrap>
            <WrapBox>
                <h4>Profile</h4>
                <i class="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox>
                <h4>New Recipe</h4>
                <i class="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox>
                <h4>BreakFast</h4>
                <i class="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox>
                <h4>Lunch</h4>
                <i class="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox>
                <h4>Dinner</h4>
                <i class="material-icons md-24">search</i>
            </WrapBox>
            <WrapBox>
                <h4>Snacks</h4>
                <i class="material-icons md-24">search</i>
            </WrapBox>
        </Wrap>
    )
}
export default DashNav