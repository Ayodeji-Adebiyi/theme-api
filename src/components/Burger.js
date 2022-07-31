import React, { useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext';
import RightNav from './RightNav';

function Burger() {
    const Theme = useTheme()
    const [open, setOpen] = useState(false)
    return (
        <>
            <BurgerStyled open={open} onClick={() => setOpen(!open)} Theme={Theme}>
                <div/>
                <div/>
                <div/>
            </BurgerStyled>
            <RightNav open={open} Theme={Theme}/>
        </> 
    )
}

const BurgerStyled = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;

    @media screen and (max-width: 414px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        top: 30px;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#ccc' : '#7B9E87'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all .3s linear;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export default Burger