
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import DashNav from './DashNav';
import RecipeList from "./RecipeList"
import NavLrg from './NavLrg';

const Column = styled.div`
    display: flex;
    height:85vh;
`;

const LargeCard = styled.div`
  background:#141518;
  display: flex;
  justify-content: center;
  align-items: center;
  width:0;
  height:0;
  overflow:hidden;

  .activeCardContainer{
    height:100%;
    width:100%;
    opacity:0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:1s ease;
    &>div{
        width: 100%;
        height:100%;
        padding-right: 2%;
        padding-top: 2%;
        margin: 0 auto;

        & *{
            font-size:1.4rem;
        }
    }
  }
`

function Dashboard(props) {
    const [cardSize, setCardSize] = useState(false);
    const [activeCard, setActiveCard] = useState();
    function sidebarHandler(component) {
        setActiveCard(component)
        setCardSize(s => !s);
    }

    return (
        <div >
            <header className="App-header">
                <NavLrg {...props} />
            </header>
            <Column>
                <DashNav />
                <RecipeList handleFullscreen={sidebarHandler} />
                <LargeCard className={`${(cardSize) ? 'side-pannel' : ''}`} onChange={sidebarHandler}>
                    <div className={`activeCardContainer ${(cardSize) ? 'visible' : ''}`}>{activeCard}</div>
                </LargeCard>
            </Column>
        </div>
    );

}
export default Dashboard;
