import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background-color: #ffffff;
    --primary-color: #1BA2A1;
    --text-color: #474747;
  }

  body, #root {
    min-height: 100vh;
    min-width: 100vw;

    background-color: var(--background-color);

    display: flex;

    font-family: 'Poppins', sans-serif;
  }
`
