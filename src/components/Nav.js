import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from './images/logo.png';

const NavWrap = styled.nav`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: #3f043c;
`;

const ImgBox = styled.img`
    width: 200px;

`;

const LinkWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #8ec63f;
    font-size: 2rem;
    :hover {
        color: #c7720f;
        
    }
`;

//nav needs dashboard, receipe, search 
const Nav = () =>{

    return (
        <NavWrap>
            <div>
                <ImgBox src={logo} alt='Secrect Family Recipes' />
            </div>
            <LinkWrap>
                <StyledLink to="">Dashboard </StyledLink>
                <StyledLink to="">Receipe   </StyledLink>
                <StyledLink to="">Search    </StyledLink>
                <StyledLink to="">Sign Out  </StyledLink>
            </LinkWrap>
        </NavWrap>
    );
}
export default Nav