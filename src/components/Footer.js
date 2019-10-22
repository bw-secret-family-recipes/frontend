import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';

const FootContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-evenly;
    background: #3f043c;
    height: 24vh;
    margin: 0;
    padding: 1rem;
    color: white;
`;

const Address = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`;
const Info = styled.p`
    line-height: 1;
    font-size: .8rem;

`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Image = styled.img`
    width: 300px;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    font-size: .9rem;
    padding-top: 3%;
`
const Footer = () => {

    return (
        <FootContainer>
            <Address>
                <Info>Secret Family Recipes</Info>
                <Info>1054 Somewhere Street</Info>
                <Info>Whoville, TN 086520 USA</Info>
                <Info>800.222.2222</Info>
            </Address>
            <ImgBox>
                <Image src = {logo} alt = 'logo'/>
            </ImgBox>
            
            <Contact>
                <p>E-MAIL: info@secretfamilyrecipes.com</p>
                <h3>Secret Family Recipes</h3>
            </Contact>
            
        </FootContainer>
    )
}

export default Footer;