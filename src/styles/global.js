import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
    
    input{
        border: none;
        &:focus{
            outline: none;
        }
        
    }
    ul{
        padding: 0;
        list-style: none;
    }
`;

export default GlobalStyle;
