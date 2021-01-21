import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background: no-repeat ;
    background-color: #8306FF;
    background-size: cover;
  }
  li{
    list-style: none;
  }
  a, a:visited, a:hover, a:active{
    text-decoration: none;
    color: white;
  }
`