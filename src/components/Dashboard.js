import React from 'react';
import styled from 'styled-components';
import RecipeList from "./RecipeList"
import Nav from './Nav';

import data from '../data';

const Wrap = styled.div`
    height: 50vh;
    background: #f2e2ce;
    margin: 0;
`;

const Bold = styled.h1`
    margin: 0;
`;

function Dashboard(props) {
    return (
        <>
            <header className="App-header">
                <Nav {...props} />
            </header>
            <Wrap>
                <RecipeList></RecipeList>
            </Wrap>
        </>
    );
}
export default Dashboard