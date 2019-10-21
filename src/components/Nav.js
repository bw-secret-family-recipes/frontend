import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavUl = styled.ul`
    display: flex;
    width: 800px;
    justify-content: space-between;
    background: #8a00d4;
    padding: 1rem 2rem;
    border-radius: 0px 0 5px 5px;
`;
const NavLi = styled.li`
    display:flex;
    text-decoration: none;
    
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    :hover {
        color: #ffc46b;
        
    }
`;

//nav needs dashboard, receipe, search 
const Nav = () =>{

    return (
        <div>
            <nav>
                <NavUl>
                    <NavLi><StyledLink to="">
                    Dashboard</StyledLink></NavLi>

                    <NavLi><StyledLink to="">
                    Receipe</StyledLink></NavLi>

                    <NavLi><StyledLink>
                    Search</StyledLink></NavLi>
                    
                    <NavLi><StyledLink>
                    Sign Out</StyledLink></NavLi>
                </NavUl>
            </nav>
        </div>
    );
}
export default Nav