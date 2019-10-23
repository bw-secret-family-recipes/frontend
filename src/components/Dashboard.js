
import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import DashNav from './DashNav';
import RecipeList from "./RecipeList"
import NavLrg from './NavLrg';

const Column = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

function Dashboard(props) {
    return (
        <>
            <header className="App-header">
                <NavLrg {...props} />
            </header>
//             <Column>
            <Route path="/dashboard" component={DashNav} />
            <Route path="/dashboard" component={RecipeList} />
            </Column>
        </>
    );
// =======
// import React from "react";

// import RecipeList from "./RecipeList";
// import Nav from "./Nav";

// function Dashboard(props) {
//   return (
//     <>
//       <header className="App-header">
//         <Nav {...props} />
//       </header>

//       <RecipeList></RecipeList>
//     </>
//   );
// >>>>>>> master
}
export default Dashboard;
