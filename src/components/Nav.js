import React from 'react'
import styled from 'styled-components'
import orilabi from '../img/orilabi-logo.png'
import Burger from './Burger';

function Nav() {
    return (
        <NavStyled>
            <div className="logo">
                <img src={orilabi} alt="" />
            </div>
            <Burger/>
        </NavStyled>
    )
}


const NavStyled = styled.nav`
    width: 100%;
    min-height: 10vh;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo{
        padding: 5px 0;
        img{
            width: 60px;
            height: 60px;
        }
    }
`;
export default Nav