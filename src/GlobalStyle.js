import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        font-size: .9rem;
    }

    a{
        font-family: inherit;
        font-size: inherit;
        font-weight: 600;
    }

    .arrow{
        margin-left: .5rem;
        i{
            font-size: .8rem;
            animation: moveLR 2s infinite;
        }
        @keyframes moveLR {
            0%{
                transform: translateX(0);
            }
            50%{
                transform: translateX(5px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;

export default GlobalStyle