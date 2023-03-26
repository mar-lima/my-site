import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family:'Roboto', sans-serif ;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
}    
* {
    
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    
}
body {
    color: #fff;
    margin: 0 auto;
    min-width: 320px;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.backColor}; 
    }

`;