import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';

const FootContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    background: #8A00D4;
    
    color: white;
`;

const Address = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
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
                <img src = {logo} alt = 'logo'/>
            </Image>
            
            <Contact>
                <p>E-MAIL: info@secretfamilyrecipes.com</p>
                <h3>Secret Family Recipes</h3>
            </Contact>
            
        </FootContainer>
    )
}

export default Footer;