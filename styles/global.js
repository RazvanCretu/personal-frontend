import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif,Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.Global.body};
    color: ${({ theme }) => theme.Global.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    transition: 0.5s;
  }

`;
