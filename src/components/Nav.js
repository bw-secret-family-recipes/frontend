import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './images/logo.png';
import SearchForm from "./SearchForm"


const NavWrap = styled.nav`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-between;
    height: 15vh;
    padding: 1rem;
    background: #3f043c;
`;

const ImgBox = styled.img`
    width: 200px;
    padding-left: 1rem;
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
const Nav = (props) => {

    let signin = localStorage.getItem("token") ? "Sign Out" : "Sign In"

    function handleSignin() {
        if (signin == "Sign Out") {
            localStorage.setItem("token", "")
        } else {
            props.history.push("/")
        }
    }

    return (
        <NavWrap>
            <div>
                <ImgBox src={logo} alt='Secrect Family Recipes' />
            </div>
            <LinkWrap>
                <SearchForm></SearchForm>
                <StyledLink to="/dashboard">Dashboard </StyledLink>
                <StyledLink onClick={handleSignin}>{(signin)}</StyledLink>
            </LinkWrap>
        </NavWrap>
    );
}
export default Nav