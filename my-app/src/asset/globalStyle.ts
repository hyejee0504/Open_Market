import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root{
        /* color */
        --color-main: #AA76FF;
        --color-white:#FFFFFF;
        --color-yellow: #FFED8D;
        --color-red:#EB5757;
        --color-brightGrey:#F2F2F2;
        --color-grey:#C4C4C4;
        --color-darkGrey:#767676;
        --color-black:#000000;
        --color-brightPurple: #D0B2FF;
    }

    * {
        box-sizing: border-box;

    }

    html, button, input, textArea{
    font-size: 10px;
    font-family: SpoqaHanSansNeo, sans-serif;
  } 

    .ir {
        position: absolute;
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    button{
    padding:0;
    background:transparent; 
    border:none; 
    cursor: pointer;
  }

    a {
        text-decoration: none;
        color: inherit;
    }
`