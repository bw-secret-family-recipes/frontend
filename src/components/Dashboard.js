import React from 'react';
import styled from 'styled-components';


const Wrap = styled.div`
    height: 50vh;
    background: #d85505;
    margin: 0;
`;

const Bold = styled.h1`
    margin: 0;
`;

function Dashboard() {
    return (
        <Wrap>
            <Bold>Dash</Bold>
        </Wrap>
    );
}
export default Dashboard