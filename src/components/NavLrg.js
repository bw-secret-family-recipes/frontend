import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './images/logo.png';
import SearchForm from "./SearchForm"


const NavWrap = styled.nav`
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 1rem;
    background: #3f043c;
    width:100%;
    a {
        text-decoration: none;
        color: #8ec63f;
        :hover {
            color: #c7720f;
        }
    }
`;

const ImgBox = styled.img`
    width: 200px;
    padding-left: 1rem;
`;

const LinkWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #8ec63f;
    font-size: 1.2rem;
    margin-right:10px;
    :hover {
        color: #c7720f;
    }
`;
const Divide = styled.h2`
    color: #8ec63f;
`;
const Search = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20%;
`;
const StyleSignBtn = styled.button`
    color: #8ec63f;
    border: none;
    background: #3f043c;
    cursor: pointer;
    font-size: 1.2rem;
    :hover {
        color: #c7720f;
    }
`

//nav needs dashboard, receipe, search 
const NavLrg = (props) => {

    let signin = localStorage.getItem("token") ? "Sign Out" : "Sign In"

    function handleSignin() {
        if (signin == "Sign Out") {
            localStorage.setItem("token", "")
        }
        props.history.push("/")
    }

    return (
        <NavWrap>
            <div>
                <ImgBox src={logo} alt='Secrect Family Recipes' />
            </div>
            <LinkWrap>

                <Search>
                    <i className="material-icons lime600 md-36"><SearchForm />search</i>
                </Search>
                <StyledLink href="https://cbsecretfamilyrecipes.netlify.com/">Home</StyledLink>
                <Divide>|</Divide>
                <StyleSignBtn onClick={handleSignin}>{(signin)}</StyleSignBtn>
            </LinkWrap>
        </NavWrap>
    );
}
export default NavLrg

/*
removed parts
- returned in NavWrap <StyledLink to="/dashboard">Dashboard </StyledLink>
*/