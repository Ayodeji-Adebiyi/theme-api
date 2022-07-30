import React from 'react'
import styled from 'styled-components'
import { useTheme, useThemeUpdate } from '../context/ThemeContext';
import Themes from '../Themes';
/*eslint-disable*/ 
function RightNav({open}) {
    const Theme = useTheme()
    const setTheme = useThemeUpdate()
    return (
        <Ul open={open} Theme={Theme}>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Deals</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
            <li>
                {
                    Themes.map((Theme, i) => {
                        return <button 
                            key={i}
                            onClick={() => setTheme(i)}
                            style={{backgroundColor: Theme.background}}
                        >
                        </button>
                    })
                }
            </li>
        </Ul>
    )
}

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    li{
        margin: 0 1rem;
        a{
            color: #718096;
        }
        button{
            outline: none;
            border: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            background: none;
            &:not(:last-child){
                margin-right: .5rem;
            }
        }
    }

    @media screen and (max-width: 414px) {
        flex-flow: column nowrap;
        background-color: #333;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 5;

        li{
            color: #fff;
            margin-bottom: 1rem;
        }

    }
`;

export default RightNav