import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    width:100%;
    height:100vh;
    background: #f7f1f2;
    font-family: "Roboto", sans-serif;
}
html{
    font-size:62.5%;
}
span{
    font-weight:600;
    color:#ed7402;
    cursor:pointer;
}

`;