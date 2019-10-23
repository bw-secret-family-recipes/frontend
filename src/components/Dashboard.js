
import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import DashNav from './DashNav';
import RecipeList from "./RecipeList"
import NavLrg from './NavLrg';

const Column = styled.div`
    display: flex;
`;

function Dashboard(props) {
    return (
        <div >
            <header className="App-header">
                <NavLrg {...props} />
            </header>
            <Column>
                <DashNav></DashNav>
                <RecipeList></RecipeList>
            </Column>
        </div>
    );

}
export default Dashboard;
