import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background-color: #f4f4f4;
    --primary-color: #1BA2A1;
    --text-color: #474747;
  }

  body, #root {
    min-height: 100vh;

    background-color: var(--background-color);

    display: flex;

    flex: 1;

    font-family: 'Poppins', sans-serif;

    color: var(--text-color);
  }
`
