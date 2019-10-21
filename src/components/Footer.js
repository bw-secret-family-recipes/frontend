import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';

const FootContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    background: #8A00D4;
    flex-direction: column;
    color: white;
`;

const Address = styled.p`
    display: flex;
    justify-content: center;
`;
const Image = styled.img`
    display: flex;
    justify-content: center;
`

const Footer = () => {

    return (
        <FootContainer>
            <Address>
                <p>Secret Family Recipes</p>
                <p>1054 Somewhere Street</p>
                <p>Whoville, TN 086520 USA</p>
                <p>800.222.2222</p>
            </Address>
            <Image>
                <img src = {logo} alt = 'logo'></img>
            </Image>
        </FootContainer>
    )
}

export default Footer;