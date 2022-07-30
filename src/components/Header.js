import React from 'react'
import styled from 'styled-components'
import Nav from './Nav';
import chicken from '../img/chicken.png';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';
/*eslint-disable*/ 

function Header() {
    const Theme = useTheme()
    return (
        <HeaderStyled Theme={Theme}>
            <Nav/>
            <div className="header-content">
                <div className="l-header-content">
                    <h1>
                        Buttermilk Fried Chicken Tenders
                    </h1>
                    <p>
                    Marinated in buttermilk and fried to perfection, these chicken tenders
                    are wonderful on their own, dipped in honey mustard,
                    or served over a salad. Kids love them, grown ups love them…this one is hard to beat!
                    </p>
                    <div className="cta-btns">
                        <Button
                            name={'Order Now'}
                            icon={'fa-solid fa-angle-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                        <Button
                            name={'Contact Us'}
                            icon={'fa-solid fa-angle-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                    </div>
                </div>
                <div className="r-header-content">
                    <img src={chicken} alt="" />
                </div>
            </div>
            <div className="bg-overlay"></div>
            <div className="dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    height: 100%;
    width: 100%;
    padding: 1rem 100px;
    transition: all .3s ease-in-out;
    color: ${props => props.Theme.secondary};
    .bg-overlay{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: red;
        z-index: -1;
        clip-path: polygon(0 0, 50% 0, 83% 100%, 0% 100%);
        background: ${props => props.Theme.background};
    }

    .header-content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 5px;
        grid-gap: 3rem;
        .l-header-content{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1{
                font-size: 2.5rem;
                font-weight: 800;
                color: ${props => props.Theme.title};
            }
            p{
                margin: .8rem 0;
            }
            .cta-btns{
                display: flex;
            }
        }
        .r-header-content{
            position: relative;
            width: 100%;
            
            img{
                width: 80%;
                filter: drop-shadow(1px 2px 5px ${props => props.Theme.primary});
            }
        }
    }

    .dots{
        position: absolute;
        left: 50%;
        bottom: 7%;
        transform: translateX(-50%);
        display: flex;
        opacity: 0.8;
        .dot{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: slateblue;
            margin: 0 1px;
            background-color: #fff;
            cursor: pointer;
        }
        .dot-1{
                margin-right: 1px;
        }
        .dot-2, .dot-3{
            transform: scale(0.85);
            background-color: #D7C4C4;
        }
    }
    @media screen and (max-width: 414px){
        padding: 1rem 10px;
        .bg-overlay{
            clip-path: inset(0 0 40% 0) !important;
            height: 65% !important;
        }
        .header-content{
            grid-template-columns: 1fr;
            margin-top: 1rem;
        }
        .l-header-content{
            text-align: center;
            h1{
                font-size: 1.2rem !important;
            }
            p{
                font-size: .8rem !important;
                margin-bottom: 1rem !important;
            }
        }
        .r-header-content{
            img{
                width: 250px !important;
                margin: 0 auto !important;
                display: flex !important;
                
            }
        }
    }
`;

export default Header