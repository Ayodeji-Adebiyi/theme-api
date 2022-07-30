import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext';

function Button({name,arrow,icon,blob}) {
    const Theme = useTheme()
    return (
        <ButtonStyled Theme={Theme}>
            {name}
            <span className={arrow}><i className={icon}></i></span>
            <span className={blob}></span>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.a`
    cursor: pointer;
    overflow: hidden;
    padding: .5rem 2rem;
    border-radius: 15px;
    position: relative;
    transition: all 0.4s ease-in-out;
    display: inline-block;
    color: #fff;
    &:not(:first-child){
        margin-left: 1.4rem;
        border: 1px solid ${props => props.Theme.primary};
    }
    &:first-child{
        background-color: ${props => props.Theme.primary};
    }
    .blob{
        position: absolute;
        top: -5px;
        right: -55%;
        width: 75px;
        height: 75px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(.21, .69, .73, 1.08);
    }
    &:hover{
        span{
            right: -30%;
            top: -15px;
        }
    }
    @media screen and (max-width: 414px){
        &:first-child{
            margin-left: 1.4rem !important;
        }
    }
`;
export default Button