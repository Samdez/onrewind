import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background: rgb(115,36,179);
    background: linear-gradient(90deg, rgba(115,36,179,1) 3%, rgba(92,79,79,1) 100%);
    color: white;
    &::-webkit-scrollbar{
      display: none
    }
  }
  li{
    list-style: none;
  }
  a, a:visited, a:hover, a:active{
    text-decoration: none;
    color: white;
  }
  img{
    display: block;
  }
`