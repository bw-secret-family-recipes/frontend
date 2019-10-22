import React from 'react';

import RecipeList from "./RecipeList"
import Nav from './Nav';


function Dashboard(props) {
    return (
        <>
            <header className="App-header">
                <Nav {...props} />
            </header>

            <RecipeList></RecipeList>

        </>
    );
}
export default Dashboard