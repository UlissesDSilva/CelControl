import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #f2f2f2;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    height: 100vh;
  }
`;
