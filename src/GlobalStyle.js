import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  li{
    list-style: none;
  }
  a, a:visited, a:hover, a:active{
    text-decoration: none;
    color: black;
  }
`