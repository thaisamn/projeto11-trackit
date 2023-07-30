import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;

  p, h1{
    margin: 0px;
  }

  body {
    margin: 0;
    padding: 0;
    background: #FFF;
    font-family: 'Lexend Deca', sans-serif;
  }

  button {
    font-family: 'Lexend Deca', sans-serif !important;
  }
  
  input {
    font-family: 'Lexend Deca', sans-serif !important;
  }

  input::-webkit-input-placeholder {
  font-family: 'Lexend Deca', sans-serif;
  }

  input:-ms-input-placeholder {
    font-family: 'Lexend Deca', sans-serif;
  }

  input:-moz-placeholder {
    font-family: 'Lexend Deca', sans-serif;
  }

  input::-moz-placeholder {
    font-family: 'Lexend Deca', sans-serif;
  }
`;
